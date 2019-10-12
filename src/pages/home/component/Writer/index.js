import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    WriterWrapper,
    WriterItem
} from './style';

class Writer extends Component {
    render() {
        const {handleChangeClick} = this.props;

        return (
            <WriterWrapper>
                <div className='header'>
                    <span className='left'>推荐作者</span>
                    <span className='right' onClick={() => handleChangeClick(this.spinIcon)}>
                        <i className='iconfont spin' ref={(icon) => this.spinIcon = icon}>&#xe851;</i>
                        换一批
                    </span>
                </div>
                <WriterItem>
                    <img
                        src="//upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                        alt={''}/>

                </WriterItem>
            </WriterWrapper>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    handleChangeClick(spin){
        console.log(spin.style.transform);
        let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
        if(originAngle){
            originAngle = parseInt(originAngle, 10);
        } else {
            originAngle = 0;
        }
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
    }
});

export default connect(null, mapDispatchToProps)(Writer);