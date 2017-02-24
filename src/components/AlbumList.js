
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    componentWillMount() {
        console.log('component mounted');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => console.log(response.data))
    }
    
    render() {
        return (
            <View>
                <Text>Album List!!</Text>
            </View>
        );
    }
}

export default AlbumList;