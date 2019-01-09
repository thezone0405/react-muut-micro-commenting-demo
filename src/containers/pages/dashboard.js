import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.welcome.message}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        welcome: state.welcome
    }
}

export default connect(mapStateToProps)(Dashboard)