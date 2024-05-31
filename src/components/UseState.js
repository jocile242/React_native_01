import {useState} from "react";
import {
    Button,
    Text,
    View
} from "react-native"


const UseState = ({time}) => {

    return (
        <View>
            <Text>
                {time.toLocaleTimeString()}
            </Text>
        </View>
    )
}

export default UseState;