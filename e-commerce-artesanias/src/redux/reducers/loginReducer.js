import { loginTypes } from "../types/loginType";
const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
    },
    error: {
        status: undefined,
        message: ''
    },
    loading: false,
    isLogged: false
}

export const loginReducer = (state = initialState, action ) =>{
    switch(action.type){
        case loginTypes.CREATE_USER:
            return {
                ...state,
                user: {
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                    password: action.payload.user.password,
                },
                error: {
                    status: action.payload.error.status,
                    message: action.payload.error.message
                }
            }
        case loginTypes.LOGIN_USER:
            return {
                ...state,
                ...action.payload
            }
        case loginTypes.UPDATE_USER:
            return {
                ...state,
                ...action.payload,
                
            };
        case loginTypes.LOGOUT_USER:
            return{
                ...initialState
            }  
        case loginTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case loginTypes.TOGGLE_LOGIN:
            return {
               ...state,
                isLogged: !state.isLogged
            }

        default:
            return state;
    }
}