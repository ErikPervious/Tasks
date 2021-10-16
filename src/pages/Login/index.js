import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../services/firebase';

import colors from '../../styles/colors';
import styles from './styles';

export function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveLogin, setSaveLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);

  async function saveToken() {
    if(saveLogin === false) {
      return;
    }

    if(email === '' || password === '') {
      return;
    }

    let tokenStringify = JSON.stringify({email, password});
    try {
      AsyncStorage.setItem('@token', tokenStringify);
    } catch(error) {
      return;
    };
  }

  async function createAccount() {
    if(email === '' || password === '') {
      return;
    }
    setLoadingCreate(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(value => {
      saveToken();
      navigation.navigate('Tasks', {user: value.user.uid});
      setEmail('');
      setPassword('');
      setLoadingCreate(false);
    })
    .catch(error => {
      switch (error.message) {
        case 'The email address is already in use by another account.':
          alert('Email já cadastrado.');
          break;
        case 'The email address is badly formatted.':
          alert('Digite um email válido.\nExemplo: nome@gmail.com.');
          break;
        case 'Password should be at least 6 characters':
          alert('A senha deve ter no mínimo 6 caracteres.');
          break;
      };
      setLoadingCreate(false);
      return;
    });
  };

  async function login() {
    if(email === '' || password === '') {
      return;
    };
    setLoadingLogin(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(value => {
      saveToken();
      navigation.navigate('Tasks', {user: value.user.uid});
      setEmail('');
      setPassword('');
      setLoadingLogin(false);
    })
    .catch(error => {
      console.log(error);
      switch (error.message) {
        case 'The password is invalid or the user does not have a password.':
          alert('A senha está incorreta ou o email não possui cadastro.');
          break;
        case 'There is no user record corresponding to this identifier. The user may have been deleted.':
          alert('O usuário não existe ou a conta foi encerrada.');
          break;
        case 'The email address is badly formatted.':
          alert('Digite um email válido.\nExemplo: nome@gmail.com.');
          break;
      };
      setLoadingLogin(false);
      return;
    });
  };

  useEffect(() => {
    async function getToken() {
      try {
        const response = await AsyncStorage.getItem('@token');
        const tokenValue = JSON.parse(response);
        if(tokenValue !== null) {
          setSaveLogin(true);
          let {email, password} = tokenValue;
          await firebase.auth().signInWithEmailAndPassword(email, password)
          .then(value => {
            navigation.navigate('Tasks', {user: value.user.uid});
          })
          .catch(error => {
            alert(error);
            return;
          });
        };
      } catch(e) {
        return;
      };
    };
    getToken();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: colors.coral}}
    >
      <View style={styles.container}>
        <StatusBar translucent={false} backgroundColor={colors.black} />
        <View style={styles.header}>
          <Image
            source={require('../../../assets/icon.png')}
            style={styles.imageHeader}
          />
          <Text style={styles.titleHeader}>Tasks</Text>
        </View>
        <View style={styles.main}>
          <TextInput
            value={email}
            onChangeText={value => setEmail(value)}
            placeholder="Email"
            placeholderTextColor={colors.gray}
            style={styles.inputEmail}
            keyboardType="email-address"
          />
          <View style={styles.containerInputPassword}>
            <TextInput
              value={password}
              onChangeText={value => setPassword(value)}
              placeholder="Senha"
              placeholderTextColor={colors.gray}
              style={styles.inputPassword}
              autoCorrect={false}
              secureTextEntry={showPassword}
            />
            <View 
              style={{
                justifyContent: 'center',
                alignItems: 'center', 
                marginHorizontal: 10
              }}
            >
              <TouchableOpacity 
                onPress={() => {
                  if(showPassword) {
                    setShowPassword(false);
                  } else {
                    setShowPassword(true);
                  }
                }}
              >
                {!showPassword
                  ? <Feather name="eye-off" size={20} color={colors.coral} />
                  : <Feather name="eye" size={20} color={colors.coral} />
                } 
              </TouchableOpacity>
              
            </View>
          </View>
          <View style={styles.saveLogin}>
            <Checkbox
              status={saveLogin ? 'checked' : 'unchecked'}
              onPress={() => {
                setSaveLogin(!saveLogin);
              }}
              uncheckedColor={colors.black}
              color={colors.black}
            />
            <TouchableWithoutFeedback 
              onPress={() => { setSaveLogin( saveLogin === true ? false : true )}}
            >
              <Text style={styles.textSaveLogin}>Lembrar login da próxima vez</Text>
            </TouchableWithoutFeedback>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => login()}
          >
            { loadingLogin ?
              <ActivityIndicator size={25} color={colors.white} />
              :
              <Text style={styles.buttonText}>Entrar</Text>
            }
          </TouchableOpacity>
          <TouchableOpacity
          style={{marginBottom: 20}}
            onPress={() => createAccount()}
          >
            { loadingCreate ? 
              <ActivityIndicator size={25} color={colors.black} />
              :
              <Text style={[styles.buttonText, {color: colors.black}]}>Criar uma conta!</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}