import React from 'react';
import { View,Text,StyleSheet,Button} from 'react-native';
import { useState } from 'react';

const CounterScreen = () => {
    
    const [ counter, setCounter] = useState(0);

    return (
        <View>
            <Button 
                title="Increase" 
                onPress={ () =>{
                setCounter(counter+1);
                }}
            />
            <Button 
                title="Decrease"
                onPress={ () =>{
                    setCounter(counter-1);
                }}    
            />
            <Text horizontal>Counter {counter}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default CounterScreen;