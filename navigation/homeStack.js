import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'

import Home from '../components/mainComponent'
import Detail from '../components/dishDetailComponent'
import Header from '../components/header'

const screens = {
    Home:{
        screen : Home,
        navigationOptions:({navigation}) =>{
            return {
                headerTitle: () => <Header name='Home' navigation={navigation} />
            }
        }
    },

    Detail:{
        screen : Detail,
        navigationOptions:{
            title: 'Dish Detail'
        }
    },
}

export default HomeStack = createStackNavigator(screens)