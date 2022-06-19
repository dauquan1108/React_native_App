/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 6/19/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

// styles
import styles from './styles/stylesInputTodo';

function Index(props) {
  const {onAddItemTodo} = props;
  const [values, setValues] = React.useState('');

  const onChangeInputTodo = values => {
    const valuesEdit = values.trim();
    setValues(valuesEdit);
  };

  const onAddTodo = () => {
    if (values.length === 0) {
      alert('Vui lòng nhập dữ liệu !');
    } else {
      onAddItemTodo(values);
    }
    setValues('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10}
      style={styles.wrapperInputTodo}>
      <TextInput
        style={styles.inputTodo}
        value={values}
        placeholder="Vui lòng nhập ?"
        onChangeText={onChangeInputTodo}
        onSubmitEditing={onAddTodo}
      />
      <TouchableOpacity style={styles.bottomInputTodo} onPress={onAddTodo}>
        <Text style={styles.iconBottom}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

Index.propTypes = {
  onAddItemTodo: PropTypes.func,
};

Index.defaultProps = {
  onAddItemTodo: () => null,
};

export default Index;
