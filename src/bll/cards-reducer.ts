import {cardsAPI} from "../api/api";

export type cardType = {
    answer: string,
    question: string,
    cardsPack_id: string,
    grade: string,
    rating: number,
    shots: 1,
    type: string,
    user_id: string,
    created: string,
    updated: string,
    __v: string,
    _id: string
}
export type cardsType = cardType[] | []

type inithinalStateType = {
    loading: boolean,
    _idPacs: string,
    cards: cardsType,
    cardsTotalCount: number,
    maxGrade: number,
    minGrade: number,
    packUserId: string,
    page: number,
    pageCount: number,
    token: string
}

const inithinalState = {
    loading: false,
    _idPacs: '',
    cards: [],
    cardsTotalCount: 0,
    packUserId: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    token: ''
}

type AllActionType = GetCardsACType | LoadingCardsACType | CleanErrorLoadingCardsACType | GetIDCardsACType

export const CardsReducer = (state: any = inithinalState, action: AllActionType) => {
    switch (action.type) {
        case 'GET_ID_CARD': {
            return {...state, _idPacs: action._idPacs,}
        }
        case 'LOADING-GET-CARDS': {
            return {...state, loading: action.loading}
        }
        case 'GET-CARDS': {
            return {
                ...state,
                cards: action.payload.cards,
                cardsTotalCount: action.payload.cardsTotalCount,
                packUserId: action.payload.packUserId,
                maxGrade: action.payload.maxGrade,
                minGrade: action.payload.minGrade,
                page: action.payload.page,
                pageCount: action.payload.pageCount,
                token: action.payload.token,


            }
        }
        case 'CLEAN-ERROR-LOADING-GET-CARDS': {
            return {...state, loading: action.loading}
        }
        default:
            return state;
    }
}

export const GetIDCardsAC = (_idPacs: string): GetIDCardsACType => {
    return {
        type: 'GET_ID_CARD',
        _idPacs
    }
}
export type GetIDCardsACType = {
    type: 'GET_ID_CARD',
    _idPacs: string
}
export const LoadingCardsAC = (): LoadingCardsACType => {
    return {
        type: 'LOADING-GET-CARDS',
        loading: true
    }
}
export type LoadingCardsACType = {
    type: 'LOADING-GET-CARDS',
    loading: true
}

export const GetCardsAC = (cards: any): GetCardsACType => {
    return {
        type: 'GET-CARDS',
        payload: cards
    }
}
export type GetCardsACType = {
    type: 'GET-CARDS',
    payload: any
}

export const CleanErrorLoadingCardsAC = (): CleanErrorLoadingCardsACType => {
    return {
        type: 'CLEAN-ERROR-LOADING-GET-CARDS',
        loading: false
    }
}
export type CleanErrorLoadingCardsACType = {
    type: 'CLEAN-ERROR-LOADING-GET-CARDS',
    loading: false
}


export const getCardsThunk = (_id: string) => {
    return (dispatch: any) => {
        dispatch(LoadingCardsAC())
        cardsAPI.getCard(_id).then(res => {
            dispatch(GetCardsAC(res.data))
            console.log(res)
            dispatch(CleanErrorLoadingCardsAC())
        })
            .catch(err => {
                dispatch(CleanErrorLoadingCardsAC())
                console.log(err)
            });
    };
};


export const newCardThunk = (cardsPack_id: string,
                             question: string = "вопрос",
                             answer: string = "ответ") => {
    return (dispatch: any) => {
        dispatch(LoadingCardsAC())
        cardsAPI.newCard({
            card: {
                cardsPack_id,
                question,
                answer
            }
        }).then(res => {
            dispatch(getCardsThunk(cardsPack_id))
        })
            .catch(err => {
                dispatch(CleanErrorLoadingCardsAC())
                console.log(err)
            });
    };
};
export const deleteCardThunk = (_id: string, _idCards: string) => {
    return (dispatch: any) => {
        dispatch(LoadingCardsAC())
        cardsAPI.deleteCard(_idCards).then(res => {
            dispatch(CleanErrorLoadingCardsAC())
            dispatch(getCardsThunk(_id));
        }).catch((err: any) => {
            dispatch(CleanErrorLoadingCardsAC())
            console.log(err)
        })
    }
};

export const updateCardThunk = (_idCard: string, question: string = "Новый вопрос2", comments: string = "какой то коментарий", idPacs: string) => {
    return (dispatch: any) => {
        debugger
        dispatch(LoadingCardsAC())
        cardsAPI.updateCard(_idCard, question, comments).then(res => {
            dispatch(CleanErrorLoadingCardsAC())
            dispatch(getCardsThunk(idPacs));
        })
            .catch(err => {
                dispatch(CleanErrorLoadingCardsAC())
                console.log(err)
            });
    };
};

