import React from 'react';
import { StyleSheet, View } from 'react-native';

import CacheImage from './CacheImage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CacheImage
          style={styles.image}
          uri="https://www.planwallpaper.com/static/images/maxresdefault_8yZPhSS.jpg"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});
