import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        {   name:"Beatriz", age:24},
        {   name:"Natalia", age:14},
        {   name:"Sandra", age:14 },
        {   name:"Anadir", age:14 },
        {   name:"Kaique", age:14 },
    ]
    return (
        <FlatList 
            data={friends} 
            keyExtractor={ friend => friend.name}
            renderItem={ ({item}) =>{
                return <Text style={styles.textStyle}>Nome {item.name} - idade: {item.age}</Text>
            }
        }/>
    );
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        marginVertical:15
    },
    SubTitle:{
        fontSize:15
    }
});
export default ListScreen;