import dayjs from "dayjs"

const PhulkariDateFormat = (date) =>{
    const date_parsed = dayjs(date);
    return date_parsed.toString()
}

export { PhulkariDateFormat }