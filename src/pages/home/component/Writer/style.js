import styled from "styled-components";

export const WriterWrapper = styled.div`
    overflow: hidden;
    width: 278px;
    height: 330px;
    border-radius: 3px;
    display: grid;
    grid-template-rows: 25px 300px;
    grid-template-areas: "header" "writerItems";
    row-gap: 5px;
    
`;

export const WriterHeader = styled.div`
    grid-area: header;
    display: inline-grid;
    grid-template:". left right ." 21px / 5px 134px 134px 5px ;
    font-size: 14px;
    line-height: 21px;
    vertical-align: center;
    .left {
        grid-area: left;
        justify-self: start; 
        color: #969696;
    }
    .right {
        grid-area: right;
        justify-self: end;
        font-size: 14px;
        color: #969696;
        cursor: pointer;
        .spin {
            display: inline-block;
            margin: 0 2px 0 0;
            transition: all .5s ease-in;
            transform-origin: center center;
        }
    }
    

`;

export const WriterItems = styled.div`
    grid-area: writerItems;
    width: 100%;
    height: 100%;
`;

export const WriterItem = styled.div`
    margin: 15px 0 0 0;
    width: 100%;
    height: 61px;
    display: grid;
    grid-template: "userIcon userName concern" 24px "userIcon userDetail userDetail" auto /48px 180px auto;
    .userIcon {
        grid-area: userIcon;
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    .userName {
        grid-area: userName;
        padding: 0 0 0 10px;
    }
    .userDetail {
        grid-area: userDetail;
        display: inline-block;
        width: 100%;
        padding: 6px 0 10px 10px;
        font-size: 13px;
        line-height: 13px;
        color: #969696;
    }
    .concern {
        grid-area: concern;
        color: #42c02e;
        cursor: pointer;
    }
`;