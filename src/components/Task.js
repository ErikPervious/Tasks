import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Task({data, handleDelete, handleEdit}) {

  return(
    <View style={styles.container}>
      <View style={styles.containerTask}>
        <View style={styles.containerText}>
          <TouchableWithoutFeedback 
            onPress={() => handleEdit(data)}
          >
            <Text style={styles.text}>{data.name}</Text>
          </TouchableWithoutFeedback>
        </View>
        <TouchableOpacity onPress={() => handleDelete(data.key)}>
          <Feather name="trash-2" size={22} color={colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
  },
  containerTask: {
    width: '100%',
    flexDirection: 'row', 
    backgroundColor: colors.black,
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerText: {
    flex: 1,
    paddingRight: 10
  },
  text: {
    color: colors.white,
    fontFamily: fonts.balsamiqRegular,
    fontSize: 18
  },
  deleteButton: {
    backgroundColor: 'red',
    marginRight: 20
  }
})