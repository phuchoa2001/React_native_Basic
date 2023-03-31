import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Text, View
  , Keyboard
  , TextInput
  , ScrollView
  , TouchableOpacity
  , FlatList
  , SafeAreaView
} from 'react-native';

import styles from './styles';

export default function TodoList() {
  const [listTask, setListTask] = useState([]);
  const [value, setValue] = useState("");
  const handleAdd = () => {
    setListTask(prev => ([...prev, value]))
    setValue("")
    Keyboard.dismiss();
  }
  const handleRemove = (index) => {
    const listNew = [...listTask];
    listNew.splice(index, 1);
    setListTask(listNew);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>ToDo List</Text>
          <View style={styles.action}>
            <View style={styles.boxInput}>
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={(value) => setValue(value)}
                autoFocus={true}
                placeholder={'Ghi công việc cần thêm...'}
              />
            </View>
            <View>
              <TouchableOpacity onPress={handleAdd}>
                <Text style={styles.add}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <ScrollView>
            <FlatList
              data={listTask}
              renderItem={({ item, index }) =>
                <View style={styles.item}>
                  <Text style={styles.itemTitle}>{item}</Text>
                  <TouchableOpacity onPress={() => handleRemove(index)}>
                    <Text style={styles.ItemAction}>Xóa</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

