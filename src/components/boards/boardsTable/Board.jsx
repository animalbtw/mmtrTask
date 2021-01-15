import * as React from 'react';
import st from './../../styles/Board.module.css'
import {NavLink} from "react-router-dom";


function Board({board, setActualBord}) {

    return (
        <div className={st.board}>
            <NavLink
                to='/boards/my_board'>
                <button
                    onClick={() => setActualBord(board)}
                    className={st.board_selector}>
                    {board.title}
                </button>
            </NavLink>
        </div>
    )
}

export default Board;