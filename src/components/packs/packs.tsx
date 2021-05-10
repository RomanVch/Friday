import React, {useEffect, useState} from "react";
import './packs.css';
import {useDispatch, useSelector} from "react-redux";
import {
    deletePacksThunk,
    getPacksThunk,
    newPacksThunk,
    packType,
    pacsType,
    updatePacksThunk
} from "../../bll/pacs-reducer";
import {AppStateType} from "../../bll/store";
import {usersType} from "../../bll/auth-reducer";
import {NavLink} from "react-router-dom";
import {Button, LinearProgress} from "@material-ui/core";
import {GetIDCardsAC} from "../../bll/cards-reducer";

export const Packs = () => {
    const dispatch = useDispatch()
    const packs = useSelector<AppStateType, pacsType>(st => st.Packs.packs)
    const loading = useSelector<AppStateType, boolean>(st => st.Packs.loading)
    useEffect(() => {
        dispatch(getPacksThunk())
    }, [])
    console.log(loading)
    return (
        <div>
            {loading && <LinearProgress/>}
            <div className={"pacs__head_wrapper"}>
                <ul className={"pacs__head"}>
                    <li>name</li>
                    <li>cardCount</li>
                    <li>update</li>
                    <li>url</li>
                    <Button onClick={() => dispatch(newPacksThunk())} variant="contained">add</Button>
                </ul>
            </div>
            <div className={"packs__table_main"}>
                {packs
                && packs.map((pack: packType) => {
                        return <div className={"pacs__table_wrapper"}>
                            <div className={"pacs__table_name"}><p>{pack.name} </p></div>
                            <div className={"pacs__table_cardCount"}><p>{pack.cardsCount}</p></div>
                            <div className={"pacs__table_update"}><p>{pack.updated.split('')
                                .filter((str, i) => {return i < 16;})
                            }</p></div>
                            <div className={"pacs__type"}><p>{pack.type}</p></div>


                            <div className={"packs__button_table"}>
                                <Button onClick={() => dispatch(deletePacksThunk(pack._id))}
                                        variant="contained">delete</Button>
                                <Button onClick={() => dispatch(updatePacksThunk("newUpdatePacks", pack._id))}
                                        variant="contained">update</Button>
                                <Button onClick={() => dispatch(GetIDCardsAC(pack._id))} color="primary"
                                        variant="contained"><NavLink to="/cards">cards</NavLink></Button>

                            </div>
                        </div>
                    }
                )}
            </div>
        </div>
    );
}
