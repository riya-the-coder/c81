import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawers';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Components{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.DrawerItemsContainer}>
     <DrawerItems {...this.props}>

     </DrawerItems>
            </View>
            <View style={styles.logoutContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={() => {
                    this.props.navigation.navigate('WelcomeScreen')
                    firebase.auth().signOut()
                }}>
                    <Text style={styles.logoutText}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    DrawerItemsContainer:{

    },
    logoutContainer:{

    },
    logoutButton:{
color:'orange'
    },
    logoutText:{

    },
})
