import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Button,
} from 'react-native';
import Header from '../component/Header';
import {globalStyles} from '../global/globalStyles';
import Card from './../shared/card';
import {AddToDoFormik} from './AddToDoFormik'
import {v4 as uuidv4} from 'uuid';


const Home = ({navigation}) => {
  const [modalShow, setModalShow] = useState(false);
  const [persons, setPersons] = useState([
    {
      key: '1',
      name: 'tom',
      rating: 3,
      body: 'rest 123',
    },
    {
      key: '2',
      name: 'Gnom',
      rating: 1,
      body: 'rest 1222',
    },
    {
      key: '3',
      name: 'Renu',
      rating: 2,
      body: 'rest 335',
    },
    {
      key: '4',
      name: 'marek',
      rating: 3,
      body: 'rest 3',
    },
    {
      key: '5',
      name: 'Rangers',
      rating: 1,
      body: '1222',
    },
    {
      key: '6',
      name: 'Koren',
      rating: 2,
      body: '335',
    },
    {
      key: '7',
      name: 'Lesonser',
      rating: 3,
      body: 'aaqw 3',
    },
    {
      key: '8',
      name: 'Teru',
      rating: 4,
      body: 'rest 2222',
    },
    {
      key: '9',
      name: 'Naro',
      rating: 2,
      body: 'pest 335',
    },
    {
      key: '10',
      name: 'Werun',
      rating: 3,
      body: 'kalo 123',
    },
    {
      key: '11',
      name: 'Perun',
      rating: 1,
      body: 'klaso',
    },
    {
      key: '12',
      name: 'Kelon',
      rating: 3,
      body: 'werson 1241',
    },
    {
      key: '13',
      name: 'Aseron',
      rating: 2,
      body: 'lesson 1241',
    },
    {
      key: '14',
      name: 'Perun',
      rating: 3,
      body: ' 1111',
    },
    {
      key: '15',
      name: 'Ales',
      rating: 4,
      body: 'werson ',
    },
    {
      key: '16',
      name: 'Endered',
      rating: 5,
      body: 'Locha ',
    },
  ]);

  const addPersons = (itemPerson)=>{
    itemPerson.key = uuidv4();
    setPersons([itemPerson,...persons]);
   setModalShow(false);
  } 
  return (
    <View style={globalStyles.containerGlobal}>
      <Modal visible={modalShow} animationType="slide">
      <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      >
        <View>
          <AddToDoFormik setModalShow={setModalShow} addPersons={addPersons}/>
          <Button title="Close modal" onPress={() => setModalShow(false)} />
        </View>
       </TouchableWithoutFeedback>
      </Modal>
      <Button title="Show modal" onPress={() => setModalShow(true)} />
      <FlatList
        data={persons}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Todos', item)}>
            <Card>
              <Text style={globalStyles.listGlobal}>{item.name}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
