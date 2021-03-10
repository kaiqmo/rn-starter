import React from 'react';
import { View,Text,StyleSheet,Button, FlatList} from 'react-native';
import { useState } from 'react';

const colorScreen = () => {
    const [colors,setColors] = useState([]);
    console.log(colors);
    return (
        <View>
            <Button 
                title="Add Color" 
                onPress= { () => {
                    setColors([...colors, randomRgb()])
                }}
            />

            <FlatList 
                keyExtractor = { (item) => item}
                data={colors} 
                renderItem={ ({item})=>{
                    return (
                        <View style={ { height:100, width:100, backgroundColor:item} } />   
                    );
                }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default colorScreen;