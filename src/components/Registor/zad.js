function whoIsWinner(piecesPositionList) {
    let pointR = 0
    let pointY = 0
    let pointWinR = 0
    let win = "Ничья"
    let Row = []
    piecesPositionList.forEach(str => Row.push(str[0]))
    Row = new Set(Row)
    Row = [...Row]
    let game = {}
    for (let i = 0; i < Row.length; i++) {
        game = {...game, [Row[i]]: []}
    }
    for (let i = 0; i < piecesPositionList.length; i++) {
        if (piecesPositionList[i][2] === "R") {
            for (let k in game) {
                if (k === piecesPositionList[i][0]) {
                    game = {...game, [k]: [...game[k], 0]}
                    for (let key in game) {
                        // проверка по вертикали
                        for (let y = 0; game[key].length < i; i++) {
                            if (game[key].length < 4) {
                                break
                            } else if (game[key][y] === 0
                                && game[key][y + 1] === 0
                                && game[key][y + 2] === 0
                                && game[key][y + 3] === 0) {
                                win = "Red"
                                break
                            }
                        }
                    }
                }
                pointR=pointR+1
            }
        } else if (piecesPositionList[i][2] === "Y") {
            for (let k in game) {
                if (k === piecesPositionList[i][0]) {
                    game = {...game, [k]: [...game[k], 1]}

                }
            }
        }
    }

    console.log(game)
    console.log(win)
}

whoIsWinner(["E_Yellow",
    "A_Red",
    "E_Yellow",
    "B_Red",
    "G_Yellow",
    "C_Red",
    "F_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "F_Yellow",
    "E_Red",
    "D_Yellow"])
