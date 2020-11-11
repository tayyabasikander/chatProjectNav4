// import React from 'react'
//  import {View,Text,StyleSheet,Button} from 'react-native'
// // import { TouchableOpacity } from 'react-native-gesture-handler'

//  class Screen2 extends React.Component{
//      render(){
//          return(
//              <View style={s.container}>
//                  <Text>Screen2</Text>
//                  <Button title='Main' 
//                  onPress={()=>this.props.navigation.navigate('Main')}
//                  />
//              </View>
//          )
//      }
//  }
//  const s = StyleSheet.create({
//      container:{
//          flex:1,
//          justifyContent:'center',
//          alignSelf:'center'
//      }
//  })
//  export default Screen2






import React, { Component } from 'react'
import {View ,Text ,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Item,Input } from 'native-base'
import auth from '@react-native-firebase/auth'

// const Login =()=>{
    class Screen2 extends Component{
        state = {
            email: 'tayyaba@gmail.com',
            password: '123456',
            
        }
    login=()=>{
        
        const{ email,password,}= this.state
        auth().signInWithEmailAndPassword(email, password)
            .then(async(loggedInUser) => {
                console.log("useer",loggedInUser)

                // var user = auth().currentUser;
                // var name, email, photoUrl, uid, emailVerified;
                


                    this.props.navigation.navigate('Main')
            })
    }
        render(){
            const{ email,password,}= this.state
            return(
                <View 
                // style={s.container}
                >
            
            <View style={s.header}>
            <Text style={s.headerText}>Login</Text>
        </View>
        

        <Item style={s.inputStyle} rounded>

            <Input
                style={s.inputTextStyle}
                placeholder="Enter your email"
                // placeholderTextColor='black'
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(x) => this.setState({ email: x })}

            />

        </Item>

        <Item style={s.inputStyle} rounded>

            <Input
                style={s.inputTextStyle}
                placeholder="Enter your password"
                // placeholderTextColor='black'
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(x) => this.setState({ password: x })}
                secureTextEntry={true}


            />

        </Item>

        <View style={{ backgroundColor: 'blue', width: '80%', alignSelf: 'center', marginVertical: 10, padding: 10, borderRadius: 15 }}>
                    {/* <Text style={{ color: 'grey' }} >Already have an Account? </Text> */}
                    <TouchableOpacity
                        style={{ alignSelf: "center", justifyContent: 'center' }}
                        onPress={() => {
                            // this.validation()
                            this.login()
                            // this.props.navigation.navigate('LoginScreen')
                        }}
                    >
                        <Text style={{ color: '#fff', textAlign: "center" }}>Login</Text>
                    </TouchableOpacity>

                </View>


</View>
            )
            
        }
    }

const s = StyleSheet.create({
    container:{
        flex :1,
        justifyContent:"center",
        alignSelf:"center"
    },
    inputStyle: {
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        borderWidth: 0,margin:10
    },  
    inputTextStyle:{
        // padding:10
        // paddingHorizontal:40
    },  
    mainContainer:{
        flex:1,
        justifyContent:'center',
        // alignSelf:'center'
    },
    header:{
        width:'80%',
        alignSelf:'center',
        // backgroundColor:'red',
        height:100,
        // marginBottom:20
    },
    headerText:{
        fontSize:30,
        textAlign:'center'
    }
})

export default Screen2

