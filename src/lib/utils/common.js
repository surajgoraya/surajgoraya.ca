import dayjs from "dayjs"
import customParseFormat from 'dayjs/plugin/customParseFormat'
import LocalizedFormat from 'dayjs/plugin/LocalizedFormat'

dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);

const date_format = (date) =>{
    const date_parsed = dayjs(date, 'YYYY-MM-DD HH:mmz');
    return date_parsed.format('LLLL');
}

export { date_format }