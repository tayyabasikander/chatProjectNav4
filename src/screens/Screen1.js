// import React from 'react'
//  import {View,Text,StyleSheet,TouchableOpacity,Button} from 'react-native'


//  class Screen1 extends React.Component{


    
    
//       /* render function, etc */
    
    
//      render(){
//          return(
//              <View style={s.container}>
//                  <Text>Screen1</Text>
// {/* 
//                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Screen1')} >
//                      <Text>Screen2</Text>
//                  </TouchableOpacity> */}
//                  <Button title='screen2' onPress={()=>this.props.navigation.navigate('Screen2')}/>
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
//  export default Screen1





import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Item,Input } from 'native-base'
import auth from '@react-native-firebase/auth'
// const Signup =({navigation})=>{
    import firestore from '@react-native-firebase/firestore';
class Screen1 extends React.Component {

    state = {
        email: 'tayyaba@gmail.com',
        password: '123456',
        error: '',
        name: 'tayyaba',
        visible: false,
        contactNumber: '03238076526'
    }
    signUp=()=>{
        const{ email,password,name,contactNumber}= this.state
        auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            const user_id = user.user.uid
        console.log("res",user)


        firestore()
        .collection('Users')
        .doc(user_id)
        .set({
          name: name,
          contact: contactNumber,
          user_id:user_id
        })
        .then(() => {
          console.log('User added!');
            this.props.navigation.navigate('Screen2')

        })
        .catch((error)=>console.log("error msg is", error.message));


        })
        .catch(error => {
            console.log("error msg is", error.message)
            // registerUserFail(dispatch, error.message)
        })
    
    }
    render() {
        const{ email,password,name,contactNumber}= this.state
        return (
            <View style={s.mainContainer}>

                <View style={s.header}>
                    <Text style={s.headerText}>Sign Up</Text>
                </View>
                {/* <Text>signup</Text> */}

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




                <Item style={s.inputStyle} rounded>

                    <Input
                        style={s.inputTextStyle}
                        placeholder="Enter your name"
                        // placeholderTextColor='black'
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={name}
                        onChangeText={(x) => this.setState({ name: x })}


                    />

                </Item>


                <Item style={s.inputStyle} rounded>

                    <Input
                        style={s.inputTextStyle}
                        placeholder="Enter your contact number"
                        // placeholderTextColor='black'
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={contactNumber}
                        onChangeText={(x) => this.setState({ contactNumber: x })}
                        keyboardType={"numeric"}


                    />

                </Item>







                {/* <View style={{ alignSelf: "center", width: '80%' }}>
                    <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                </View> */}



                <View style={{ backgroundColor: 'blue', width: '80%', alignSelf: 'center', marginVertical: 10, padding: 10, borderRadius: 15 }}>
                    {/* <Text style={{ color: 'grey' }} >Already have an Account? </Text> */}
                    <TouchableOpacity
                        style={{ alignSelf: "center", justifyContent: 'center' }}
                        onPress={() => {
                            // this.validation()
                            this.signUp()
                            // this.props.navigation.navigate('LoginScreen')
                        }}
                    >
                        <Text style={{ color: '#fff', textAlign: "center" }}>SignUp</Text>
                    </TouchableOpacity>

                </View>
                {/* <Spinner visible={visible} />   */}
            </View>


        )





    }
}




const s = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignSelf: "center"
    // }
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

export default Screen1

