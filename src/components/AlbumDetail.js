import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            <View>
                <Image>{props.album.thumbnail_image}</Image>
                <Text>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
            </View>
            <View>
                <Image>{props.album.image}</Image>
            </View>
            <View>
                <Button>Buy Now</Button>
            </View>    
        </View>
    );
};

export default AlbumDetail;