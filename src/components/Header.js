import React, {useEffect, useState} from 'react';
import {
    Button,
    Text,
    View
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

        <View
            style={{
                flexDirection: 'row',
                height: 60,
                padding: 20,
                fontSize: 40,
            }}>
            <View style={{}}/>
            <Text>Header</Text>
            <Text>{formatTime(time)}</Text>
        </View>
    );

}

export default Header;
