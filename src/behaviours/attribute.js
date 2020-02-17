import { BaseBehaviour } from './base'
import { default as findEventTarget } from '../utils/find-target'

let strategy = function( data, source ){
    let method, value, target
    target = findEventTarget(source, data.target)
    data.behaviour = (data.behaviour.charAt(data.behaviour.length-1) == 's') ? data.behaviour.substring(0, data.behaviour.length-1) : data.behaviour

    method = 'toggle'

    if( 'set' == data.behaviour ){
        method = 'setAttribute'
    }else if( 'remove' == data.behaviour ){
        method = 'removeAttribute'
    }

    value = data.value.trim().split(' to ')

    if( 'toggle' == method ){
        [].forEach.call(target, el =>{
            if( el.getAttribute(value[0].trim()) ){
                el.removeAttribute(value[0].trim())
            }else{
                value.length > 1 ? el.setAttribute(value[0].trim(), value[1].trim()) : el.setAttribute(value[0].trim(), true)
            }
        })
        return
    }

    [].forEach.call(target, el =>{
        if( 'setAttribute' == method ){
            value.length > 1 ? el.setAttribute(value[0].trim(), value[1].trim()) : el.setAttribute(value[0].trim(), true)
        }else if( 'removeAttribute' == method ){
            el.removeAttribute(value[0].trim())
        }
    })
}

export class Attribute extends BaseBehaviour{
    constructor(){
        super('DOM.attribute', '(set|sets|remove|removes|toggle|toggles) attribute "([^"]+)" on "([^"]+)"')

        this.strategy = function( ...args ){
            return strategy.apply(this, args)
        }
    }
}
