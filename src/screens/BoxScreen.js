import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () =>{

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}> Child 1</Text>
            <Text style={styles.textStyle2}> Child 2 </Text>
            <Text style={styles.textStyle3}> Child 3 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor:'black',
        alignItems:'center',
        flexDirection:'row',
        height:100,
        justifyContent:'center'
    },
    textStyle1:{
        borderWidth:1,
        borderColor:'red',
        flex:3,
        top:0,
        left:0,
        backgroundColor:'red',
        width:55,
        height:55,
        position:'absolute'
    },
    textStyle2:{
        borderWidth:1,
        borderColor:'red',
        fontSize:18,
        margin:10,
        flex:3,
        position:'absolute',
        width:55,
        height:55,
        top:25,
        backgroundColor:'purple'
    },
    textStyle3:{
        borderWidth:1,
        borderColor:'red',
        flex:4,
        top:0,
        right:0,
        position:'absolute',
        width:55,
        height:55,
        backgroundColor:'grey'
    },
})

export default BoxScreen;