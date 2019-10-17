import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store/index'
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList

} from './style';

class Header extends Component {
    render() {

        const {login, list, focused, handleInputFocus, handleInputBlur, logout} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <Link to='/'><NavItem className='left active'>首页</NavItem></Link>
                    <NavItem className='left'>下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={500} classNames='slide'>
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {
                                    handleInputFocus(list)
                                }}
                                onBlur={handleInputBlur}/>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe63f;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writing'><i className="iconfont">&#xe601;</i>写文章</Button>
                        </Link>
                        <Button className='reg'>注册</Button>
                    </Addition>
                    {
                        login ?
                            <NavItem className='right' onClick={logout}>退出</NavItem>
                            : <Link to='/login'><NavItem className='right login'>登陆</NavItem></Link>
                    }
                    <NavItem className='right'><i className="iconfont">&#xe600;</i></NavItem>
                </Nav>
            </HeaderWrapper>
        );
    }

    getListArea() {

        const {totalPage, focused, list, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS(); //immutable不允许直接[i]形式访问
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {
                            handleChangePage(page, totalPage, this.spinIcon)
                        }}>
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className='iconfont spin'>&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    };


}


const mapStateToProps = (state) => {    /*state是store的数据*/
    return {
        /* focused: state.getIn(['header,'focused'])*/
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            dispatch(actionCreators.searchFocus());
            (list.size === 0) && dispatch(actionCreators.getList());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            console.log(spin.style.transform);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }


    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);