import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Jour from './Jour';

class Planning extends Component{

    state = {
        items : [
            { date: '2022-06-05' , name: ['RDV dentiste', 'Véto'] },
            { date: '2022-05-30' , name: ['Bordel ça marche']},
            { date: '2022-05-29' , name: ['Wesh alors']},
            { date: '2022-05-29' , name: ['Wesh alors']},
            { date: '2022-06-05' , name: ['RDV dentiste', 'Véto'] },
            { date: '2022-05-30' , name: ['Bordel ça marche']},
            { date: '2022-05-29' , name: ['Wesh alors']},
            { date: '2022-05-29' , name: ['Wesh alors']}
        ]
      };


    render(){
        const styles = StyleSheet.create({
            jour: {
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center'
            }
          });
        
        return(
            
            <ScrollView>
            {this.state.items.map((element)=>{
                
                return <Jour style={styles.jour} date={element.date} nom={element.name}>Date : {element.date}{"\n"}
                {/* {element.name.map((name)=>{
                    console.log(name);
                    return <Text>Activité : {name} {"\n"}</Text>
                })} */}
                </Jour>
                

            })}

            </ScrollView>
            
            
        )
    }

    
    
    
    
}

export default Planning