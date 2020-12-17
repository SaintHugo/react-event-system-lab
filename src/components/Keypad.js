// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {

    keyHandler = () => {
        console.log('Entering password...')
    }

    render(){
        return(
           <input onKeyUp={this.keyHandler}type="password"/>
        )
    }

}