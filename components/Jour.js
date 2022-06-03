import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Jour extends Component{
    render(){
        return(
            <View style={styles.jour}>
            <Text style={styles.date}>{this.props.date}</Text>
            {this.props.nom.map((name)=>{
              return <Text style={styles.activite}>Activité : {name}</Text>})
            }
            </View >
        )
    }
}

const styles = StyleSheet.create({
    jour: {
      border: 1,
      borderColor: '#000',
      borderWidth:1,
      padding: 25,
      margin: 10,
      width:320,
      flexDirection: 'column',
      borderRadius: 10
    },
    date:{
      position: 'absolute',
      top: -10,
      backgroundColor: '#0F4EE5',
      paddingVertical: 5,
      // paddingHorizontal: 1,
      borderRadius: 10,
      marginLeft: 5,
      color: 'white',
      width: 110,
      textAlign: 'center'
    },
    activite:{
      borderLeftWidth: 1,
      borderLeftColor: '#0F4EE5',
      marginVertical: 5,
      paddingHorizontal: 10
    }
  });


export default Jour