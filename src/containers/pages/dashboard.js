import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {ContentParagraphs} from 'components/content-helper'
import {MicroComments} from 'components/micro-comment'
import Popover from 'react-text-selection-popover'
import Access from 'containers/access'
import {connect} from 'react-redux'
import {textSelect} from 'state/actions/dashboard'

/*
<Popover selectionRef={this.contentParagraphs}>
                    <MicroComments comments={this.props.comments} />
                </Popover>
*/ 
class Dashboard extends Component{
    render(){
        return(
            <div>
                <Access />
                <h2>{this.props.initial.title}</h2>
                <ContentParagraphs ref={this.contentParagraphs} action={this.props.textSelect} content={this.props.initial.contents}/>    
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        initial: state.init
    }
}

const matchDispatchToProps = (dispatch) =>{
    return bindActionCreators({textSelect}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard)