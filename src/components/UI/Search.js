import React from 'react';

export default class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            text:'',
        }

        this.ChangeHandler = this.ChangeHandler.bind(this);   
    }
    ChangeHandler = (event) =>{
        this.setState({
            text : event.target.value,
        })
        this.props.getquery(event.target.value)
    }
    render(){
        return(
            <div>
                <form>
                    <input type = 'text' value={this.state.text} onChange = {this.ChangeHandler}/>
                </form>  
            </div>
        );
    }
}