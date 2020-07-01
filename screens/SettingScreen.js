import React from 'react';
import { Text, View, TextComponent, TextInput, TouchableOpacity} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class SettingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            docId:'',
        }
getUserDetails(){
    var user=firebase.auth().currentUser;
    var email=user.email
    db.collection('users').where ('email_id','==',email).get()
    
}
    }
    render(){
        return(
            <View style={styles.container}>
        <MyHeader title="Settings" navigation={this.props.navigation}/>
        <View style={styles.formContainer}> 
        <TextInput
        style={styles.formTextInput}
        placeholder={'first name'}
        maxLength={8}
        onChangeText={(text) => {
            this.setState({
                firstName:text
            })
        }}
        value={this.state.firstName}
        />
 <TextInput
        style={styles.formTextInput}
        placeholder={'last name'}
        maxLength={8}
        onChangeText={(text) => {
            this.setState({
                lastName:text
            })
        }}
        value={this.state.lastName}
        />
        <TextInput
        style={styles.formTextInput}
        placeholder={'contact'}
        maxLength={10}
        keyboardType={'numeric'}
        onChangeText={(text) => {
            this.setState({
               contact:text
            })
        }}
        value={this.state.contact}
        />
 <TextInput
        style={styles.formTextInput}
        placeholder={'address'}
        multiline={true}
        onChangeText={(text) => {
            this.setState({
                address:text
            })
        }}
        value={this.state.address}
        />
        <TouchableOpacity style={styles.button} 
        onPress={() => {
            this.updateUserDetails()
        }}
        >
            <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
        </View>
            </View>
        )
    }
}