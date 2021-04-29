
const initialState={
    auth:false
}

type initialStateType = {
    auth: boolean;
}


export const authReducer = (state: initialStateType = initialState, action: any): initialStateType => {

    switch (action.type) {

        default:
            return state

    }
}

