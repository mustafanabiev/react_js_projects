import React from 'react';
import "./info3.css"

class Info3 extends React.Component {

    state = {
        important:false
    }

    setImportant = () => {
        this.setState(({important})=>{
            return {important: !important}

        })
    }
  
    render() {
        const {label,checked,deleteItem,onCheck} = this.props
        let className = '';
        let className2 = '';
        if (checked) {
            className = 'checked'
        }
        if (this.state.important) {
            className2 = 'important'

        }
        return (
            <div>
                <li  className={className}>
                    <span onClick={onCheck} className={className2} > {label}</span>
                    <span onClick={deleteItem} className ="del">
                        <i className = 'fa fa-trash'/>
                    </span>

                    <span onClick={this.setImportant} className ="imItem">
                        I
                    </span>
                </li>
            </div>
    )

    }
   
}
export default Info3;