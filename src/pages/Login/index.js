import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

import colors from '../../styles/colors';
import styles from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveLogin, setSaveLogin] = useState(false);

  return (
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
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          value={password}
          onChangeText={value => setPassword(value)}
          placeholder="Senha"
          placeholderTextColor={colors.gray}
          style={styles.input}
          keyboardType="visible-password"
        />
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
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{marginBottom: 20}}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {color: colors.black}]}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={styles.separation}>
          <View style={styles.separationLine} />
          <Text style={styles.separationText}>ou</Text>
          <View style={styles.separationLine} />
        </View>
        <TouchableOpacity
          style={styles.buttonLoginWithGoogle}
          onPress={() => {}}
        >
          <Image
            source={require('../../assets/google-logo.png')}
            style={styles.googleIconButton}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.buttonText, {color: colors.white}]}>Entrar com o google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}