// TODO: Remove this file

// import React, {useState} from 'react';
// import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
// import Header from '../component/Header';
// import {globalStyles} from '../global/globalStyles';

// const HomeStack = ({navigation}) => {
//   const [persons, setPersons] = useState([
//     {
//       key: '1',
//       name: 'tom',
//       rating: 3,
//       body: 'rest 123',
//     },
//     {
//       key: '2',
//       name: 'Gnom',
//       rating: 1,
//       body: 'rest 1222',
//     },
//     {
//       key: '3',
//       name: 'Renu',
//       rating: 2,
//       body: 'rest 335',
//     },
//   ]);
//   return (
//     <View>
//       <FlatList
//         data={persons}
//         keyExtractor={persons.key}
//         renderItem={({item}) => (
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('Todos', item);
//             }}>
//             <Text>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default HomeStack;
