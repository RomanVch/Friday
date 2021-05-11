import React, {ChangeEvent, ChangeEventHandler, FormEventHandler, KeyboardEvent, useEffect, useState} from "react";
import './packs.css';
import {useDispatch, useSelector} from "react-redux";
import {
    deletePacksThunk,
    getPacksThunk,
    newPacksThunk, NumberPageAC,
    packType,
    pacsType,
    updatePacksThunk
} from "../../bll/pacs-reducer";
import {AppStateType} from "../../bll/store";
import {usersType} from "../../bll/auth-reducer";
import {NavLink, Redirect} from "react-router-dom";
import {
    Button,
    createStyles, IconButton,
    InputBase,
    LinearProgress,
    makeStyles,
    Paper,
    Slider,
    Theme,
    Typography
} from "@material-ui/core";
import {GetIDCardsAC} from "../../bll/cards-reducer";
import {Pagination} from "@material-ui/lab";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 300,
        },
        margin: {
            height: theme.spacing(3),
        },
        paginationPosition: {
            marginTop: 25,
            marginLeft: "29%"
        },
        search: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 300,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        }
    }),
);

const marks = [
    {
        value: 4,
        label: '4',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 25,
        label: '25',
    },
    {
        value: 75,
        label: '75',
    },
    {
        value: 100,
        label: '100',
    },
];

function valuetext(value: number) {
    return `${value}`;
}

export const Packs = () => {
    const dispatch = useDispatch()
    const packs = useSelector<AppStateType, pacsType>(st => st.Packs.packs)
    const loading = useSelector<AppStateType, boolean>(st => st.Packs.loading)
    const cardPacksTotalCount = useSelector<AppStateType, number>(st => st.Packs.cardPacksTotalCount)
    const pageSize = useSelector<AppStateType, number>(st => st.Packs.pageSize)

    const numbersOfPage = Math.ceil(cardPacksTotalCount / pageSize)
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState("")
    const onSearchInput = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if (search !== '') {
            e.key === "Enter" // если нажата кнопка Enter
            && dispatch(getPacksThunk(page, pageSize, search))
        }

    }
    const onClickSearchButton = () => {
        search !== '' && dispatch(getPacksThunk(page, pageSize, search))
        setSearch('')
    }

    useEffect(() => {
        dispatch(getPacksThunk(page, pageSize))
    }, [])
    const classes = useStyles();
    const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.auth)
    const onTogglePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        debugger
        dispatch(getPacksThunk(page, pageSize))
    }
    const valuetext = (value: number) => {
        dispatch(NumberPageAC(value))
        return `${value}`;
    }
    const onTogglePageSize = () => {
        dispatch(getPacksThunk(page, pageSize))
    }

    return (
        <div>
            {!isAuth && <Redirect to="/Login"/>}
            {loading && <LinearProgress/>}
            <div className={"pacs__filter_wrapper"}>
                <div className={classes.root}>
                    <Typography id="discrete-slider-always" gutterBottom>
                        Количество паков на странице
                    </Typography>
                    <Slider
                        defaultValue={5}
                        getAriaValueText={valuetext}
                        step={1}
                        marks={marks}
                        onClick={onTogglePageSize}
                        min={4}
                    />
                </div>
                <Paper component="form" elevation={6} className={classes.search}>
                    <InputBase
                        className={classes.input}
                        placeholder="Поиск по пакам"
                        onChange={onSearchInput}
                        onKeyPress={onKeyPressCallback}
                        value={search}
                    />
                    <Button type="submit" className={classes.iconButton} aria-label="search" onClick={onClickSearchButton}>
                        <SearchIcon/>
                    </Button>
                </Paper>
            </div>
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
                                .filter((str, i) => {
                                    return i < 16;
                                })
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
            <div className={classes.paginationPosition}>
                <Pagination count={numbersOfPage} variant="outlined" shape="rounded" page={page}
                            onChange={onTogglePagination}/>
            </div>
        </div>
    );
}
