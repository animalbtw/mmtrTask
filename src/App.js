import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import st from './components/styles/App.module.css'

import Header from "./components/header/Header";
import BoardCreateComponent from "./components/boards/boardCreateComp/BoardCreateComponent";
import BoardsTable from "./components/boards/boardsTable/BoardsTable";
import BoardContent from "./components/boards/boardsTable/boardContent/BoardContent";

function App() {
    const [actualBord, setActualBord] = React.useState([{}])
    return (
        <BrowserRouter>
            <div className={st.App}>
                <Header/>
                <Switch>
                    <Route exact path='/boards'>
                        <div className={st.app_boardContent}>
                            <BoardCreateComponent/>
                            <BoardsTable
                                setActualBord={setActualBord}/>
                        </div>
                    </Route>
                    <Route
                        exact
                        path='/boards/my_board'>
                        <BoardContent actualBoard={actualBord}/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
