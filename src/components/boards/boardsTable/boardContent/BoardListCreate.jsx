import * as React from 'react';
import st from './../../../styles/BoardListCreate.module.css';
import {connect} from 'react-redux';

function BoardListCreate({actualBoard}) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [listHeader, setListHeader] = React.useState('');
    const [listBody, setListBody] = React.useState('');

    const onSubmit = () => {
        actualBoard.list.push(listHeader + listBody)
    };

    return (
        <div className={st.boardListCreateDialog}>
            <div className={st.boardListCreateDialog_content}>
                <input
                    type='text'
                    placeholder='Заголовок'
                    onChange={e => setListHeader(e.target.value)}/>
                <div className={st.boardListCreateDialog_content_actions}>
                    <div>
                        <input
                            type='text'
                            placeholder='Текст'
                            onChange={e => setListBody(e.target.value)}/>
                    </div>
                    <div>
                        <button
                            onClick={() => onSubmit()}>
                            Сохранить карточку
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default connect(null, null)(BoardListCreate);