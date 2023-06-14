import dayjs from "dayjs"

export const PhulkariDateFormat = (date) =>{
    const date_parsed = dayjs(date);
    return date_parsed.toString()
}