import { Command } from '../rules/command'
import Ruleset from '../rules/ruleset'

let helpStrategy = instruction =>{
    var behaviours,
        commands,
        i, tableData

    console.log('%cJuice Nutrition Table', 'font-weight:bold; font-size:18px')
    tableData = []
    console.groupCollapsed('Commands')

    commands = Ruleset.commands
    for( i in commands ){
        if( Object.prototype.hasOwnProperty.call( commands, i ) ){
            tableData.push({name: commands[i].name, keyword: commands[i].keyword})
        }
    }
    console.table(tableData)
    console.groupEnd()

    tableData = []
    console.groupCollapsed('Behaviours')
    behaviours = Ruleset.behaviours
    for( i in behaviours ){
        if( Object.prototype.hasOwnProperty.call( behaviours, i ) ){
            tableData.push({name: behaviours[i].name, keyword: behaviours[i].keyword.join(', ')})
        }
    }
    console.table(tableData)
    console.groupEnd()

    return true
}

export class Help extends Command{
    constructor(){
        super('help', 'help!', helpStrategy)
    }
}