import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    ScrollView
} from 'react-native';

const DATA = [

    {
        title: 'Site Maison',
        data: ['SiteA1', 'SiteA2', 'SiteA3'],
    },
    {
        title: 'Site Chantier',
        data: ['SiteB1', 'SiteB2', 'SiteB3'],
    },
    {
        title: 'Site Entreprise',
        data: ['SiteC1', 'SiteC2', 'SiteC3'],
    },
    {
        title: 'Site Mecanique',
        data: ['SiteD1', 'SiteD2', 'SiteD3'],
    },
];

const App = () => (
    <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />

        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    scrollView: {
        marginHorizontal: 20,
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