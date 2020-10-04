import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'

import Account from '../components/account'
import Header from '../components/header'

const screens = {
    Account:{
        screen : Account,
        navigationOptions:({navigation}) =>{
            return {
                headerTitle: () => <Header name='Account' navigation={navigation} />
            }
        }
    },

    
}

export default HomeStack = createStackNavigator(screens)