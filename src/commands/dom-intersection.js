import { Command } from '../rules/command'
import { findBehaviour } from '../parser'

let NO_OP = () => { }
let observeStrategy = function (data) {
    let source, target, behaviour, behaviourStmt
    source = data[1]
    target = data[2]
    behaviour = findBehaviour(data[3].trim())
    behaviourStmt = data[3].trim()
   
    let key = `juice-intersection-observer-on-${source}`

    target = document.querySelectorAll(target)
    if( source == 'window' ){
        source = null
    }else{
        source = document.querySelectorAll(source)
    }

    let observer

    let options = {
        root: source,
        rootMargin: '0px'
    }

    observer = new IntersectionObserver(function( entries ){
        entries.forEach(entry => {
            if (entry.isIntersecting ){
                behaviour.execute(behaviourStmt, entry.target)
            }
        })
    }, options)

    
    target.forEach( t => observer.observe(t) )

    document[key]  = observer        
    return true
}

let unobserveStrategy = function (data) {
    let source = data[1]

    let observer = document[`juice-intersection-observer-on-${source}`]

    if( observer ){
        observer.disconnect()
    }

    return true
}


export class DomObserve extends Command {
    constructor() {
        super('DOM.IntersectionObserver.observe', 'when dom "([^"]+)" intersects "([^"]+)"\\s(.*)', NO_OP)

        this.strategy = function (...args) {
            return observeStrategy.apply(this, args)
        }
    }
}

export class DomUnobserve extends Command {
    constructor() {
        super('DOM.IntersectionObserver.disconnect', 'unwatch dom "([^"]+)" intersections', NO_OP)

        this.strategy = function (...args) {
            return unobserveStrategy.apply(this, args)
        }
    }
}