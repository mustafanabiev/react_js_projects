import React from 'react';
import './info.css'

class Info extends React.Component {
   state = {
      newJob:''
  }
  onChange = (e) => {
   this.setState({
      newJob:e.currentTarget.value.toUpperCase()
   })
}
onSubmit = (e) =>{
   e.preventDefault()
   const value = this.state.newJob;
   if (value.length > 0){
      this.props.setItem(value)
   }
}
  render() {
   return (
      <div id='myDIV' className='header'>
      <h2>My To Do List</h2>
      <form onSubmit={this.onSubmit}>
        <input name="new-job" value={this.state.newJob} onChange={this.onChange} type="text" id="myInput" placeholder="Title..."/>
        <button type="submit" className="addBtn">Add</button>
      </form>
    </div>
     )
  }
}

export default Info;