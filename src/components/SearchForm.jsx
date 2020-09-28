import React, {Component} from 'react'
import axios from 'axios';



export class SearchForm extends Component{
    state = {
        input: ""
    }

    _handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        alert(this.state.input)
    }
    

render (){
    return(
        <form onSubmit={this._handleSubmit}>
        <div className="home-view__s">
           <input
             className="input"
             onChange={this._handleChange}
             type="text"
             placeholder="Type the name of your favorite artist..." />
            <button className="button_is_info">
                Search
            </button>
        
        </div> 
        </form>

        
    )
}
}