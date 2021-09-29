
const LOG_PREFIX = 'Phulkari'

/**
 * @description Logs a warning to the browser console alongside a prefix making 
 * it easy to debug exactly where an issue has arisen 
 * 
 * @param {String} text Text describing the warning/issue
 * @param {any} addParams Any additional debugging parameters/data
 */
const warn = (text, addParams) =>{
    if(addParams){
        console.warn(`[${LOG_PREFIX}]:`, text, addParams);
    } else {
        console.warn(`[${LOG_PREFIX}]:`, text);
    }
}


export {
    warn
}