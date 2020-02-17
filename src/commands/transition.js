import { Command } from '../rules/command'
import { findBehaviour } from '../parser'

let NO_OP = () =>{}
let strategy = function( data ){
    let source, behaviour, behaviourStmt
    source = data[1]
    behaviour = findBehaviour(data[2].trim())
    behaviourStmt = data[2].trim()

    document[`juice-transitionend-on-${source}`] = function( e ){
        for( let target = e.target; target && target != this; target = target.parentNode ){
            if( target.matches(source) ){
                behaviour.execute(behaviourStmt, target)
                //document.removeEventListener("transitionend", document[`juice-transitionend-on-${source}`]);
                break
            }
        }
    }

    document.addEventListener('transitionend', document[`juice-transitionend-on-${source}`])
    return true
}


export class Transition extends Command{
    constructor(){
        super('CSS.TransitionEnd', 'when transition ends on "([^"]+)"\\s(.*)', NO_OP)

        this.strategy = function( ...args ){
            return strategy.apply(this, args)
        }
    }
}