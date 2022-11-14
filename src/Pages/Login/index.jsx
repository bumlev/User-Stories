import React , { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Head , HeadH1 , HeadP , ButtonAuth , ButtonAuthSpan ,ButtonAuthIcon} from "../../css/login";

function Login() {

  const navigate = useNavigate()
  const CLIENT_ID = '375fc25224e7d4cf342f';
  const REDIRECT_URI = "http://localhost:3000/";
  const tken = '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';

  useEffect(() =>{
      const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
      if(code){
        localStorage.setItem('data' , tken);
        navigate('/home');
      }
  })
   
  return (
    <Head>
      <HeadH1>Welcome</HeadH1>
      <HeadP>GitHub API</HeadP>
      <ButtonAuth href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`}>
        <ButtonAuthIcon className="fa fa-github"></ButtonAuthIcon>
        <ButtonAuthSpan>LOGIN WITH GITHUB</ButtonAuthSpan>
      </ButtonAuth>
    </Head> 
  )
}

export default Login;
