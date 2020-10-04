import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Header extends React.Component{
    render(){

        const pressHandler = () =>{
            this.props.navigation.openDrawer()
        }
        return(
            <View style={styles.header}>
                <Icon style={styles.icon} size={30} name={'ios-menu'} onPress={pressHandler} />
                <View>
                    <Text style={styles.headerText}>{this.props.name} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    headerText:{
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1, 
        color: 'black'      
    },

    icon:{
        position: 'absolute',
        left: 1,
        color: 'black',
        marginLeft: 10
    }
})