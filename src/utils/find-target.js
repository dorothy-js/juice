export default function( e, target ){
    if( target == 'parent' ){
        return [e.parentNode]
    }

    if( /parent\(([^"]+)\)/.test(target) ){
        let selector = target.match(/parent\(([^"]+)\)/)
        return [e.closest(selector[1])]
    }

    switch( target ){
    case 'target' :
    case 'this'   :
    case 'it'     :
    case 'itself' :
    case undefined:
        return [e]
    default:
        return document.querySelectorAll(target)
    }
}
