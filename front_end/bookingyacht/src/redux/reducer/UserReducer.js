import { FETCH_USER_LOGIN_SUCCES, USER_LOGOUT } from "../type/Type";

const INITIAL_STATE = {
    account: {
        data: '',
        role: '',
        idCompany: ''
    },
    isAuthenticated: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCES:
            return {
                ...state,
                account: {
                    data: action.payload.data,
                    role: action.payload.role,
                    idCompany: action.payload.idCompany
                },
                isAuthenticated: true
            };
        case USER_LOGOUT:
            return INITIAL_STATE

        default: return state;
    }
};

export default userReducer;