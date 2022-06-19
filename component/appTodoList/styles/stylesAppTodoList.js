import {StyleSheet} from 'react-native';
import color from '../../base/color';

const styles = StyleSheet.create({
  wrapperTodo: {
    flex: 1,
    padding: 15,
    backgroundColor: color.background,
  },
  wrapTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.primary,
    marginBottom: 10,
  },
});

export default styles;
