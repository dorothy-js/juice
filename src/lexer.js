/**
* This function is loosely based on the one found here:
* http://www.weanswer.it/blog/optimize-css-javascript-remove-comments-php/
*/
// eslint-disable-next-line no-cond-assign
function removeComments(e){var o,n,l;for(e=('__'+e+'__').split(''),n={singleQuote:!1,doubleQuote:!1,regex:!1,blockComment:!1,lineComment:!1,condComp:!1},o=0,l=e.length;o<l;o++)if(n.regex)'/'===e[o]&&'\\'!==e[o-1]&&(n.regex=!1);else if(n.singleQuote)'\''===e[o]&&'\\'!==e[o-1]&&(n.singleQuote=!1);else if(n.doubleQuote)'"'===e[o]&&'\\'!==e[o-1]&&(n.doubleQuote=!1);else if(n.blockComment)'*'===e[o]&&'/'===e[o+1]&&(e[o+1]='',n.blockComment=!1),e[o]='';else if(n.lineComment)('\n'===e[o+1]||'\r'===e[o+1])&&(n.lineComment=!1),e[o]='';else if(n.condComp)'@'===e[o-2]&&'*'===e[o-1]&&'/'===e[o]&&(n.condComp=!1);else if(n.doubleQuote='"'===e[o],n.singleQuote='\''===e[o],'/'===e[o]){if('*'===e[o+1]&&'@'===e[o+2]){n.condComp=!0;continue}if('*'===e[o+1]){e[o]='',n.blockComment=!0;continue}if('/'===e[o+1]){e[o]='',n.lineComment=!0;continue}n.regex=!0}return e.join('').slice(2,-2)}

export const tokenize = ( string ) =>{
    var stream = []
    string.toString('utf8').split(/;|\r\n|[\n\r\u0085\u2028\u2029]/g).forEach( token =>{
        token = removeComments(token.trim())
        if( !token ){ return }
        stream.push(token)
    })
    return stream
}