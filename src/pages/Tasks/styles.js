import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.coral,
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    backgroundColor: colors.black,
    marginBottom: 20
  },
  logOutContainer: {
    backgroundColor: colors.coral,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  taskEdit: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  editText: {
    fontFamily: fonts.balsamiqBold,
    color: colors.red,
    marginRight: 5,
    fontSize: 15,
    lineHeight: 18
  },
  newTask: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: colors.coral,
    paddingBottom: 3,
    fontFamily: fonts.balsamiqRegular,
    color: colors.white,
  },
  buttonAdd: {
    padding: 10,
    backgroundColor: colors.coral,
    marginLeft: 10,
    borderRadius: 10
  },
  main: {
    flex: 1,
    paddingHorizontal: 20
  }
})

export default styles;