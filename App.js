import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Button
} from 'react-native';

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import List from "./src/components/List";


const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <List/>
            <Footer/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    scrollView: {
        marginHorizontal: 20,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7fffd4',
        padding: 10,
    },

    sectionlist: {
        alignItems: 'center',
        backgroundColor: '#7fffd4',
        padding: 10,
    },

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },

    item: {
        backgroundColor: '#7fffd4',
        padding: 20,
        marginVertical: 8,
        borderRadius: 6,
    },

    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 24,
    },
});

export default App;
