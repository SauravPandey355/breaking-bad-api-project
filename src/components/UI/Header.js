import React from 'react'
import logo from '../../logo.jpg'
export default class Header extends React.Component{
    render(){
        return(
            <div className = 'center'>
                <img src = {logo} alt = '' />
            </div>
        );
    }
}