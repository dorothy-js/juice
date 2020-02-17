import { BaseBehaviour } from './base'
import { default as findEventTarget } from '../utils/find-target'


let strategy = function( data, source ){
    let behaviour, target

    target = findEventTarget(source, data.target)
    behaviour = (data.behaviour.charAt(data.behaviour.length-1) == 's') ? data.behaviour.substring(0, data.behaviour.length-1) : data.behaviour;

    [].forEach.call(target, el =>{
        el.classList[behaviour](data.value)
    })
}

export class ClassList extends BaseBehaviour{
    constructor(){
        super('DOM.classList', '(add|adds|remove|removes|toggle|toggles) class "([^"]+)" on "([^"]+)"')

        this.strategy = function( ...args ){
            return strategy.apply(this, args)
        }
    }
}
