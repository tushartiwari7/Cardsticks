import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import AddNote from './AddNote';
import Account from './Account'

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

  if(props.children==='Add Note') {
    return (
      <AddNote children={props.children} />
    );
  }
  
  if(props.children==='My Account') {
    return (
      <Account children={props.children} />
    );
  }
}
