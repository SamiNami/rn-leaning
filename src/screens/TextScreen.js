import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [inputText, setInputText] = useState('');

    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={inputText}
                onChangeText={newValue => {
                    setInputText(newValue);
                }}
            />
            {inputText.length < 5 ? (
                <Text>Your password has to be at least 5 characters long</Text>
            ) : null}
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
