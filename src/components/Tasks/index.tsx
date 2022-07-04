import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import {ITask, useTaskList} from '../../Context/TaskContext';

export const TaskList = () => {
  const {tasks, removeTask} = useTaskList();
  const handleRemoveTasks = (id: string) => {
    Alert.alert('Tem certeza?', 'deseja realmente excluir a tarefa', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
      },
    ]);
  };

  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleRemoveTasks(item.id)}
          style={styles.buttonTask}>
          <Text style={styles.titleTask}> {item.title} </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
