import { Command } from '../rules/command'
import { findBehaviour } from '../parser'

let NO_OP = () =>{}
let strategy = function( sink, data ){
    let source, behaviour, behaviourStmt, name
    name = this.name.split('.').pop()

    let i = 1
    if( 'dynamic' == name ){
        name = data[i]
        i++
    }

    source = data[i++]
    behaviour = findBehaviour(data[i].trim())
    behaviourStmt = data[i].trim()

    document[`juice-domevents-${name}-on-${source}`] = function( e ){
        for( let target = e.target; target && target != this; target = target.parentNode ){
            if( target.matches(source) ){
                behaviour.execute(behaviourStmt, target)
                sink(e, target)
                break
            }
        }
    }

    document.addEventListener(name, document[`juice-domevents-${name}-on-${source}`])
    return true
}


export class DomEvents extends Command{
    constructor( name, keyword, sink ){
        super(name, keyword, NO_OP)
        this.strategy = function( ...args ){
            return strategy.apply(this, [sink].concat(args))
        }
    }
}
