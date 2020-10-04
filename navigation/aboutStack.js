import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'

import About from '../components/aboutComponent'
import Header from '../components/header'

const screens = {
    About:{
        screen : About,
        navigationOptions:({navigation}) =>{
            return {
                headerTitle: () => <Header name='About' navigation={navigation} />
            }
        }
    },
}

export default HomeStack = createStackNavigator(screens)