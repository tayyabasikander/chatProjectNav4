// const { Component } = require("react")

import React,{Component } from 'react';
import {View ,Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
var uid =auth().currentUser.uid
class Conversation extends Component {
    state={
        messages:'',
        item:this.props.navigation.getParam('item'),
        profile:''
    }

componentDidMount(){
    
console.log("item22",this.state.item)
    firestore()
    .collection('Users')
    .doc(uid)
    .get().then((user)=>{
        console.log("data",user.data())
        this.setState({profile:user.data()})
    })
    
    // firestore()
    // .collection(`conversations2`)
    // .doc(this.state.item.user_id)
    // .collection('messages')
    // .onSnapshot((doc)=>{
    //         console.log("snapshot",doc)
    // })
    // // console.log('conv',chat)

   
  
this.setState({messages:[{
    _id:uid,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: this.state.item.user_id,
            name: this.state.item.name,
            avatar: 'https://placeimg.com/140/140/any',
          },
        // },
}]})
}

 saveMessage=(id,message)=>{
    return firestore()
    .collection("conversations2")
    .doc(id)
    .collection("messages")
    .add(message);
}

    onSend =() => {
        console.log("messages",this.state.messages)
        
                
            //   setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
            this.setState({messages:previousMessages => GiftedChat.append(previousMessages, messages)})
            //   saveMessage()
            this.state.messages.map(message => {
                this.saveMessage( this.state.item.user_id, {
                    createdAt: message.createdAt.getTime(),
                    text: message.text,
                    user: message.user
                });
            });
        

            // this.setState((prevState, props) => ({
            //     userMessagingCount: prevState.userMessagingCount + 1
            // }))
        
            }
    render(){


   
        return(
            // <View>
            //     <Text>Conversation</Text>
            // </View>
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => {
                    console.log("messages",messages)
                    this.onSend(messages)
                }}
                user={{
                    _id: uid,
                    name:this.state.profile.name

                }}
            />
        )
    }
}
export default Conversation
