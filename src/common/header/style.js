import styled from 'styled-components';
import logoPic from '../../statics/img/Header/logo.png';

export const HeaderWrapper = styled.div`
    overflow: hidden;
    z-index: 1;
    min-width:1000px;
    height: 58px;
    border-bottom:1px solid #f0f0f0;
    background: #fff;
`;

export const Logo = styled.div`
    float: left;
    display:block;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 100%; 
    height: 100%;
    padding: 1px 0;
    box-sizing:border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    margin: 0 15px;
    font-size: 17px;
    color: #333;
    font-weight: 400;
    &.left {
        float: left; 
    }
    &.right {
        float: right;
        color: #969696;
        &.login {
            ::after{
                content: '';
                float: right;
                width: 50px;
                height: 58px;
            }   
        }
    }
    &.active {
        color: #ea6f5a;
        ::before{
            content: '';
            float: left;
            width: 130px;
            height: 58px;
        }
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        line-height:30px;
        &.focused {
          background: #969696;
          color:#fff; /*图标以文本的形式存在*/
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;     
    height: 38px;
    padding: 0 30px 0 20px;
    margin: 9px 0 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size:14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active { 
        width: 240px;
    }

    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width:160px;
    }

`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
   margin: 20px 0 15px 0;
   line-height: 20px;
   font-size: 14px;
   color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    .spin {
      display: block;
      float:left;
      font-size: 12px;
      margin: 0 2px 0 0;
      transition: all .5s ease-in;
      transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;

`;


export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin: 0 10px 15px 0;
    padding: 0 5px;
    border: 1px solid #ddd;
    font-size: 12px;
    line-height: 20px;
    color: #787878;
    border-radius: 3px;
`;

export const Addition = styled.div`
    float: right;
    overflow: hidden;
`;

export const Button = styled.div`
    float: right;
    height: 40px;
    margin: 8px 12px 0 0;
    border: 1px solid #ea6f5a;
    vertical-align: middle;
    text-align: center;
    font-size: 15px;
    line-height:40px;
    border-radius:20px;
    &.reg {
        color: #ea6f5a;
        width: 80px;
    }
    &.writing {
        color: #fff;
        background: #ea6f5a;
        width: 100px;
        margin-right: 50px; 
    }
    
`;



