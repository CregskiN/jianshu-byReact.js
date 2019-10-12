import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';
import {Redirect} from 'react-router-dom';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <img src="http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt={''}/>
                    <LoginBox>
                        <Input /*onChange={this.props.accountChange}*/ placeholder='账号'
                                                                       ref={(input) => this.account = input}/>
                        <Input  /*onChange={this.props.passwordChange}*/ placeholder='密码' type='password'
                                                                         ref={(input) => this.password = input}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => ({
    /*password: state.getIn(['login', 'password']),
    account: state.getIn(['login', 'account'])*/
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    },
    /*accountChange(e) {
        console.log(e.target.value);
        dispatch(actionCreators.accountChange(e.target.value));
    },
    passwordChange(e) {
        console.log(e.target.value);
        dispatch(actionCreators.passwordChange(e.target.value));
    }*/
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);