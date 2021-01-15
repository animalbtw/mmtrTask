import * as React from 'react';
import {connect} from 'react-redux';
import Board from "./Board";
import st from './../../styles/BoardsTable.module.css'

function BoardsTable({Boards, setActualBord}) {
    return (
        <div className={st.boardTable}>
            {
                Boards.boards.map(board => (
                    <div className={st.boardTable_singleBoard}
                         key={board.id}>
                        <Board
                            setActualBord={setActualBord}
                            board={board}/>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        Boards: state.boards
    }
}

export default connect(mapStateToProps, null)(BoardsTable);