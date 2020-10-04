import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'

import Contact from '../components/contactComponent'
import Header from '../components/header'

const screens = {
    Contact:{
        screen : Contact,
        navigationOptions:({navigation}) =>{
            return {
                headerTitle: () => <Header name='Contact' navigation={navigation} />
            }
        }
    },
}

export default HomeStack = createStackNavigator(screens)