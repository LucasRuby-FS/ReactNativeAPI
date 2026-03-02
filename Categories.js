import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Heading from './components/Heading'
import ListContainer from './components/ListContainer';
import styles from './AppStyles';
export default function Categories({navigation}) {
    const [bears, setBears] = useState([]);
    const [newName, setNewName] = useState('');
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('');

    const API_URL = 'https://crudapi-ft5q.onrender.com/api/v1/bears';

    const getBears = async () => {
        try {
          const res = await fetch(API_URL);
          const data = await res.json();
          setBears(data);
        } catch (err) {
          console.error(err);
        }
      };
      const addBear = async () => {
        if (!newName) return;
        try {
          const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName }),
          });
          const data = await res.json();
          setBears(prev => [...prev, data]);
          setNewName('');
        } catch (err) {
          console.error(err);
        }
      };
      const updateBear = async () => {
        if (!editName || !editId) return;
        try {
          const res = await fetch(`${API_URL}/${editId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: editName }),
          });
          const data = await res.json();
          setBears(prev => prev.map(b => (b._id === data._id ? data : b)));
          setEditId(null);
          setEditName('');
        } catch (err) {
          console.error(err);
        }
      };
      const deleteBear = async (id) => {
        try {
          await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
          setBears(prev => prev.filter(b => b._id !== id));
        } catch (err) {
          console.error(err);
        }
      };
      useEffect(() => {
        getBears();
      }, []);
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>Bear Categories</Text>
      <TextInput
        placeholder="New Bear Name"
        value={newName}
        onChangeText={setNewName}
        style={styles.categoryInput}
      />
      <Button title="Add Bear" onPress={addBear} />

      {editId && (
        <View style={styles.editCategoryContainer}>
          <TextInput
            placeholder="Edit Bear Name"
            value={editName}
            onChangeText={setEditName}
            style={styles.categoryInput}
          />
          <Button title="Update Bear" onPress={updateBear} />
        </View>
      )}
<FlatList
        data={bears}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryItemText}>{item.name}</Text>
            <Button
              title="Edit"
              onPress={() => {
                setEditId(item._id);
                setEditName(item.name);
              }}
            />
            <Button
              title="Delete"
              onPress={() => deleteBear(item._id)}
            />
                        <Button
              title="Details"
              onPress={() => navigation.navigate('Details', { bear: item })}
            />
          </View>
        )}
      />
    </View>
  );
}
