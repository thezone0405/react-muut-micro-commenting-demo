import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button } from 'antd';
import styled from 'styled-components'
import {Comments, Comment, Spinner} from 'components/comments'

const Wrap = styled.div`
    label{
        width: 100%;
        display: block;
    }
    textarea{
        width: 100%;
        border: 1px solid #333333;
        padding: 5px;
    }
`

const CommentForm = props => {
    return (
        <div>
            <form>
                <Wrap>
                    <label>Comment</label>
                    <textarea row="10" name="comment" onKeyUp={ props.handleInputChange}></textarea>
                </Wrap>
                <Wrap>
                    <Button key="submit" type="primary" form="login-form" htmlType="submit">Submit</Button>
                </Wrap>
            </form>
        </div>
    )
}

class MicroComment extends Component{
    state = {
        comment: '',
        thread: ''
    }
    setComment = (e) => {
        console.log(this.state)
        let value = e.target.value
        this.setState(prevState=>(Object.assign(prevState,{comment:value})))
    }
    componentWillReceiveProps(){
        this.setState({
            thread: this.props.microComment.selection,
        })
    }
    componentWillMount(){        
        document.addEventListener('mousedown', this.handleClick, false)
    }
    componentWillUnmount(){        
        document.removeEventListener('mousedown', this.handleClick, false)
    }
    handleClick = e => {
        if(this.node.contains(e.target)){
            return
        }
        this.props.textUnselect()
    }
    render(){
        //console.log(this.props.microComment)
        if(this.props.microComment.thread.size){
            if(this.props.microComment.thread.threads[0].reply_count){
                return(
                    <div className="comments-wrap" ref={ node => this.node = node }>
                        <p><i>"{this.props.microComment.selection}"</i></p>
                        <Comment {...this.props.microComment.thread.threads[0].post} />
                        <Comments comments={this.props.microComment.thread.threads[0].replies} />
                        <CommentForm handleInputChange={this.setComment}/>
                    </div>
                )
            }
        }
        return (
            <div className="comments-wrap" ref={ node => this.node = node }>
                <Spinner visible={this.props.microComment.loadingThread}/>
                <CommentForm handleInputChange={this.setComment} />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        microComment: state.thread
    }
}

const matchDispatchToProps = (dispatch) =>{
    return {
        textUnselect: () => dispatch({type: "TEXT_UNSELECTED"})
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(MicroComment)