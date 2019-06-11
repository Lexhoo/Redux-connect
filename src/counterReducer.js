const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
         case 'REMOVE':
            return state - 1;
         case 'addTen':
            return state + 10;
         case 'removeTen':
            return state - 10;
         case 'reset':
            return state = 0;
        default:
            return state;
    }
 }
 
 export default counterReducer