import * as React from 'react';
import {connect} from 'react-redux';
import st from './../../../styles/BoardContent.module.css'
import BoardListCreate from "./BoardListCreate";
import ListComponent from "./ListComponent";


function BoardContent({actualBoard}) {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {


    }, [actualBoard]);

    return (
        <div className={st.boardContent}>
            <div className={st.boardContent_title}>
                {actualBoard.title}
            </div>
            <div className={st.boardContent_lists}>
                <div className={st.boardContent_lists_actions}>
                    <button className={st.boardContent_lists_actions_boardAppend}
                            onClick={() => setIsOpen(!isOpen)}>
                        Добавить карточку
                    </button>
                </div>
                <div className={st.boardContent_lists_body}>
                    <div>
                        {
                            isOpen ? (
                                <div>
                                    <BoardListCreate actualBoard={actualBoard}/>
                                </div>
                            ) : null
                        }
                    </div>
                    <div>
                        {
                            actualBoard.list ? (
                                <>
                                    {
                                        actualBoard.list.map(item => (
                                            <div key={item}>
                                                <ListComponent item={item}/>
                                            </div>
                                        ))
                                    }
                                </>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, null)(BoardContent);