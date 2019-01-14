import {Link} from "react-router-dom";
import React from "react"
import {renderRoutes} from 'react-router-config'


const Navigation = props => (
    <div>
        <ul>
            <li><Link to="/">HOME</Link></li>
        </ul>
    </div>
)

export default Navigation