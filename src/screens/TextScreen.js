import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [inputText, setInputText] = useState('');

    return (
        <View>
            <Text>Enter Name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={inputText}
                onChangeText={newValue => {
                    setInputText(newValue);
                }}
            />
            <Text>Your name is: {inputText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
