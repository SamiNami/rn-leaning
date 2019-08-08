import React from 'react';
import { View, StyleSheet , Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textStyle1} />
            <View style={styles.textStyle2} />
            <View style={styles.textStyle3} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle1: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    textStyle2: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    textStyle3: {
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    }
});
export default BoxScreen;

