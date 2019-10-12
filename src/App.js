import {GlobalStyleResetCss} from "./style";
import {GlobalStyleIconfont} from "./statics/img/iconfont/iconfont";
import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import Header from './common/header';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable.js';
import Login from './login/index';
import Write from './pages/write/index';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <Header/>
                        <Fragment>
                            <Route path='/' exact component={Home}/>
                            <Route path='/detail/:id' exact component={Detail}/>
                            <Route path='/login' exact component={Login} />
                            <Route path='/write' exact component={Write}/>
                        </Fragment>
                    </BrowserRouter>
                </Fragment>
                <GlobalStyleResetCss/>
                <GlobalStyleIconfont/>
            </Provider>
        );
    }
}

export default App;
