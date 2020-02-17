import Ruleset from './rules/ruleset'

export const findBehaviour = data =>{
    let i, behaviours, found

    behaviours = Ruleset.behaviours
    for( i in behaviours ){
        found = behaviours[i].canParse(data)
        if( found ){
            found = behaviours[i]
            break
        }
    }
    if( !found ){
        throw new Error('Juice: Behaviour `'+data.toString('utf-8')+'` not recognized!')
    }
    return found
}

export const parse = instructions =>{
    let commands

    instructions = Array.isArray(instructions)? instructions : [instructions]
    commands = Ruleset.commands
    instructions.forEach( instruction =>{
        let executed
        if( !instruction ){
            return
        }
        for( let i in commands ){
            executed = commands[i].execute(instruction)
            if( executed ){
                break
            }
        }
        if( !executed ){
            throw new Error('Juice: Command `'+instruction+'` not recognized!')
        }
        return executed
    })
    return true
}