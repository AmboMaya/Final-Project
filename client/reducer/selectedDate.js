import moment from 'moment'

export default function selectedDate (state = moment().format('YYYY-MM-DD'), action) {
    switch (action.type) {
        case 'GET_RECORDS_SUCCESS':
          return action.records.date || action.date
        
        default:
            return state
    }
}
