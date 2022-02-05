# Using React Google Login


1. Install

```
npm install --save react-google-login
```


2. Create User Functional React component

When this component loads , if check if user is login status - if user is logged in then user is already login then user data from state is shown
Else login button is shown

```
import React from "react";
import {useDispatch,useSelector} from 'react-redux';

import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './refreshTokenSetup';
import { setUser } from '../../redux/reducers/userSlice';
import Logout from "./Logout";

const clientId ='<UPDATE_CLIENT_ID>.apps.googleusercontent.com';


export const User = () =>{
  const dispatch = useDispatch();
 
 
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.familyName);
  const imageUrl = useSelector((state) => state.user.imageUrl);

  const onSuccess = (res) => {
   
    dispatch(setUser({
                      givenName:res.profileObj.givenName,
                      familyName:res.profileObj.familyName,
                      name:res.profileObj.name,
                      imageUrl:res.profileObj.imageUrl
                    }));
 
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login Failed: res:', res);
    alert( "Login Failed");
  };
  
  
  if(isLoggedIn){

    return (
    <div>
        <Login/>
        <div id="userstats">
                <Logout/>
          </div>

    </div>
      );}
else{
  return(

    <div>
    <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
  </div>

  );
}

}

```
3. Add Logout Button

```
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {useDispatch} from 'react-redux';
import { unsetUser } from '../../redux/reducers/userSlice';

const clientId ='<CLIENT_ID>.apps.googleusercontent.com';

function Logout() {

  const dispatch = useDispatch();

  const onSuccess = () => {
    console.log('Logout successful');
    dispatch(unsetUser());
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;

```

4. Update Reducers

```

import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn: false, 
                  username: "" ,
                  firstName:""},
  
  reducers: {

    setUser :(state,action) => { 
      state.firstName= action.payload.givenName
      state.familyName= action.payload.familyName
      state.username=action.payload.name
      state.imageUrl=action.payload.imageUrl
      state.isLoggedIn=true
     },

     unsetUser :(state,action) => { 
      state.firstName= ""
      state.familyName= ""
      state.username= ""
      state.imageUrl=""
      state.isLoggedIn=false
     }

  },

  extraReducers: {
  },
});

export const {setUser,unsetUser} = userSlice.actions;
export default userSlice.reducer;
```
