import {createStackNavigator} from 'react-navigation-stack'
// import {createAppContainer} from 'react-navigation'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import React from 'react'
import {View,Text } from 'react-native'


const HomeStack = createStackNavigator({
   
    // Screen1:{
    //     screen:Screen1,
    //     navigationOptions:{
    //         // header:null
    //     }
    // },
    Screen2:{
        screen:Screen2
    },
     Screen1:{
        screen:Screen1,
        navigationOptions:{
            // header:null
        }
    },


    
    
},
// {
//     defaultNavigationOptions: ({ navigation }) =>({
//         headerStyle:{backgroundColor:'purple'},
//         headerTitleStyle:{color:'white',flex:1,textAlign:'center'},
//           headerLeft: (
//            <View>
//                {/* <Text>headerleft</Text> */}
//            </View>
//         ),
//             headerRight:(
//             <View></View>
//         )
//     } )
// },
)
export default HomeStack