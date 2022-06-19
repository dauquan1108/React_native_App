import {StyleSheet} from 'react-native';

import color from '../../../base/color';

const styles = StyleSheet.create({
  wrapItemTodos: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  itemNumbers: {
    padding: 10,
    borderRadius: 10,
    fontSize: color.fontSizeH1,
    fontWeight: 'bold',
    color: color.white,
  },
  itemTitles: {
    paddingLeft: 5,
    fontSize: color.fontSizeH1,
    fontWeight: 'bold',
    color: color.text,
  },
  itemsEven: {
    backgroundColor: color.primary,
  },
  itemsOdd: {
    backgroundColor: color.green,
  },
});

export default styles;
