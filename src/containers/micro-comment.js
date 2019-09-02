import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button } from 'antd';
import styled from 'styled-components'
import {Comments, Comment, Spinner} from 'components/comments'
import {threadReply, threadCreate} from 'state/actions/actionMicroComment'

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
            <form method="post" name="test">
                <Wrap>
                    <label>Comment</label>
                    <textarea row="10" name="comment" onChange={ props.handleInputChange} value={props.comment}></textarea>
                </Wrap>
                <Wrap>
                    <Button key="submit" type="primary" htmlType="submit" className="comment-submit" onClick={props.handleSubmitClick}>Submit</Button>
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
    handleSubmit = () => {
        if(this.state.thread.trim() && this.state.comment.trim()){
            const payload = {
                ...this.state,
                username: this.props.user.username,
                avatar: this.props.user.avatar,
            }
            if(this.props.microComment.thread.size){
                this.props.threadReply(payload)
                this.setState({
                    comment: '',
                })
            }else{
                this.props.createThread(payload)
                this.setState({
                    comment: '',
                })
            }
        }
    }
    setComment = (e) => {
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
        if(!this.node.contains(e.target)){
            this.props.textUnselect()
        }else if(e.target.className == 'ant-btn comment-submit ant-btn-primary'){
            this.handleSubmit()
        }
    }
    render(){
        if(this.props.microComment.thread.size){
            return(
                <div className="comments-wrap" ref={ node => this.node = node }>
                    <p><i>"{this.props.microComment.selection}"</i></p>
                    <div className="comments-scrollable">
                        <Comment {...this.props.microComment.thread.threads[0].post} />
                        <Comments comments={this.props.microComment.thread.threads[0].replies} />
                    </div>
                    <CommentForm comment={this.state.comment} handleInputChange={this.setComment}/>
                </div>
            )
        }
        return (
            <div className="comments-wrap" ref={ node => this.node = node }>
                <p><i>"{this.props.microComment.selection}"</i></p>
                <Spinner visible={this.props.microComment.loadingThread}/>
                <CommentForm comment={this.state.comment} handleInputChange={this.setComment} />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        microComment: state.thread,
        user: state.auth
    }
}

const matchDispatchToProps = (dispatch) =>{
    return {
        textUnselect: () => dispatch({type: "TEXT_UNSELECTED"}),
        createThread: (data) => dispatch(threadCreate(data)),
        threadReply: (data) => dispatch(threadReply(data))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(MicroComment)