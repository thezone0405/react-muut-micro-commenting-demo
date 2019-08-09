import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {ContentParagraphs} from 'components/content-helper'
import {MicroComments} from 'components/micro-comment'
import Popover from 'react-text-selection-popover';
import {connect} from 'react-redux'
import Navigation from 'components/navigation'
//<Navigation />
class Dashboard extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.initial.title}</h2>
                <ContentParagraphs ref={this.contentParagraphs} content={this.props.initial.contents} />
                <Popover selectionRef={this.contentParagraphs}>
                    <MicroComments comments={this.props.comments} />
                </Popover>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        initial: state.init
    }
}

export default connect(mapStateToProps)(Dashboard)