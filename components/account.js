import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class DishDetail extends React.Component{

    render(){

        return(
            <View style={styles.container} >
                <Text>Merci</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    }
})