import React,{useState} from 'react';
import {useEffect} from 'react';
import '../App.css';


  

function Payment(){
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const totalAmount = params.get('amount');
  const redirectUrl = params.get('callback');
  const time = params.get('time');
  const ticketNumber = params.get('ticketNumber');
  const counts = params.get('counts');

  useEffect(() => {
    document.title = "PayBC ticket payment"
  }, []);

  const [amount, setAmount] = useState(Number(totalAmount));
  const [count, setCount] = useState("");
  


  const submitHandler = function(e){
    e.preventDefault();
    let status = "paid";
    let path = `${redirectUrl}&status=paid&amount=${amount}&transactionId=${create_UUID()}`;
    window.location.href = path;
  
  }
  
  const inputHandler = (e) => {
    setAmount(e.target.value);
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    let path = `${redirectUrl}&status=cancelled&amount=0&transactionId=${create_UUID()}`;
    window.location.href = path;
  }
  
  function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

  return (

    
    <form onSubmit={submitHandler} className="App">
        <img id="main-logo"   src="/PayBC-Main-Logo.png" title="PayBC - A convenient, secure and easy way to pay for BC Government Services online."></img>
        <br></br>
        <br></br>
        <b>
            Ticket Number :
        </b>
     
        <b>
            {` ${ticketNumber}  `}
        </b> 
        <b>
           {`  Date issued :`} 
        </b>
        <b>
            {` ${time}   `}
        </b>
        <b>
            Counts :
        </b>
        <b>
            {` ${counts}`}
        </b>
        <br></br>
        <br></br>
        <label htmlFor='amount'>
            {`Amount to pay: `}
        </label>
        <input
            value={amount} onChange={inputHandler}
                type='number' maxlength="19" name='amount' id='amount' placeholder='0' />
                 <br></br>
        <br></br>
        <div>
       
        <label htmlFor='creditcard'>
            {`Card Number : `}
        </label>
        <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"/>
        <br></br>
        </div>
        <br></br>
        <div>
       
       <label htmlFor='cvv'>
           {`CVV : `}
       </label>
       <input id="ccv" type="tel" inputmode="numeric"  maxlength="3" />
       <br></br>
       </div>
       <br></br>
       <div>
       
        <button type="submit">Pay</button> 
       
        <button onClick={cancelHandler} type="button">Cancel</button> 
        </div>
        
    </form>
  );
}

export default Payment;