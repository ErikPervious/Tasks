import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.coral
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    backgroundColor: colors.black,
  },
  imageHeader: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  titleHeader: {
    color: colors.coral,
    marginTop: 5,
    fontSize: 30,
    fontFamily: fonts.balsamiqRegular
  },
  main: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.coral,
  },
  inputEmail: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: colors.black,
    borderRadius: 8,
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.balsamiqRegular
  },
  containerInputPassword: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: colors.black,
    borderRadius: 8,
  },
  inputPassword: {
    flex: 1,
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.balsamiqRegular
  },
  saveLogin: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
    marginBottom: 10
  },
  textSaveLogin: {
    fontSize: 18,
    fontFamily: fonts.balsamiqRegular,
    color: colors.black
  },
  button: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: colors.black,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: colors.white,
    fontFamily: fonts.balsamiqBold
  },
})

export default styles;