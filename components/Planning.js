import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Jour from './Jour';

const Planning = (props) => {
    const styles = StyleSheet.create({
        jour: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return (
        <ScrollView>
            {props.items.map((element) => {
                return <Jour key={element.name} style={styles.jour} date={element.date} nom={element.name}>Date : {element.date}{"\n"}</Jour>
            })}
        </ScrollView>

    )
}

export default Planning