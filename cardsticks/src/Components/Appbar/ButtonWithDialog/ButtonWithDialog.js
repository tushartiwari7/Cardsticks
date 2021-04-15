import React from 'react';
import SignUp from './SignUp';
import Login from './Login';

export default function FormDialog(props) {
  
  if(props.children==='Log In') {
  return (
    <Login children={props.children} />
    );
  }

  if(props.children==='Sign Up') {
    return (
        <SignUp children={props.children}/>
    );
  }
}
