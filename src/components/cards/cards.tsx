import React, {useEffect} from "react";
import './cards.css'

import {Button, LinearProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {cardType, deleteCardThunk, getCardsThunk, newCardThunk, updateCardThunk} from "../../bll/cards-reducer";

const buttonStyle = {
    marginRight:10
}

export const Cards = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCardsThunk(_id))
    }, [])
    const _id = useSelector<AppStateType, string>(st => st.Cards._idPacs)
    const cards = useSelector<AppStateType, any>(st => st.Cards)
    console.log(cards.loading)
    return (
        <div>
            {cards.loading && <LinearProgress/>}
            <div className={"cards__head_wrapper"}>
                <ul className={"cards__head"}>
                    <li>question</li>
                    <li>answer</li>
                    <li>grade</li>
                    <li>update</li>
                    <li>url</li>
                    <Button onClick={() => {
                        dispatch(newCardThunk(_id))
                    }} variant="contained">add</Button>
                </ul>
            </div>
            <div className={"cards__table_main"}>
                {cards.cards
                && cards.cards.map((card: cardType) => {
                    return <div className={"pacs__table_wrapper"}>
                        <div className={"pacs__card_question"}><p>{card.question}</p></div>
                        <div className={"pacs__card_answer"}><p>{card.answer}</p></div>
                        <div className={"pacs__card_grade"}><p>{card.grade}</p></div>
                        <div className={"pacs__card_update"}><p>{card.updated.split('')
                            .filter((str, i) => {
                                return i < 16;
                            })
                        }</p></div>
                        <div className={"pacs__card_type"}><p>{card.type}</p></div>
                        <div className={"pacs__card_buttons"}>
                            <Button onClick={()=>dispatch(deleteCardThunk(_id,card._id))} style={buttonStyle} variant="contained">delete</Button>
                            <Button onClick={()=>dispatch(updateCardThunk(card._id,"Новый Вопрос2","коментарий",_id))}  variant="contained">update</Button></div>
                    </div>
                })

                }
            </div>
        </div>
    );
}
