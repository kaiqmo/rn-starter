import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const Name = "teste"
    return <View>
        <Text style={styles.textStyle}>
            This is the components screen
        </Text>
        <Text style={styles.SubTitle}>
            Nome : {Name}
        </Text>
    </View>   
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    SubTitle:{
        fontSize:15
    }
});
export default ComponentsScreen;