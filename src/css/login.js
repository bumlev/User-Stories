import styled from 'styled-components'

const Head = styled.header`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 370px;
    border: 1px solid rgb(252, 252, 252);
    box-shadow: 0px 0px 10px rgb(209, 208, 208);
    margin:120px  auto;
`
const HeadH1 = styled.h1`
    text-align: center;
    font-size: 40px;
    margin-top:20px;
`
const HeadP = styled.p`
    font-size: 25px;
    text-align: center;
    font-weight:500;
    color: rgb(124, 124, 124);
    content: "\f1ea";
`

const ButtonAuth = styled.a`
    display: flex;
    flex-direction: row;
    height: 50px;
    margin: 160px 120px  0 120px;
    background-color: black;
    border-radius: 10px;
    border: 1px solid black;
    justify-content: space-around;
    text-decoration: none;
    font-family: initial;
`
const ButtonAuthIcon = styled.i`
    font-size:50px;
    color:white;
`

const ButtonAuthSpan = styled.span`
    display: flex;
    color:white;
    align-items: center;
    font-weight:600;
    font-size: 17px;
`

export {Head , HeadH1 , HeadP , ButtonAuth , ButtonAuthSpan ,ButtonAuthIcon}