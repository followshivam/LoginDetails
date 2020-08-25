import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.jsx';
import Login2 from './Login2.jsx';
import Confirm from './Confirm.jsx';
function App() {

  const [state,setState]=useState(0);
  const [data, setData]=useState({
    fname:"", lname:"", email:"",
    phone:"", city:"", date:""    
  });

  function addData(event){  
    const {name,value}=event.target;  
    setData((prevValues) =>{
      return({
        ...prevValues,[name]:value
      })
    });
  }

  function changeState(){
    setState(state+1);
  }
  
  function resetState(){
    setState(0);
  }


  return (
  <div className="App">
    {state===0? <div><Login 
      fname={data.fname} lname={data.lname} email={data.email} setData={addData}
      increaseState={changeState}
    /> </div>
    : 
    [state===1? <div><Login2 
      phone={data.phone} city={data.city} date={data.date} setData={addData}
      increaseState={changeState}
    /> </div>
    : <div> <Confirm fname={data.fname} lname={data.lname} email={data.email}
      phone={data.phone} city={data.city} date={data.date}
        reset={resetState}
      />
      </div> 
    ]
    }  
          
        </div>
  );
}

export default App;
