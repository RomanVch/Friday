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
    packs:pacsType,
    cardPacksTotalCount:number,
    pageSize:number
}

const inithinalState = {
    loading: false,
    packs:[],
    cardPacksTotalCount:0,
    pageSize:5
}

type AllActionType=CleanErrorLoadingPacsACType|LoadingPacsACType|GetPacsACType|NumberPageACType

export const PacsReducer = (state: inithinalStateType = inithinalState, action: AllActionType) => {
    switch (action.type) {
        case 'LOADING-GET-PACS': {
            return {...state, loading: action.loading}
        }
        case 'GET-PACS': {
            return {...state, packs: action.payload,cardPacksTotalCount:action.cardPacksTotalCount}
        }
        case 'CLEAN-ERROR-LOADING-GET-PACS': {
            return {...state, loading: action.loading}
        }
        case 'NUMBER-OF-PAGE-PACS': {
            return {...state, pageSize: action.pageSize}
        }
        default:
            return state;
    }
}


export const NumberPageAC = (pageSize:number): NumberPageACType => {
    return {
        type: 'NUMBER-OF-PAGE-PACS',
        pageSize:pageSize
    }
}
export type NumberPageACType = {
    type: 'NUMBER-OF-PAGE-PACS',
    pageSize:number
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

export const GetPacsAC = (packs:any,cardPacksTotalCount:number): GetPacsACType => {
    return {
        type: 'GET-PACS',
        payload: packs,
        cardPacksTotalCount
    }
}
export type GetPacsACType = {
    type: 'GET-PACS',
    payload: any,
    cardPacksTotalCount:number
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

export const getPacksThunk = (page: number = 1, pageCount: number = 5,search:string="") => {
    return (dispatch: any) => {

        dispatch(LoadingPacsAC())
        cardsAPI.getPack(page,pageCount,search).then(res => {
            console.log(res.data)
            dispatch(GetPacsAC(res.data.cardPacks,res.data.cardPacksTotalCount))
            dispatch(CleanErrorLoadingPacsAC())
        })
            .catch(err => {
                dispatch(CleanErrorLoadingPacsAC())

            });
    };
};
export const newPacksThunk = (name:string="newPacks",path:string ="/def") => {
    return (dispatch: any) => {
        dispatch(LoadingPacsAC())
        cardsAPI.newPack(name,path).then(res => {
            dispatch(CleanErrorLoadingPacsAC())
            cardsAPI.getPack().then(res => {
                dispatch(GetPacsAC(res.data.cardPacks,res.data.cardPacksTotalCount))
                dispatch(CleanErrorLoadingPacsAC())
            })
                .catch(err => {
                    dispatch(CleanErrorLoadingPacsAC())

                })
        })
            .catch(err => {
                dispatch(CleanErrorLoadingPacsAC())

            });
    };
};
export const updatePacksThunk = (name:string="newPacksUpdate",_id:string) => {
    return (dispatch: any) => {
        dispatch(LoadingPacsAC())
        cardsAPI.updatePack(name,_id).then(res => {
            dispatch(CleanErrorLoadingPacsAC())
            cardsAPI.getPack().then(res => {
                dispatch(GetPacsAC(res.data.cardPacks,res.data.cardPacksTotalCount))
                dispatch(CleanErrorLoadingPacsAC())
            })
                .catch(err => {
                    dispatch(CleanErrorLoadingPacsAC())

                })
        })
            .catch(err => {
                dispatch(CleanErrorLoadingPacsAC())

            });
    };
};
export const deletePacksThunk = (_id:string ) => {
    return (dispatch: any) => {
        dispatch(LoadingPacsAC())
        cardsAPI.deletePack(_id).then(res => {
            dispatch(CleanErrorLoadingPacsAC())
            cardsAPI.getPack().then(res => {
                dispatch(GetPacsAC(res.data.cardPacks,res.data.cardPacksTotalCount))
                dispatch(CleanErrorLoadingPacsAC())
            })
                .catch(err => {
                    dispatch(CleanErrorLoadingPacsAC())

                })
        })
            .catch(err => {
                dispatch(CleanErrorLoadingPacsAC())

            });
    };
};
