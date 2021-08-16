import React,{useState} from 'react';

function Payment(){
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const balanceAmount = params.get('amount');
  const redirectUrl = params.get('callback');
  
  const [amount, setAmount] = useState(Number(balanceAmount));
  const submitHandler = function(e){
    e.preventDefault();
    let status = "kites";
    let path = `${redirectUrl}?q=${status}&status=paid`;
    window.location.href = path;
  
  }

  const inputHandler = (e) => {
    setAmount(e.target.value);
  };

  const cancelHandler = (e) => {
    
  }
  return (

    <form onSubmit={submitHandler} className="App">
        <label htmlFor='amount'>
            Enter the amount:
        </label>
        <label htmlFor='amount'>
            Enter the amount:
        </label>
        <br></br>
        <input
            value={amount} onChange={inputHandler}
                type='number' name='amount' id='amount' placeholder='0' />
        <button type="submit">Do payment</button> 
        <button onClick={cancelHandler} type="button">Cancel</button> 
    </form>
  );
}

export default Payment;