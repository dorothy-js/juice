import { Rule } from './rule'

export class Command extends Rule{
    constructor( name, keywords, strategy ){
        super(name, keywords, strategy)
    }
}