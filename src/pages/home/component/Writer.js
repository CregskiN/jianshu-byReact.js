import React, {Component} from 'react';
import {
    WriterWrapper
} from '../style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <div className='header'><span className='left'>推荐作者</span><span className='right' onClick={() => {
                    console.log("换一换被点击了")
                }}>换一批</span></div>
                <div className='writerWrapper'></div>
            </WriterWrapper>
        )
    }
}

export default Writer;