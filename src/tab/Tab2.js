import React from 'react'
 import {View,Text,StyleSheet,TouchableOpacity,Button} from 'react-native'


 class Tab2 extends React.Component{

    
     render(){
         return(
             <View style={s.container}>
                 <Text>Tab2</Text>
                 {/* <Button title='screen2' onPress={()=>this.props.navigation.navigate('Screen2')}/> */}
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
 export default Tab2