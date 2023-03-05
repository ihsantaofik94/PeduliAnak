import React, { Component } from 'react';
import { View, StatusBar, ScrollView, Linking } from 'react-native';
import { Title, Paragraph, Divider, Button, Appbar, Subheading } from 'react-native-paper';
import { version } from './package.json';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Appbar.Header statusBarHeight={0}> */}
          {/* <Appbar.BackAction onPress={()=>this.props.navigation.goBack()} /> */}
          {/* <Appbar.Content title="Tentang Aplikasi Ini" /> */}
        {/* </Appbar.Header> */}
        <ScrollView style={{ backgroundColor: 'white', padding: 20}}>
          <Title>Waroong v{ version }</Title>
          <Divider />
          <Paragraph>Waroong adalah sebuah aplikasi yang dibuat untuk memudahkan aktifitas para pemilik warung kecil seperti warung kelontong ataupun warung-warung lainnya</Paragraph>
          <Subheading style={{marginTop: 10, fontWeight: 'bold'}}>Apa saja kegunaan aplikasi waroong?</Subheading>
          <Divider />
          <Paragraph>Saat ini aplikasi waroong sudah memiliki cukup banyak fitur/kegunaan seperti:</Paragraph>

          <Paragraph style={{marginTop: 10, fontWeight: 'bold'}}>Daftar Barang</Paragraph>
          <Divider />
          <Paragraph>Berguna untuk mencatat semua barang lengkap dengan harganya, sehingga anda dan penjaga warung lainnya tidak akan kesulitan mengingat harga dari sebuah barang.</Paragraph>

          <Paragraph style={{marginTop: 10, fontWeight: 'bold'}}>Hitung Belanjaan</Paragraph>
          <Divider />
          <Paragraph>Berguna untuk menghitung total belanjaan. Selain itu ketika anda memasukkan total pembayaran dari pembeli maka jumlah kembalian akan dihitung dan ditampilkan secara otomatis</Paragraph>

          <Paragraph style={{marginTop: 10, fontWeight: 'bold'}}>Download Struk</Paragraph>
          <Divider />
          <Paragraph>Struk belanjaan bisa di download dan disimpan ke gallery hp anda, sehingga anda bisa mengirimkannya ke pembeli atau dijadikan arsip transaksi warung anda.</Paragraph>

          <Paragraph style={{marginTop: 10, fontWeight: 'bold'}}>Laporan</Paragraph>
          <Divider />
          <Paragraph>Anda bisa melihat laporan yang terdiri dari total penjualan, total modal, dan total laba/rugi. Selain itu anda juga bisa melihat daftar barang yang terjual pada rentang waktu tertentu.</Paragraph>

          <Subheading style={{marginTop: 10, fontWeight: 'bold'}}>Hubungi Kami</Subheading>
          <Paragraph>Jika ada pertanyaan, kerja sama, ataupun hal lainnya, silahkan hubungi kami dengan klik tombol di bawah ini</Paragraph>
          <Button style={{marginTop: 50, marginBottom: 50}} mode="contained" onPress={() => Linking.openURL('mailto:cs.untuk.negeri@gmail.com') } title="cs.untuk.negeri@gmail.com">Hubungi Developer</Button>
        </ScrollView>
      </View>
    );
  }
}
