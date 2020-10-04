import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Card } from 'react-native-elements'

export default class DishDetail extends React.Component{

    render(){

        const dish = this.props.dish
        return(
            <Card>
                <Text>
                    this is beautiful
                </Text>
            </Card>
        )
    }
}