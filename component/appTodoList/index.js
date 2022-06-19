/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 6/17/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import uuid from 'react-native-uuid';
import {Text, View, FlatList, Alert} from 'react-native';

// component
import ItemTodos from './itemTodo';
import InputTodos from './inputTodo';

// styles
import styles from './styles/stylesAppTodoList';

function Index() {
  const [listTodos, setListTodos] = React.useState([]);

  const onAddItemTodo = text => {
    const data = {
      id: uuid.v4(),
      titles: text,
    };
    setListTodos([...listTodos, data]);
  };

  const onDeleteItemTodo = itemTodo => {
    Alert.alert('Bạn có muốn xóa công việc này không?', `${itemTodo?.titles}`, [
      {text: 'OK', onPress: () => deleteItem(itemTodo?.id)},
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const deleteItem = id => {
    const listTodosNew = listTodos.filter(item => item.id !== id);
    setListTodos(listTodosNew);
  };

  return (
    <View style={styles.wrapperTodo}>
      <Text style={styles.wrapTitle}>Todo List</Text>
      <FlatList
        data={listTodos}
        renderItem={({item, index}) => (
          <ItemTodos
            itemTodos={item}
            number={index + 1}
            onDeleteItemTodo={onDeleteItemTodo}
          />
        )}
      />
      <InputTodos onAddItemTodo={onAddItemTodo} />
    </View>
  );
}

export default Index;
