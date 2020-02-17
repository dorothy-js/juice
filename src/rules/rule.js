function getRE( arr ){
    arr = Array.isArray(arr)? arr : [arr]
    return new RegExp('^'+arr.join('|'), 'i')
}


export class Rule{
    constructor( name, keyword, strategy ){
        this.name = name
        this.keyword = keyword
        this.strategy = strategy
    }

    canParse( data ){
        return getRE(this.keyword).test(data)
    }

    parse( data ){
        return getRE(this.keyword).exec(data)
    }

    execute( ...args ){
        let data
        data = args.shift()
        if( !data || !this.canParse(data.trim()) ){
            return
        }

        args.unshift(this.parse(data))
        return this.strategy.apply(this, args)
    }

}