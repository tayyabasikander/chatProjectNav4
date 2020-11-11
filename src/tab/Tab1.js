import React from 'react'
 import {View,Text,StyleSheet,TouchableOpacity,Button} from 'react-native'


 class Tab1 extends React.Component{

    
     render(){
         return(
             <View style={s.container}>
                 <Text>Tab1</Text>
                 {/* <Button title='screen1' onPress={()=>this.props.navigation.navigate('Screen1')}/> */}
             </View>
         )
     }
 }
 const s = StyleSheet.create({
     container:{
         flex:1,
         justifyContent:'center',
         alignSelf:'center'
     }
 })
 export default Tab1