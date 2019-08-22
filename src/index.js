import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import "scss/base.scss";
import store from 'state/store'
import routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

ReactDOM.render(
    <Provider store={store}>
        <Router>{renderRoutes(routes)}</Router>
    </Provider>,
document.getElementById("root"))