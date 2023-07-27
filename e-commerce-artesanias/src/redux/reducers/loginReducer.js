import { loginTypes } from "../types/loginType";
const initialState = {
    user: {
        name: '',
        email: '',
        uid: '',
        car_products: [],
        billing_address: {},
        shipping_address: {},
        isAdmin: false,
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
                    uid: action.payload.user.uid,
                    car_products: action.payload.user.car_products,
                    billing_address: action.payload.user.billing_address ,
                    shipping_address: action.payload.user.shipping_address,
                    isAdmin: action.payload.user.isAdmin,
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

        case loginTypes.SET_LOGIN:
                return {
                   ...state,
                    // isLogged: action.payload
                    isLogged: true
                }

        default:
            return state;
    }
}