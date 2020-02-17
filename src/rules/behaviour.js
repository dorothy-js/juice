import { Rule } from './rule'

export class Behaviour extends Rule{
    constructor( name, keywords, strategy ){
        keywords = Array.isArray(keywords)? keywords : [keywords]
        super(name, keywords, strategy)
    }
}