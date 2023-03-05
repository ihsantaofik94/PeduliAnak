import React, { Component } from 'react';
import { View, StatusBar, ScrollView, Linking } from 'react-native';
import { Title, Paragraph, Divider, Button, Appbar, Subheading } from 'react-native-paper';
import { version } from './package.json';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Appbar.Header statusBarHeight={0}> */}
          {/* <Appbar.BackAction onPress={()=>this.props.navigation.goBack()} /> */}
          {/* <Appbar.Content title="Tentang Aplikasi Ini" /> */}
        {/* </Appbar.Header> */}
        <ScrollView style={{ backgroundColor: 'white', padding: 20}}>
          <Title>Waroong v{ version }</Title>
          
          <Subheading style={{marginTop: 10, fontWeight: 'bold'}}>Hubungi Kami</Subheading>
          <Paragraph>Jika ada pertanyaan, kerja sama, ataupun hal lainnya, silahkan hubungi kami dengan klik tombol di bawah ini</Paragraph>
          <Button style={{marginTop: 50, marginBottom: 50}} mode="contained" onPress={() => Linking.openURL('mailto:cs.untuk.negeri@gmail.com') } title="cs.untuk.negeri@gmail.com">Hubungi Developer</Button>
        </ScrollView>
      </View>
    );
  }
}
