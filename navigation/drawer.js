import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'

import Icon from 'react-native-vector-icons/Ionicons'
import HomeStack from './homeStack'
import AccountStack from './accountStack'
import AboutStack from './aboutStack'
import ContactStack from './contactStack'

const RootDrawer = createDrawerNavigator(
    {
        Home:{
            screen: HomeStack,
            navigationOptions:{
                title: 'Home',
                drawerIcon: ({tintColor}) => <Icon size={25} color={tintColor} name={'ios-home'} />
            }
        },

        Account:{
            screen: AccountStack,
            navigationOptions:{
                title: 'My Account',
                drawerIcon: ({tintColor}) => <Icon size={25} color={tintColor} name={'ios-person'} />
            }
        },

        About:{
            screen: AboutStack,
            navigationOptions:{
                title: 'About',
                drawerIcon: ({tintColor}) => <Icon size={25} color={tintColor} name={'ios-person'} />
            }
        },

        Contact:{
            screen: ContactStack,
            navigationOptions:{
                title: 'Contact',
                drawerIcon: ({tintColor}) => <Icon size={25} color={tintColor} name={'ios-person'} />
            }
        },

        
    },
    
)

export default createAppContainer(RootDrawer)