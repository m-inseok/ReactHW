import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
  @media all and (min-width:1024px) and (max-width:1279px) { 
    /* 스타일 입력 */
    background-color: pink;
  } 

  /* 테블릿 가로 (해상도 769px ~ 1023px)*/ 
  @media all and (min-width:769px) and (max-width:1023px) { 
    /* 스타일 입력 */
    background-color: green;
  } 

  /* 모바일 가로 & 테블릿 세로 (해상도 481px ~ 768px)*/ 
  @media all and (min-width:481px) and (max-width:768px) {
    /* 스타일 입력 */
    background-color: blue;
  } 

  /* 모바일 세로 (해상도 ~ 480px)*/ 
  @media all and (max-width:480px) {
    /* 스타일 입력 */
    background-color: yellow;
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const LoginButton = styled.button`
    background-color: orange;
    color: black;
    border: none;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
`
const RegisterButton = styled.button`
    background-color: pink;
    color: black;
    border: none;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
    margin: 10px;
`

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <h2>로그인 페이지</h2>
      <Input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <LoginButton onClick = {()=>navigate('/login')}>로그인</LoginButton>
      <RegisterButton onClick = {()=>navigate('/register')}>회원가입</RegisterButton>
    </Container>
  );
}

export default Login;
