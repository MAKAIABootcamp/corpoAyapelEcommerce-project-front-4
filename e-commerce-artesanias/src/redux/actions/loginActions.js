import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  signInWithPopup, updateProfile } from "firebase/auth"
import { auth } from "../../Firebase/FirebaseConfig"
import { loginTypes } from "../types/loginType"
import { getFilterItemsActionAsync, createItemActionAsync, updateItemActionAsync } from '../../Services/crudColection';

export const loginUserAsync = ( {email, password} ) =>{
    return async (dispatch) =>{
        dispatch(toggleLoading())
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            const dataUser= {
                name: user.displayName,
                email: user.email,
                uid: user.uid
            }
            const error = { status: false, message: ''}
            dispatch(loginUser(dataUser, error));
            dispatch(toggleLogin())
            dispatch(toggleLoading())
            //modifiquee
            dispatch(setLogin(true))
        } catch (err) {
            const currentUser = {
                name: '',
                email: ''
            }
            const error = { status: true, message: 'Usuario o contraseña incorrectos'}
            dispatch(loginUser(currentUser, error))
            dispatch(toggleLoading())
  
        }
    }
}

export const userLoginProviderAsync = (provider) => {
    return async (dispatch) => {
        dispatch(toggleLoading())
        try {
            const { user } = await signInWithPopup(auth, provider);

            const dataUser= {
                name: user.displayName,
                email: user.email,
                uid: user.uid
            }
            const error = { status: false, message: ''}
            dispatch(loginUser(dataUser, error))
            dispatch(toggleLogin())
            dispatch(toggleLoading())
            //modifiquee
            dispatch(setLogin(true))
        } catch (err) {
            console.log(err)
            const currentUser = {
                name: '',
                email: ''
            }
            const error = { status: true, message: 'Usuario o contraseña incorrectos'}
            dispatch(loginUser(currentUser, error))
            dispatch(toggleLoading())
        }
    };
};

export const loginUser = (user, error) =>{
    return {
        type: loginTypes.LOGIN_USER,
        payload: {
            user,
            error
        }
    }
}

export const userCreateAsync = ( {email, password, name} ) =>{
    return async (dispatch) =>{
        dispatch(toggleLoading())
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {
                displayName: name
            });
            const user = {
                name,
                email,
                uid: auth.currentUser.uid,
            };
            const error = { status: false, message: ''}
            dispatch(userCreate(user, error))
            dispatch(toggleLogin())
            dispatch(toggleLoading())
        } catch (err) {
            const currentUser = {
                name: '',
                email: '',
                uid:''
            }
            const error = { status: true, message: 'Error al crear nuevo usuario'}
            dispatch(userCreate(currentUser, error))
            dispatch(toggleLoading())

        }
    }
}

const userCreate = (user, error) =>{
    return {
        type: loginTypes.CREATE_USER,
        payload: {
            user,
            error
        }
    }
}

const toggleLoading = () =>{
    return {
        type: loginTypes.TOGGLE_LOADING
    }
}

const toggleLogin = () => {
    return {
        type: loginTypes.TOGGLE_LOGIN
    }
}
//modifiquee
const setLogin = () => {
    return {
        type: loginTypes.SET_LOGIN
    }
}


export const userLogoutAsync = () => {
    return async (dispatch) => {
      try {
        await signOut(auth);
        dispatch(userLogout());
      } catch (error) {
        console.log(error);
      }
    };
};

const userLogout = () => {
    return {
      type: loginTypes.LOGOUT_USER,
    };
};



export const updateProfileAsync = (userInfo) => {
    return async (dispatch) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: userInfo.name
            });

            const userData = {
                birthday: userInfo.birthday,
                name: userInfo.name,
                email: userInfo.email,
                photo: userInfo.photo,
                cellphone: userInfo.cellphone,  
            };
            
            const userCollection = await updateItemActionAsync("users",userData,userInfo.id);
            dispatch(
                updateProfileSync({
                    user: {...userInfo},
                    error: {
                        status: false,
                        message: ""
                    }
                })
            );
            return userCollection
        } catch (err) {
            console.log(err);
            dispatch(
                loginUser({
                    user: {},
                    error: { status: true, message: 'Error al actualizar usuario'},
                })
            );
        }
    }
}

export const updateDataUserActionAsync = (user) => {
    return async (dispatch) => {
      try {
        const id= user.id;
        delete user.id
        const userData= await updateItemActionAsync("users",user,id);
        dispatch(
            updateProfileSync({
                user: {...userData},
                error: {
                    status: false,
                    message: ""
                }
            })
        );
        return userData
      } catch (error) {
        dispatch(
            loginUser({
                user: {},
                error: { status: true, message: 'Error al actualizar usuario'},
            })
        );
      }
    };
};

const updateProfileSync = ({ user, error }) => {
    return {
        type: loginTypes.UPDATE_USER,
        payload: {
            user: { ...user },
            error: {
                ...error,
            },
        },
    };
};