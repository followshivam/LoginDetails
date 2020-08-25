import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import {Button, Input, Zoom } from '@material-ui/core'

function Login2(props){



    return(
        <div> 
        <Header />
        <form>
            <h2> Form User Details </h2>
            <label type="text"> Phone Number </label> <br />
            <Input onChange={props.setData} type="text" name="phone" placeholder="Phone Number" /> <br />
            <label type="text"> City </label> <br />
            <Input onChange={props.setData} type="text" name="city" placeholder="City" /> <br />
            <label type="text"> DOB </label> <br />
            <Input onChange={props.setData} type="date" name="date" placeholder="DOB" /> <br />
            <Button onClick={props.increaseState} type="submit" name="submit2" variant="outlined" color="primary"> Next </Button>
        </form>
        <Footer />
        </div>

    );
}

export default Login2;
