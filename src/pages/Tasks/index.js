import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  Keyboard,
  LogBox,
  ActivityIndicator
} from 'react-native';
import firebase from '../../services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { Task } from '../../components/Task';

LogBox.ignoreAllLogs()

import styles from './styles';
import colors from '../../styles/colors';
import { NoTasks } from '../../components/NoTasks';

export function Tasks({route, navigation}) {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const {user} = route.params;

  async function addTask() {
    if(newTask === '') {
      return;
    }

    if(key !== '') {
      await firebase.database().ref('tasks').child(user).child(key).update({
        name: newTask
      }).then(() => {
        const taskIndex = tasks.findIndex( item => item.key === key);
        let cloneTasks = tasks;
        cloneTasks[taskIndex].name = newTask;
        setTasks([...cloneTasks]);
        console.log(cloneTasks);
      })
      setKey('');
      setNewTask('');
      Keyboard.dismiss();
      return;
    }

    let tarefas = firebase.database().ref('tasks').child(user);
    let chave = tarefas.push().key;

    tarefas.child(chave).set({
      name: newTask
    })
    .then(() => {
      const data = {
        key: chave,
        name: newTask
      };
      setTasks(oldTasks => [...oldTasks.reverse(), data].reverse());
      setNewTask('');
      Keyboard.dismiss();
    })
    .catch(err => alert('algo deu errado\n'+err));
  };

  async function logOut() {
    AsyncStorage.removeItem('@token');
    firebase.auth().signOut();
    navigation.goBack();
  };

  async function handleDelete(key) {
    await firebase.database().ref('tasks').child(user).child(key).remove()
    .then(() => {
      const filter = tasks.filter(item => item.key !== key);
      setTasks(filter);
    })
  };

  function handleEdit(data) {
    setNewTask(data.name);
    setKey(data.key);
    inputRef.current.focus();
  }

  function cancelEdit() {
    setKey('');
    setNewTask('');
    Keyboard.dismiss();
  }

  useEffect(() => {
    async function getTasks(user) {
      setLoading(true);
      await firebase.database().ref('tasks').child(user).once('value', (snapshot) => {
        setTasks([]);
        snapshot?.forEach((childItem) => {
          let data = { 
            key: childItem.key,
            name: childItem.val().name
          };
          setTasks(oldArray => [...oldArray.reverse(), data].reverse());
        });  
      });
      setLoading(false);
    };
    getTasks(user);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor={colors.black} />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
            style={styles.logOutContainer}
            onPress={() => logOut()}
          >
            <Feather name="log-out" size={20} color={colors.black}/>
          </TouchableOpacity>
          { key !== '' &&
            <TouchableOpacity style={styles.taskEdit} onPress={() => cancelEdit()}>
              <Text style={styles.editText}>Editando tarefa</Text>
              <Feather
                name="x-circle"
                size={20}
                color={colors.red}
              />
            </TouchableOpacity>
          }
        </View>
        <View style={styles.newTask}>
          <TextInput
            value={newTask}
            onChangeText={value => setNewTask(value)}
            style={styles.input}
            placeholder="Nova Tarefa"
            placeholderTextColor={colors.gray}
            ref={inputRef}
          />
          <TouchableOpacity 
            style={styles.buttonAdd}
            onPress={() => addTask()}
          >
            <Feather
              name="plus"
              size={20}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        { !loading ?
          tasks == '' ?
            <NoTasks />
          : 
            <FlatList
              data={tasks}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <Task 
                  data={item}
                  handleDelete={(key) => handleDelete(key)}
                  handleEdit={(data) => handleEdit(data)}
                />
              )}
            />
          : <ActivityIndicator color={colors.black} size={50} />
        }
      </View>
    </View>
  )
}