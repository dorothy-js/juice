import { tokenize } from './lexer'
import { parse as parseStrategy, findBehaviour as findBehaviourStrategy } from './parser'
import { Rule, Behaviour, Command } from './rules/index'
import Ruleset from './rules/ruleset'
import { Help, DomEvents, DomObserve, DomUnobserve, Transition, Animation } from './commands/index'
import { ClassList, Attribute } from './behaviours/index'

let NO_OP = () =>{}
let PREVENT_DEFAULT = function( evt, eventTarget ){
    if( 'a' == eventTarget.nodeName.toLowerCase() ){
        evt.preventDefault()
    }
}

let domEventsCommandsDescriptors = [
    {name: 'Mouse.click', keyword: 'clicking on "([^"]+)"\\s(.*)', sink: PREVENT_DEFAULT},
    {name: 'Mouse.dblclick', keyword: 'double clicking on "([^"]+)"\\s(.*)', sink: PREVENT_DEFAULT},
    {name: 'Mouse.mousedown', keyword: 'holding down on "([^"]+)"\\s(.*)', sink: NO_OP},
    {name: 'Mouse.mouseenter', keyword: 'hovering in "([^"]+)"\\s(.*)', sink: NO_OP},
    {name: 'Mouse.mouseleave', keyword: 'hovering away from "([^"]+)"\\s(.*)', sink: NO_OP},
    {name: 'Mouse.mousemove', keyword: 'moving on "([^"]+)"\\s(.*)', sink: NO_OP},
    {name: 'Mouse.mouseout', keyword: 'hovering out "([^"]+)"\\s(.*)', sink: NO_OP},
    {name: 'Mouse.mouseover', keyword: 'hovering on "([^"]+)"\\s(.*)', sink: NO_OP},
    {name: 'Mouse.mouseup', keyword: 'when released "([^"]+)"\\s(.*)', sink: NO_OP},
    {name: 'Mouse.focusin', keyword: 'focusing on "([^"]+)"\\s(.*)', sink: NO_OP},
    {name: 'Mouse.focusout', keyword: 'focusing out from "([^"]+)"\\s(.*)', sink: NO_OP},

    {name: 'DomEvents.dynamic', keyword: 'when dom emits "([^"]+)" on "([^"]+)"\\s(.*)', sink: PREVENT_DEFAULT }

]

Ruleset.addCommand(new Help())

domEventsCommandsDescriptors.forEach( function( d ){
    Ruleset.addCommand(new DomEvents(d.name, d.keyword, d.sink))
})

Ruleset.addCommand(new Animation())
Ruleset.addCommand(new Transition())
Ruleset.addCommand(new DomObserve())
Ruleset.addCommand(new DomUnobserve())
Ruleset.addBehaviour(new ClassList())
Ruleset.addBehaviour(new Attribute())

let parse = ( string ) => {
    tokenize(string).forEach( instruction =>{
        parseStrategy(instruction.trim())
    })
}

String.prototype.squeeze = function(){ parse(this) }


let findBehaviour = behaviour => {
    return findBehaviourStrategy(behaviour)
}

export {
    Rule,
    Behaviour,
    Command,
    Ruleset,
    parse,
    findBehaviour
}
