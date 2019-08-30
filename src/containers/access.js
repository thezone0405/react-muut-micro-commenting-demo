import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Modal, Button, Form, Input } from 'antd';
import styled from 'styled-components'
import {login, logout, toggleModal} from 'state/actions/actionAuthentication'

const BtnWrap = styled.div`
    max-width: 100%;
    text-align: right;
`

const LoginForm = styled.div`
    form{
        max-width: 350px;
        margin: 0 auto;
    }
`
const Wrap = styled.div`
    label{
        width: 100%;
        display: block;
    }
    input{
        width: 100%;
        border: 1px solid #333333;
        padding: 5px;
    }
`

const ErrorWrap = styled.div`
    color: #dc3545;
    text-align: center;
`

const LoginError = (props) => (
    <ErrorWrap>
        <span>{props.loginError}</span>
    </ErrorWrap>    
) 

const InterchangingButton = (props) => {
    if(props.username){
        return (
            <Button type="primary" onClick={ () => props.logout() }>
                {props.username} (Logout)
            </Button>
        )
    }
    return (
        <Button type="primary" onClick={ () => props.showLogin() }>
            Login
        </Button>
    )
}

class Access extends Component{
    state = {
        fields:{
            username: '',
            password: ''
        }
    }

    showLogin = () => {
        this.props.toggleModal()
    }
    cancel = () => {
        this.props.toggleModal()
    }
    handleInputChange = (e) =>{
        let property = e.target.getAttribute("name")
        let value = e.target.value
        this.setState(prevState=>({fields:Object.assign(prevState.fields,{[property]:value})}))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state.fields)
        this.setState({
            fields: {
                username: '',
                password: ''
            }
        })
    }
    logout = () => {
        this.props.logout()
    }
    render(){
        return(
            <div>
                <BtnWrap>
                    <InterchangingButton showLogin={this.showLogin} logout={this.logout} username={this.props.auth.username} />
                </BtnWrap>                
                <Modal
                    title="Login Form"
                    visible={this.props.auth.modalOpen}
                    onCancel={this.cancel}
                    footer={[
                        <Button key="back" onClick={this.cancel}>
                          Cancel
                        </Button>,
                        <Button key="submit" type="primary" form="login-form" htmlType="submit">
                          Login
                        </Button>,
                    ]}
                >
                    <LoginForm>
                        <LoginError loginError={this.props.auth.loginError} />
                        <form onSubmit={this.handleSubmit} name="login-form" id="login-form" method="post">
                            <Wrap>
                                <label> Username:</label>
                                <input type="text" name="username" onKeyUp={this.handleInputChange}/>
                            </Wrap>
                            <Wrap>
                                <label> Password:</label>
                                <input type="password" name="password" onKeyUp={this.handleInputChange}/>
                            </Wrap>
                        </form>
                    </LoginForm>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

const matchDispatchToProps = (dispatch) =>{
    return {
        login: (creds) => dispatch(login(creds)),
        logout: () => dispatch(logout()),
        toggleModal: () => dispatch(toggleModal())
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Access)