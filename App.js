


import React,{Component} from 'react';
import {
  StyleSheet,
  View,Text
} from 'react-native';
import MainApp from './src/navigators/TabNavigator'
import HomeStack from './src/navigators/HomeStack'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
console.disableYellowBox = true;

const RootNavigator = createSwitchNavigator(
  {
    // Splash1: Splash1,
    Home: HomeStack,
    Main: MainApp,
    // Chat: Chat,
  },
  {
    initialRouteName: "Home",
  }
);

const AppNavigator = createAppContainer(RootNavigator)
class App extends Component{
  render(){
    return(
      <AppNavigator />
      // <View>
        // <Text>hi</Text>
      // </View>
    )
  }
}
// const App= () => {
//   return (
//     <>
      
//           <View>
//             <HomeStack />
//           </View>
//     </>
//   );
// };

const styles = StyleSheet.create({
 
});

export default App;
