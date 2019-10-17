import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store/index';
import {Link} from 'react-router-dom';

import {
    ListItem,
    ListInfo,
    LoadMore,
    BottomWrapper
} from '../style';

class List extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem>
                                    <img className='pic' src={item.get('imgUrl')} alt={''}/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                    <BottomWrapper>
                                        <span className='Score'><i className="iconfont ico">&#xe602;</i>1.0</span>
                                        <span className='userName'>CregskiN</span>
                                        <span className='comment'><i className="iconfont ico">&#xe649;</i>666</span>
                                        <span className='like'><i
                                            className="iconfont ico like-img">&#xe607;</i>666</span>
                                    </BottomWrapper>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => {
                    this.props.getMoreList(this.props.page)
                }}>更多文字</LoadMore>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    list: state.getIn(['pages','home', 'articleList']),
    page: state.getIn(['pages','home', 'articlePage']),
});

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);