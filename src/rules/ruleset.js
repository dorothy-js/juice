class RuleCollection{
    static checkCommandType( command ){
        return command && command.name && command.execute
    }

    static checkBehaviourType( behaviour ){
        return behaviour && behaviour.name && behaviour.execute
    }

    constructor( commands, behaviours ){
        this.commands = {}
        this.behaviours = {}        
    }

    addCommand( command ){
        if( !RuleCollection.checkCommandType(command) ){
            return
        }
        if( this.commands[command.name] ){
            return
        }
        this.commands[command.name] = command
    }

    removeCommand( command ){
        if( !RuleCollection.checkCommandType(command) ){
            return
        }
        if( !this.commands[command.name] ){
            return
        }
        this.commands[command.name] = undefined
    }

    addBehaviour( behaviour ){
        if( !RuleCollection.checkBehaviourType(behaviour) ){
            return
        }
        if( this.behaviours[behaviour.name] ){
            return
        }
        this.behaviours[behaviour.name] = behaviour
    }

    removeBehaviour( behaviour ){
        if( !RuleCollection.checkBehaviourType(behaviour) ){
            return
        }
        if( !this.behaviours[behaviour.name] ){
            return
        }
        this.behaviours[behaviour.name] = undefined
    }
}


export default new RuleCollection()