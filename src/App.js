import React, {useState} from 'react';
import ResetPassword from './Components/ResetPassword'
import MassUpload from './Components/MassUpload'
import Orders from './Components/Orders'
import CheckAssociate from './Components/CheckAssociate'
import Login from './Components/Login'
import Register from './Components/Register'

import './App.scss';

function App() {


  const [route, setRoute] = useState('INITIATE');
  const [manager_user_name, setManager] = useState('')

 

  const selectRoute = () => {
    switch (route)
    {
      case 'LOADING': 
        return (<div className='center-screen'><div className='loader'></div></div>)

      case 'INITIATE':
        return (
          <div className='center-screen'>
            <div className='display' style={{maxWidth: '700px'}}>
              <h3>ATTENTION</h3>
              <p style={{color: '#696969'}}>Please use the Manual Delivery or Badge Scan Delivery Function to mark an order as 'DELIVERED' when handing out items to associates!</p>
              <p style={{color: '#696969'}}>This also adds a timestamp on the delivery for future reference!</p>
              <p style={{color: '#696969'}}>We are having problems with associates claiming they did not receive their orders!</p> 
              <p style={{fontWeight: 'bold'}}>Thank you for your support!</p>
            </div>

            <Login setRoute={setRoute} manager_user_name={manager_user_name} setManager={setManager}></Login>
            <Register setRoute={setRoute}></Register>

          </div>
        )

      default: 
        return (
          <div className='center-screen'>
              <h3 style={{color: 'white', textAlign: 'center', padding: '0.5em', margin: '0.5em',
                  borderRadius: '10px', backgroundColor: '#d15d4b'}}>
                  Notice: We are migrating away from the old SWAG store to the new SWAG store. 
                  Please do NOT make changes to the old store. 
                  Any changes to the old store will NOT reflect on the new store!
                  Please use this tool to deposit SWAG BUCKS to Associates' accounts
              </h3>
              {
                  
                <h3 style={{color: 'white', textAlign: 'center', padding: '0.5em', margin: '0.5em',
                    borderRadius: '10px', backgroundColor: '#d15d4b'}}>
                    If you would like to get something from the store, feel free to add Swag $$ to yourself and order it!</h3>
                  
              }
              <div className='display'>
                <h3>ACCOUNT MANAGER'S INSTRUCTIONS</h3>
                <p style={{color: 'gray'}}>To add swag $$ to an Associate, input the amount you would like to give, enter the justification and scan the Associate's Badge or Enter the Login<br/>
                Please refer to this guide for using the Mass Swag Distribution function:</p>
                  <a href="https://docs.google.com/document/d/18vQ-bbHLMPLGw07nFzrkLHNg6FYx3NfBAbYWgLa60WU/edit?usp=sharing">
                  https://docs.google.com/document/d/18vQ-bbHLMPLGw07nFzrkLHNg6FYx3NfBAbYWgLa60WU/edit?usp=sharing</a>
                  <p style={{color: 'gray'}}>
                To reset an Associate's Password, confirm and enter the login and click Submit<br/>
                To check how much SWAG $$ an Associate has, scan Badge or enter the Login and click Submit
                </p>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems:'center'}}>
                  <MassUpload manager_user_name={manager_user_name}/>
                  <div>
                  <ResetPassword/>
                  <CheckAssociate/>
                  </div>
                </div>

                <Orders/>
              </div>
        )
    }
  }

  return (
    <div className="App">
      {selectRoute()}
    </div>
  );
}

export default App;
