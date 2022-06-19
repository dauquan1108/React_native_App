/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 6/18/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity} from 'react-native';

// styles
import styles from './styles/stylesItemTodo';

function Index(props) {
  const {itemTodos, number, onDeleteItemTodo} = props;

  const editIndex = number < 10 ? `0${number}` : number;

  const styleBackgroundNumbers =
    number % 2 === 0 ? styles.itemsEven : styles.itemsOdd;

  const onPressItemTodo = () => {
    onDeleteItemTodo(itemTodos);
  };

  return (
    <TouchableOpacity onPress={onPressItemTodo}>
      <View style={styles.wrapItemTodos}>
        <Text style={[styles.itemNumbers, styleBackgroundNumbers]}>
          {editIndex}
        </Text>
        <Text style={styles.itemTitles}>{itemTodos?.titles}</Text>
      </View>
    </TouchableOpacity>
  );
}

Index.propTypes = {
  itemTodos: PropTypes.object,
  number: PropTypes.number,
  onDeleteItemTodo: PropTypes.func,
};

Index.defaultProps = {
  itemTodos: {},
  number: 0,
  onDeleteItemTodo: () => null,
};

export default Index;
