import styled from 'styled-components';


export const HomeWrapper = styled.div`
    overflow: hidden;
    width:960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    padding: 30px 0 0 0;
    margin: 0 0 0 15px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin: 0 0 0 -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    padding: 0 10px 0 0;
    margin: 0 0 18px 18px;
    height: 32px;
    line-height: 32px;
    background:#f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        margin: 0 10px 0 0;
        float: left;
        width: 32px;
        height: 32px;
        border-radius: 5px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    float:left;
    width: 500px;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const BottomWrapper = styled.div`
    float: left;
    height: 20px;
    display: block;
    overflow: hidden;
    margin: 8px 0 0 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #b4b4b4;
    .ico {
            margin: 0 5px 0 0;
            font-size: 16px;
    }
    .Score {
        font-size: 15px;
        margin: 0 10px 0 0;
        color: rgb(234, 111, 90);
        
    }
    .userName {
        margin: 0 10px 0 0;
    }
    .comment {
        margin: 0 10px 0 0;
    }
    .like {
        margin: 0 10px 0 0;
        .like-img {
            font-size: 13px;
        }
    }
`;


export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    height: 300px;
    border-radius: 3px;
    border: 1px solid #000;
    display: grid;
    grid-template-rows: 25px 270px;
    grid-template-areas: "header" "writerWrapper";
    row-gap: 5px;
    .header {
        grid-area: header;
        display: inline-grid;
        grid-template-columns: 10px 127px 127px 10px;
        grid-template:"." 2px ". left right ." 2px ".";
        .left {
            grid-area: left;
            justify-self: start;
            font-size: 14px;
            color: #969696;
        }
        .right {
            grid-area: right;
            justify-self: end;
            font-size: 14px;
            color: #969696;
        }
    }
    .writerWrapper {
        grid-area: writerWrapper;
        
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px 0;
    line-height: 40px;
    text-align: center;
    color:#fff;
    background: #a5a5a5;
    border-radius: 20px;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    border-radius:15px;
    font-size: 14px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
`;


