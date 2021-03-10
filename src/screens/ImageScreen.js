import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import ImageDetail from '../components/imageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail Score="1" title="Fa\mst" imageSource={require('../../assets/mountain.jpg')}/>
            <ImageDetail Score="5" title="Forest" imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail Score="7" title="Beach" imageSource={require('../../assets/beach.jpg')}/>
        </View>
    );
}

export default ImageScreen;