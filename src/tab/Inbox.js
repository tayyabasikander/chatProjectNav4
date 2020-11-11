// import React from 'react'
//  import {View,Text,StyleSheet,TouchableOpacity,Button} from 'react-native'


//  class Tab3 extends React.Component{

    
//      render(){
//          return(
//             //  <View style={s.container}>
//             //      <Text>Inbox</Text>
//             //      {/* <Button title='screen2' onPress={()=>this.props.navigation.navigate('Screen2')}/> */}
//             //  </View>

//               <View 
//             // style={s.container}
//             >
//                 {/* <Text>Inbox</Text> */}
//                 {this.renderFlatlist()}

//             </View>
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
//  export default Tab3

import React, { Component } from 'react'
import { View, Text, StyleSheet ,FlatList,TouchableOpacity} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
// const Home =()=>{
  var  usersData=[]
class Inbox extends Component {
    state = {
       users:[]
    }
componentDidMount(){
    var uid = auth().currentUser.uid


    firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {
    //   console.log('Total users: ', querySnapshot.size);
  
      querySnapshot.forEach(documentSnapshot => {
        
        console.log('user details ', documentSnapshot.data());

        // if(usersData.)
       
        console.log("userdata is ",usersData)
        if(usersData.user_id !== documentSnapshot.data().user_id){
            usersData.push(documentSnapshot.data())

        }
        
        // copyUserData=usersData
        // const newArray = [];
        // usersData.forEach(obj => {
        //   if (!newArray.some(o => o.user_id === obj.user_id)) {
        //     console.log(obj.user_id)
        //     newArray.push({ ...obj })
        //   }




      
      });
      this.setState({users:usersData},()=>
      {console.log("users are",this.state.users)})


    });

    
}
renderData=(item)=>{
    console.log("item123",item)
    
    return(
        <View>
            <Text>{item.name}</Text>
        </View>
    
    )

}
renderFlatlist=()=>{
    
    if(this.state.users.length!==0){
        console.log("flatlist",this.state.users)
        return(
            <FlatList 
                data={this.state.users}
                keyExtractor={(item, index) => { index.toString() }}
                renderItem={({ item }) => { 
                    // this.renderData(item); 
                    return(
                       <TouchableOpacity style={[s.inboxUsersContainer]} 
                       onPress={()=>{
                        this.props.navigation.setParams({
                            title: item.name
                        });
                           this.props.navigation.navigate('Conversation',{item:item})
                       }}>
                           <View style={s.pic}></View>
                           <View style={{marginTop:20,marginLeft:10}}>
                           <Text style={s.inboxUsersName}>{item.name}</Text>
                           </View>
                           
                       </TouchableOpacity>
                    )
                }}
            />
        )
        
    }
   
}
    render() {
        return (
            <View 
            // style={s.container}
            >
                {/* <Text>Inbox</Text> */}
                {this.renderFlatlist()}

            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    },
    inboxUsersContainer:{
        padding:5,
        backgroundColor:"lightblue",
        marginHorizontal:10,
        marginVertical:6,
        borderRadius:5,
        paddingLeft:10,
        shadowOffset: { width: .2, height: .2 },
        shadowOpacity: 0.2,
    
        elevation: 2,
        flexDirection:'row'
    

    },
    inboxUsersName:{
        fontSize:18
    },
    pic:{
        height:50,
        backgroundColor:'grey',
        width:50,
        margin:10,
    borderRadius:50
    }
})

export default Inbox

