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
    paddingVertical: 50,
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
  input: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: colors.black,
    fontSize: 18,
    borderRadius: 8,
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
  separation: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: 20
  },
  separationLine: {
    width: '40%',
    height: 1,
    backgroundColor: colors.black_gray
  },
  separationText: {
    color: colors.black_gray,
    fontFamily: fonts.balsamiqBold,
    fontSize: 30,
    lineHeight: 30
  },
  buttonLoginWithGoogle: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: colors.black,
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  googleIconButton: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 20
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export default styles;