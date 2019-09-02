import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {ContentParagraphs} from 'components/content-helper'
import MicroComment from 'containers/micro-comment'
import Popover from 'react-text-selection-popover'
import Access from 'containers/access'
import {connect} from 'react-redux'
//import {textSelect} from 'state/actions/dashboard'
import {textSelect} from 'state/actions/actionMicroComment'

/*
<Popover selectionRef={this.contentParagraphs}>
                    <MicroComments comments={this.props.comments} />
                </Popover>onTextUnselect={() => this.props.textUnselect()}
*/  
class Dashboard extends Component{
    render(){
        return(
            <div>
                <Access />
                <h2>{this.props.initial.title}</h2>
                <ContentParagraphs ref={this.contentParagraphs} action={this.props.textSelect} content={this.props.initial.contents}/>
                <Popover
                    selectionRef={this.contentParagraphs}
                    isOpen={ this.props.popOverVisible }
                    >
                    <MicroComment />
                </Popover>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        initial: state.init,
        popOverVisible: state.thread.popOverVisible
    }
}

const matchDispatchToProps = (dispatch) =>{
    return {
        textSelect: (text) => dispatch(textSelect(text)),
        textUnselect: () => dispatch({type: "TEXT_UNSELECTED"})
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard) 