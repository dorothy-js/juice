import { Behaviour } from '../rules/behaviour'

let NO_OP = () =>{}

export class BaseBehaviour extends Behaviour {
    constructor( name, keyword ){
        super(name, keyword, NO_OP)
    }

    parse( data ){
        data = super.parse(data)

        return {
            behaviour: data[1].trim(),
            value: data[2].trim(),
            target: data[3].trim()
        }
    }
}