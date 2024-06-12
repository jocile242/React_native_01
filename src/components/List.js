import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState} from "react";
import {
    Button,
    SafeAreaView,
    SectionList, StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import {NavigationContainer} from '@react-navigation/native';


const List = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([{title: 'Tâches', data: []}]);

    useEffect(() => {
        // Fetch data from AsyncStorage
        const fetchTasks = async () => {
            try {
                const storedTasks = await AsyncStorage.getItem('tasks');
                if (storedTasks !== null) {
                    setTasks([{title: 'Tâches', data: JSON.parse(storedTasks)}]);
                }
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };

        fetchTasks();
    }, []);

    // Ajouter tâches
    const addTask = async () => {
        // Add a new task and save to AsyncStorage
        try {
            const updatedTasks = [...tasks[0].data, task];
            setTasks([{title: 'Tâches', data: updatedTasks}]);
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setTask('');
        } catch (error) {
            console.error('Error adding task', error);
        }
    };


    // Supprimer tâches
    const deleteTask = async (index) => {
        try {
            const updatedTasks = tasks[0].data.filter((_, i) => i !== index);
            setTasks([{title: 'Tâches', data: updatedTasks}]);
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        } catch (error) {
            console.error('Erreur lors de la suppression de la tâche', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Ajouter"
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <Button
                    style={styles.button}
                    title="Ajouter"
                    onPress={addTask} color={"#7fffd4"}
                />
                <SectionList
                    style={styles.sectionlist}
                    sections={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View style={styles.item}>
                            <Text>{item}</Text>
                            <Button
                                title="Supprimer"
                                onPress={() => deleteTask(index)}
                                color="#00ff7f"
                            />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dafff1',
        padding: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: '#7fffd4',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: '#B06CB0',
        backgroundColor: '#ffffff',
    },

    scrollView: {
        marginHorizontal: 20,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7fffd4',
        padding: 10,
    },

    list: {
        alignItems: 'center',
        backgroundColor: '#7fffd4',
        padding: 10,
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
        color: '#340834',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default List;