import React, {useState} from 'react';
import ListItem from './ListItem';
import './../App.scss'
const List = (props) => {
    const [search, setSearch] = useState('');
    const onChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
    <div id='list'>
        <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>{props.title}</h2>
            <input placeholder='Search for login' onChange={onChangeSearch}></input>
            <button style={{marginTop:'0px'}} onClick={props.getStore}>Refresh</button>
        </div>
        <div id='inner-list'>
            {props.listOfOrders.filter(item => item.user_name.includes(search)).map(item => <ListItem key={item.cart_id} getStore={props.getStore} item={item}/>)}
        </div>
        
    </div>)
}
export default List;