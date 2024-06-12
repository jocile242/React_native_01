import React, {useEffect, useState} from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet
} from 'react-native';
import UseState from "./UseState";


function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return function () {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (time) => {
        return time.toLocaleTimeString('fr-FR');
    };

    return (

        <View>
            <View style={{}}/>
            <Text>Header</Text>
            <Text>{formatTime(time)}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#340834',
        textAlign: 'center',
    },

});


export default Header;


