import * as React from "react";
import st from './../../styles/CreateDialog.module.css'
import { connect } from 'react-redux';
import { createBoard } from '../../../redux/actions'

function CreateDialog(props) {
    const [boardHeader, setBoardHeader] = React.useState('');

    const handleChange = (e) => {
        setBoardHeader(e.target.value)
    }
    const onSubmit = () => {
        if (boardHeader != '') {
            const newBoard = {
                title: boardHeader,
                id: Date.now().toString(),
                list: []
            }
            props.createBoard(newBoard)
        } else {
            window.alert('Название доски не можеть быть пустым')
        }

    }
    return (
        <div
            className={st.createDialog}>
            <div className={st.createDialog_body}>
                <h3>Название доски</h3>
                <input
                    value={boardHeader}
                    onChange={e => handleChange(e)}
                    className={st.createDialog_inputField}
                    type='text'/>
                <div className={st.createDialog_actions}>
                    <button
                        className={st.createDialog_actions_button}
                        onClick={() => props.setIsOpen(false)}>
                        Отмена
                    </button>
                    <button
                        onClick={onSubmit}
                        className={st.createDialog_actions_button}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    createBoard
}

export default connect(null, mapDispatchToProps)(CreateDialog);