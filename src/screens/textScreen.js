import React, { useState} from 'react';
import { View,TextInput,Text,StyleSheet} from 'react-native';

//Text Input não tem css como default

const TextScreen = () =>{
    const [name, setName] = useState('');

    return <View>
        <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
            value={name}
            onChangeText={ (newValue) => setName(newValue)}
        />
        <Text>Olha seu nome {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor:'black',
        borderWidth:2

    }
});

export default TextScreen;