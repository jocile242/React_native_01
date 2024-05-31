import React, {useEffect, useState} from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';
import UseState from "./UseState";


function Header() {
    const [time, setTime] = useState(new Date());

useEffect()
    // SET interval + set time = recuperer la nouvelle date
    // Afficher l'heure

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
            <UseState time={time}/>
        </View>
    );

}

export default Header;
