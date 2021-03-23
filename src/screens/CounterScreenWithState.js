import React from 'react';
import { View,Text,StyleSheet,Button} from 'react-native';
import { useReducer } from 'react';

const reducer = ( state,action) =>{
    //state === { count: number }
    //action == type: increment / decrement
    switch(action.type){
        case 'increment': 
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }

}

const CounterScreenState = () => {
    
    const [ state, dispatch] = useReducer(reducer, { count:0});
    const counter = state.count;

    return (
        <View>
            <Button 
                title="Increase" 
                onPress={ () =>
                    dispatch({ type: 'increment',payload:1 })
                }
            />
            <Button 
                title="Decrease"
                onPress={ () =>{
                    dispatch({ type: 'decrement',payload:1 })
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

export default CounterScreenState;