import React from 'react';
import CharacterItems from './CharacterItems';
export default class CharacterGrid extends React.Component{
    render(){
        return (
        <div className = "cards">
            {this.props.items.map((item)=>
            <CharacterItems key = {item.char_id} item = {item}/>)}
        </div>);
    }
}