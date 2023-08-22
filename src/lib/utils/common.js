import dayjs from "dayjs"
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat);

/**
 * Formats a date to be displayed in a friendly way.
 * @param {String} date The date that is required to be formatted in string representation. 
 * @returns {String} A formatted string in the standard date format used by Canada.
 */
const date_format = (date) =>{
    const date_parsed = dayjs(date, 'YYYY-MM-DD HH:mmz');
    return date_parsed.format('dddd DD MMMM YYYY [at] hh:mmA');
}

export { date_format }