import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Navigation from 'components/navigation'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <Navigation />
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