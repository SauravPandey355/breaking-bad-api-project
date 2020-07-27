import React from 'react';
export default class CharacterItems extends React.Component{
    render(){
    return(<div className = "card">
        <div className = "card-inner">
            <div className = "card-front">
                <img src = {this.props.item.img} alt = " "/>
            </div>
            <div className = "card-back">
                {this.props.item.name}
            </div>
        </div>
    </div>);
    }
}