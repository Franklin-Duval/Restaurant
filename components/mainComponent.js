import React from 'react'
import {View, StyleSheet, Button} from 'react-native'
import { DISHES } from '../shared/dishes'
import Menu from './menuComponent'


export default class Main extends React.Component{

    state = {
        dishes: DISHES
    }
    
    render(){
        return(
            <Menu dishes={this.state.dishes} navigation={this.props} />
            
        )
    }
}

