import React from 'react';
import Info3 from '../info3/info3';
import "./info2.css"

const Info2 = ({data,onCheck,deleteItem}) => {
        
        return (
             
                <ul id="myUL">
                    {data.map((item)=>{
                       return (
                            <Info3 deleteItem={deleteItem(item.id)} onCheck={onCheck(item.id)} key = {item.id} label = {item.label} checked = {item.checked} />
                       ) 
                    })}
                   
                    

                 </ul>
            
        )
    }

export default Info2;

 

