import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Info from './com/info'
import Info2 from './com/info2'
import Counter from './com/counter'




class It extends React.Component{
  minId = 3
   state = {
    data : [
      {label:"Hit the gym",checked:false,id:0},
      {label:"Pay bills",checked:false,id:1},
      {label:"Meet George",checked:false,id:2},
      
    ]
   }

   setItem = (jobLabel)=> {
      this.setState (({data})=>{
        const newId = this.minId++
       const newObj = {label:jobLabel,checked:false,id:newId}
       const newDate = [...data,newObj]
      return {data:newDate}
       
     })
   }


   onCheck = (idObj)=>() => {
     this.setState (({data})=>{
       const index = data.findIndex( ( {id} ) => id===idObj )
       if (index !== -1) {
       const obj = data[index]
       const newObj = {...obj, checked: !obj.checked}
       const newDate = [...data.slice(0, index), newObj, ...data.slice(index + 1)]
      return {data:newDate}
       }
     })
    
   }
   deleteItem = (idObj)=>() => {
    this.setState (({data})=>{
      const index = data.findIndex( ( {id} ) => id===idObj )
      const newDate = [...data.slice(0, index), ...data.slice(index + 1)]
      return {data:newDate}
    })
  }
   render () {
    return (
      <div className = "container">
          <Info setItem={this.setItem}/>
 
          <Info2 deleteItem={this.deleteItem} 
          onCheck={this.onCheck} 
          data={this.state.data}/>

          <Counter 
          all={this.state.data.length}
          checked={this.state.data.filter(({checked}) => checked).length
        }
          
          />
          
           </div>
     
 
   )
   }
   }

ReactDOM.render(<It/>,document.getElementById('root'));



