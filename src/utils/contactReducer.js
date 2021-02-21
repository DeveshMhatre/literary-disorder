const contactReducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return {
        ...state,
        name: action.payload,
      }
    case 'EMAIL':
      return {
        ...state,
        email: action.payload,
      }
    case 'MESSAGE':
      return {
        ...state,
        message: action.payload,
      }
    default:
      return state
  }
}

export default contactReducer
