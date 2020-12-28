import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  checkBox: {
    width: 18,
    height: 18,
    marginRight: 20,
  },
  checkBoxContainer: {
    backgroundColor:"transparent",
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightElementContainer: {
    alignItems: 'flex-end',
  },
});
