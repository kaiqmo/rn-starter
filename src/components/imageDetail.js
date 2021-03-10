import React from 'react';
import { View,Text,StyleSheet, Image} from 'react-native';

const ImageDetail = ({title,imageSource,Score}) => {
    return <View>
        <Image source={imageSource} />
        <Text>{title}</Text>
        <Text>{Score}</Text>
    </View>
}
const styles = StyleSheet.create({
})
export default ImageDetail;