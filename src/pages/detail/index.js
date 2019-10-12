import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';
import {withRouter} from 'react-router-dom';
import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends Component {
    render() {
        console.log(this.props);
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }

}


const mapStateToProps = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        console.log(id);
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));