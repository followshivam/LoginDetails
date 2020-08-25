import React from "react";
import {Button } from '@material-ui/core'
function Confirm(props){
    return(
        <div>
        <h4> First Name: {props.fname} </h4>
        <h4> Last Name: {props.lname} </h4>
        <h4> Email: {props.email}</h4>
        <h4> Phone Number: {props.phone} </h4>
        <h4> City: {props.city} </h4>
        <h4> DOB: {props.date} </h4>
        <Button onClick={props.reset} type="submit" color="primary" variant="outlined"> New Subscription </Button> 
        </div>
    );
}

export default Confirm;