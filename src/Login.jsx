import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import {Button, Input, Zoom } from '@material-ui/core';


function Login(props) {

    

    return(
        <div> 
        <Header />
        <form>
            <h2> Form User Details </h2>
            <label type="text"> First Name </label> <br />
            <Input onChange={props.setData} type="text" name="fname" placeholder="First Name" /> <br />
            <label type="text"> Last Name </label> <br />
            <Input onChange={props.setData} type="text" name="lname" placeholder="Last Name" /> <br />
            <label type="text"> Email id </label> <br />
            <Input onChange={props.setData} type="email" name="email" placeholder="Email ID" /> <br />
            <Button onClick={props.increaseState} type="submit" name="submit" variant="outlined" color="primary"> Next </Button>
        </form>
        <Footer />
        </div>
    );
}

export default Login;