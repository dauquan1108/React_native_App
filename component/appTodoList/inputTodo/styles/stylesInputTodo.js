import {StyleSheet} from 'react-native';
import color from '../../../base/color';

const styles = StyleSheet.create({
  wrapperInputTodo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTodo: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    borderColor: color.primary,
    fontWeight: 'bold',
  },
  bottomInputTodo: {
    marginLeft: 15,
    borderRadius: 50,
    paddingHorizontal: 15,
    backgroundColor: color.primary,
  },
  iconBottom: {
    fontSize: 40,
    color: color.white,
    fontWeight: 'bold',
  },
});

export default styles;
