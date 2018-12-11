import moment from 'moment'

export default function selectedDate (state = moment().format('YYYY-MM-DD'), action) {
    switch (action.type) {
        case 'GET_RECORDS_SUCCESS':
            return action.records.length === 0
              ? action.date
              : action.records[0].date
        
        default:
            return state
    }
}