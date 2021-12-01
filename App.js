import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import MainStackNavigator from './src/navigation';

function App() {
  // const handleClick = () => {
  //   console.log('Clicked');
  // };
  return (
    // <ScrollView>
    //   <Text>Hello World !</Text>
    //   {/* URI */}
    //   {/* <Image
    //     source={{uri: 'http://c.neh.tw/thumb/f/720/comvecteezy420553.jpg'}}
    //     style={{width: 300, height: 300}}
    //   /> */}
    //   {/* LOCAL */}
    //   <Image
    //     source={require('./src/assets/unsri.png')}
    //     style={styles.imageAvatar}
    //   />
    //   {/* STYLING */}
    //   {/* INLINE */}
    //   <Text style={{fontSize: 10}}>Ahmad Zaky</Text>
    //   {/* INTERNAL */}
    //   <Text style={[styles.textLarge, styles.underline]}>Text Large</Text>
    //   <Button title="Click Me" onPress={handleClick} />
    //   <TouchableOpacity>
    //     <Text>TouchableOpacity</Text>
    //   </TouchableOpacity>
    // </ScrollView>
    // <Home />
    <MainStackNavigator />
  );
}

// const styles = StyleSheet.create({
//   imageAvatar: {
//     width: 200,
//     height: 200,
//   },
//   textLarge: {
//     fontSize: 50,
//     backgroundColor: 'blue',
//   },
//   underline: {
//     textDecorationLine: 'underline',
//   },
// });

export default App;
