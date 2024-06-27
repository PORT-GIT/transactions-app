import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  //variable to store our balance
  //usestate is a hook
  let [balance, setBalance] = useState(0)
  //states allows someone to keep track of values
  let [userInput, setUserInput] = useState(0)
  // let [transactions, setTransactions] = useState([])
  //create logic to update transaction in the table

  const handleDeposit = () => {
    console.log('Deposit Clicked')
    userInput = parseInt(userInput);
    balance = parseInt(balance);

    if (userInput <= 0) {
      console.log ('Error: input less than or 0');
      return;
    }
    

    setBalance(balance + userInput);
    //will call this function

  }

  const handleWithdrawal = () => {
    console.log('Withdrawal Clicked')
    userInput = parseInt(userInput);
    balance = parseInt(balance);

    if (balance => 0) {
      console.log ('Error: input less than or 0');
      return;
    }

    setBalance(balance - userInput);
    //will call this function

  }
  

  return (
    <>
    <div class="container">
      <div class="app">
        <div class="top">
          <h1>DepWith App</h1>
        </div>

        <div class="balance">Account Balance: KSH <span id="balance">{balance}</span></div>
        <div class="user-input">
          <form id="transactionForm" onSubmit={(e) => {
            e.preventDefault();
            //prevents page from reloading when the onclick function is activated
          }}>

            <input type="number" name="amount" id="amount" value={userInput} onChange={(e) => {
              setUserInput(e.target.value);
              console.log(userInput);
              //fix this
            } }/>
            <button id="depositButton" type="submit" onClick={(handleDeposit) => {
              console.log('Deposit Clicked');
              userInput = parseInt(userInput);
              balance = parseInt(balance);
              setBalance(balance + userInput);

            }}>
              Deposit
            </button>
            <button id="withdrawalButton" type="submit" onClick={(handleWithdrawal) => {
              console.log('Withdraw Clicked');
              userInput = parseInt(userInput);
              balance = parseInt(balance);
              setBalance(balance - userInput);
            }}>Withdraw</button>
            
          </form>
        </div>

        <div class="transactions">
          <h2>Transactions</h2>
          {/* <!-- Table with transactions --> */}
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody id="transactions">
              <tr>
                <td>Deposit</td>
                <td>1000</td>
                <td>2020-10-10</td>
              </tr>

              <tr>
                <td>Deposit</td>
                <td>1000</td>
                <td>2020-10-10</td>
              </tr>

              <tr>
                <td>Deposit</td>
                <td>1000</td>
                <td>2020-10-10</td>
              </tr>

              <tr>
                <td>Deposit</td>
                <td>1000</td>
                <td>2020-10-10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
    </>
  )
}

export default App
