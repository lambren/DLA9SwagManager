import React, {useEffect, useState} from 'react'

import List from './List'
import BadgeScanDelivery from './BadgeScanDelivery'

import {HOSTNAME} from './../Constants'
import './../App.scss'


const Orders = (props) => {

    const [loading, setLoading] = useState(false);
    const [listOfOrders, setListOfOrder] = useState([]);

    const getStore = () => {
        setLoading(true);
        fetch(HOSTNAME + 'get-fulfilled-orders/')
        .then(res => res.json())
        .then(data=>{
          if(data.status === 'SUCCESS')
          {
            setListOfOrder(data.order);
          }
          else 
          {
            alert.error('FAILED TO GET LIST OF ORDERS')
          }
        }).catch(err => 
        {
          console.log(err);
          alert.error('FAILED TO CONNECT TO SERVER, PLEASE CHECK YOU CONNECTION!')
        }).finally(() => setLoading(false));
      }
    
      useEffect(() => {
        setLoading(true);
        fetch(HOSTNAME + 'get-fulfilled-orders/')
        .then(res => res.json())
        .then(data=>{
          if(data.status === 'SUCCESS')
          {
            setListOfOrder(data.order);
          }
          else 
          {
            alert.error('FAILED TO GET LIST OF ORDERS')
          }
        }).catch(err => 
        {
          console.log(err);
          alert.error('FAILED TO CONNECT TO SERVER, PLEASE CHECK YOU CONNECTION!')
        }).finally(() => setLoading(false));
      },[]);
    

    return (
        <div>
            {(loading)? <div className='loader'></div> :
            <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
              <div id='instructions' className='display'>
                <h3>ORDER DELIVERY/CANCELLATION INSTRUCTIONS</h3>
                <p style={{color:'gray', }}>
                    To cancel an order, you can click the 'Cancel Order' Button corresponding to the order you are cancelling <br/>
                    <br/>**NOTE: please use the following features to mark the order 'DELIVERED' when you hand out an item<br/>
                    To deliver an order, you can click the 'Deliver Order' Button corresponding to the order you are delivering. <br/> <br/>
                    Alternatively, you can scroll down to the bottom of the page and use the Deliver By Badge Scan feature: <br/>
                    Click on the input field and scan the associate's badge, and all fulfilled order of the associate will be marked 'DELIVERED.'</p>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', alignItems: 'center', alignContents: 'center'}}>
                  <List getStore={getStore} title='Fulfilled orders' listOfOrders={listOfOrders.filter(item => item.status === 'FULFILLED')}></List>
                  <List getStore={getStore} title='Back Orders' listOfOrders={listOfOrders.filter(item => item.status === 'BACKORDERED')}></List>
              </div>
              <BadgeScanDelivery getStore={getStore}></BadgeScanDelivery>

            </div>
            }
        </div>
    )
}

export default Orders;