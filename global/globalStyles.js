import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    padding: 2,
  },
  textGlobal: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Fondamento-Regular',
  },
  // paragraph: {
  //   marginVertical: 8,
  //   lineHeight: 20,
  // },
  listGlobal: {
    flexDirection: 'row',
    margin: 1,
    // marginTop: 10,
    //backgroundColor: '#ffefdb',
    // justifyContent: 'flex-start',
    textTransform: 'uppercase',
  },
  inputView:{
  //margin:5,
  padding:20,
  marginVertical:50,
  },
  inputButton:{
  
  },
  input:{
  borderWidth:1,
  borderColor:'#ddd',
  padding:10,
  marginVertical:10,
  fontSize:18,
  borderRadius: 6
  },
  errorText:{
    color: 'red'
  }
});
