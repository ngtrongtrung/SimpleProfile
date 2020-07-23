import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

class App extends Component {
  searchFacebook = () => {
    const FACEBOOK_ID = '100006456419951';
    const FACEBOOK_USER_APP = 'fb://profile/?' + FACEBOOK_ID;
    const FACEBOOK_USER_BROWSER = 'https://fb.com/?' + FACEBOOK_ID;
    Linking.canOpenURL(FACEBOOK_USER_APP)
      .then((appSupported) => {
        if (appSupported) {
          console.log('Can connect Facebook App');
          return Linking.openURL(FACEBOOK_USER_APP);
        } else {
          console.log("Can't connect Facebook App");
          return Linking.canOpenURL(FACEBOOK_USER_BROWSER).then(
            (webSupported) => {
              if (webSupported) {
                console.log('Can connect web');
                return Linking.openURL(FACEBOOK_USER_BROWSER);
              }
              return null;
            },
          );
        }
      })
      .catch((err) => console.log('An error', err));
  };

  sendGmail = () => {
    const EMAIL_ADDRESS = 'trung.nguyen.trong2855@gmail.com';
    const URL_SEND_EMAIL = `mailto:${EMAIL_ADDRESS}`;
    Linking.canOpenURL(URL_SEND_EMAIL)
      .then((supported) => {
        console.log('Can connect Gmail App');
        return Linking.openURL(URL_SEND_EMAIL);
      })
      .catch((err) => console.log('An error', err));
  };
  searchGithub = () => {
    const GITHUB_ACCOUNT = 'ngtrongtrung';
    const GITHUB_ADDRESS = `https://github.com/${GITHUB_ACCOUNT}`;
    Linking.canOpenURL(GITHUB_ADDRESS)
      .then((supported) => {
        console.log('Can connect Github page');
        return Linking.openURL(GITHUB_ADDRESS);
      })
      .catch((err) => console.log('An error', err));
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={true}
        />
        <View style={styles.title}>
          <Image source={require('./img/avatar.png')} style={styles.avatar} />
          <Text style={styles.name}>Trọng Trung</Text>
        </View>
        <View style={styles.iconContact}>
          <TouchableOpacity onPress={() => this.searchFacebook()}>
            <Image
              source={require('./img/facebook.png')}
              style={styles.iconCustom}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.sendGmail()}>
            <Image
              source={require('./img/gmail.png')}
              style={styles.iconCustom}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchGithub()}>
            <Image
              source={require('./img/github.png')}
              style={styles.iconCustom}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
  },
  iconContact: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconCustom: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
});
export default App;
