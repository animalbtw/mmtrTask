import * as React from "react";
import st from '../../styles/BoardCreateComponent.module.css'
import CreateDialog from "./CreateDialog";
import logo from './../../../assets/img/icons8-plus-52.png'

function BoardCreateComponent() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div
            className={st.boardCreateComponent}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={st.bcc_newBoardButton}>
                <img
                    alt='plus'
                    src={logo} />
                НОВАЯ ДОСКА
            </button>
            {
                isOpen ? (
                    <div>
                        <CreateDialog setIsOpen={setIsOpen} />
                    </div>
                ) : null
            }
        </div>
    )
}

export default BoardCreateComponent;