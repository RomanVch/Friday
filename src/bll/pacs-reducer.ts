import {cardsAPI} from "../api/api";

export type packType={
    cardsCount: number
    created: string
    deckCover: string
    grade: number
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}
export type pacsType=packType[] | []

type inithinalStateType = {
    loading: boolean,
    packs:pacsType
}

const inithinalState = {
    loading: false,
    packs:[]
}

type AllActionType=CleanErrorLoadingPacsACType|LoadingPacsACType|GetPacsACType

export const PacsReducer = (state: any = {}, action: AllActionType) => {
    switch (action.type) {
        case 'LOADING-GET-PACS': {
            return {...state, loading: action.loading}
        }
        case 'GET-PACS': {
            return {...state, packs: action.payload}
        }
        case 'CLEAN-ERROR-LOADING-GET-PACS': {
            return {...state, loading: action.loading}
        }
        default:
            return state;
    }
}


export const LoadingPacsAC = (): LoadingPacsACType => {
    return {
        type: 'LOADING-GET-PACS',
        loading: true
    }
}
export type LoadingPacsACType = {
    type: 'LOADING-GET-PACS',
    loading: true
}

export const GetPacsAC = (packs:any): GetPacsACType => {
    return {
        type: 'GET-PACS',
        payload: packs
    }
}
export type GetPacsACType = {
    type: 'GET-PACS',
    payload: any
}

export const CleanErrorLoadingPacsAC = (): CleanErrorLoadingPacsACType => {
    return {
        type: 'CLEAN-ERROR-LOADING-GET-PACS',
        loading: false
    }
}
export type CleanErrorLoadingPacsACType = {
    type: 'CLEAN-ERROR-LOADING-GET-PACS',
    loading: false
}

export const getPacksThunk = (page: number = 1, pageCount: number = 4) => {
    return (dispatch: any) => {

        dispatch(LoadingPacsAC())
        cardsAPI.getPack().then(res => {
            dispatch(GetPacsAC(res.data.cardPacks))
            dispatch(CleanErrorLoadingPacsAC())
        })
            .catch(err => {
                dispatch(CleanErrorLoadingPacsAC())
                console.log(err)
            });
    };
};
export const newPacksThunk = (name:string="newPacks",path:string ="/def") => {
    return (dispatch: any) => {
        dispatch(LoadingPacsAC())
        cardsAPI.newPack(name,path).then(res => {
            dispatch(CleanErrorLoadingPacsAC())
            cardsAPI.getPack().then(res => {
                dispatch(GetPacsAC(res.data.cardPacks))
                dispatch(CleanErrorLoadingPacsAC())
            })
                .catch(err => {
                    dispatch(CleanErrorLoadingPacsAC())
                    console.log(err)
                })
        })
            .catch(err => {
                dispatch(CleanErrorLoadingPacsAC())
                console.log(err)
            });
    };
};
export const updatePacksThunk = (name:string="newPacksUpdate",_id:string ) => {
    return (dispatch: any) => {
        dispatch(LoadingPacsAC())
        cardsAPI.updatePack(name,_id).then(res => {
            dispatch(CleanErrorLoadingPacsAC())
            cardsAPI.getPack().then(res => {
                dispatch(GetPacsAC(res.data.cardPacks))
                dispatch(CleanErrorLoadingPacsAC())
            })
                .catch(err => {
                    dispatch(CleanErrorLoadingPacsAC())
                    console.log(err)
                })
        })
            .catch(err => {
                dispatch(CleanErrorLoadingPacsAC())
                console.log(err)
            });
    };
};
export const deletePacksThunk = (_id:string ) => {
    return (dispatch: any) => {
        dispatch(LoadingPacsAC())
        cardsAPI.deletePack(_id).then(res => {
            dispatch(CleanErrorLoadingPacsAC())
            cardsAPI.getPack().then(res => {
                dispatch(GetPacsAC(res.data.cardPacks))
                dispatch(CleanErrorLoadingPacsAC())
            })
                .catch(err => {
                    dispatch(CleanErrorLoadingPacsAC())
                    console.log(err)
                })
        })
            .catch(err => {
                dispatch(CleanErrorLoadingPacsAC())
                console.log(err)
            });
    };
};
