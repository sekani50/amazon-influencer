import * as type from "../Actions/Types";

const initailState = {
  currentUser: null,
  token: "",
  verificationData: null,
  isnotVerified: false,
  message:'',
  
};
const User = (state = initailState, action) => {
  switch (action.type) {
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case type.FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
      case type.VERIFY:
        return {
          ...state,
          verificationData: action.payload,
        };
        case type.NOT_VERIFIED:
          return {
            ...state,
            isnotVerified: action.payload,
          };
       
          case type.NOT_VERIFIED_MESSAGE:
            return {
              ...state,
              message: action.payload,
            };
    case type.LOGOUT:
      return {
        ...state,
        currentUser: null,
        token: "",
      };

    default:
      return state;
  }
};

export default User;
