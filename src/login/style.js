import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    background: #eee;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 180px;
    margin: 100px auto 0 auto;
    padding: 50px 30px 0 30px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    border-radius: 4px;
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    border-radius: 4px;
    background: rgba(181,181,181,0.1)
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
    cursor: pointer;
`;