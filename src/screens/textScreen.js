import React, { useState} from 'react';
import { View,TextInput,Text,StyleSheet} from 'react-native';
import { greaterThan } from 'react-native-reanimated';

//Text Input não tem css como default

const TextScreen = () =>{
    const [name, setName] = useState('');

    return <View>
        <Text>Put your name with more then 5 digits</Text>
        <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
            value={name}
            onChangeText={ (newValue) => setName(newValue)}
        />
        <Text>Olha seu nome {name}</Text>
        {
            name.length > 5?
            <Text style={styles.valid}>Name is Valid!</Text>
            :
            <Text>Name is less then 5 digits</Text>
        }
    </View>
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor:'black',
        borderWidth:2
    },
    valid:{
        margin:10,
        borderColor:'green',
        borderWidth:2
    },
});

export default TextScreen;