import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

export default class Menu extends React.Component{

    
    renderMenuItem = ({item, index}) => {
        const next = this.props.navigation.navigation
        return (
           /*  <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{ source: item.image}}
            /> */
            
            <ListItem 
                key={index}
                onPress={() => next.navigate('Detail')}
            >
                <Avatar rounded source={require('../images/pizza1.jpg')} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    render(){
        
        return(
            <View style ={styles.container} >
                <FlatList 
                    data={this.props.dishes}
                    renderItem={this.renderMenuItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
    }
})