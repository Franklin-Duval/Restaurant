import React from 'react'
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native'
import { Card, ListItem, Avatar } from 'react-native-elements'
import { LEADERS } from '../shared/leaders'


export default class Contact extends React.Component{

    renderMenuItem = ({item, index}) => {
        
        return (
            <ListItem key={index} >
                <Avatar source={require('../images/pizza1.jpg')} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    render(){
        
        return(
            <ScrollView style={styles.container} >
                <Card>
                    <Card.Title>Our History</Card.Title>
                    <Card.Divider/>

                    <Text>
                        Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                    </Text>
                    <Text>
                        The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                    </Text>
                    
                </Card>

                <Card>
                    <Card.Title>Corporate LeaderShip</Card.Title>
                    <Card.Divider/>

                    {
                        LEADERS.map((item, index) => {
                            return (
                                <View key={index} >
                                    <ListItem key={index} >
                                        <Avatar rounded source={require('../images/pizza1.jpg')} />
                                        <ListItem.Content>
                                            <ListItem.Title>{item.name}</ListItem.Title>
                                            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                                        </ListItem.Content>
                                    </ListItem>
                                </View>
                            )
                        })
                    }
                    
                </Card>
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})