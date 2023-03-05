// import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import SplashScreen from 'react-native-splash-screen'
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
// import { COLOR_PRIMARY, COLOR_ACCENT, COLOR_TEXT } from './src/redux/constants';

// import { Provider as StoreProvider } from "react-redux";
// import store from "./src/redux/store";

// import ProductListScreen from './src/ProductListScreen';
// import CartScreen from './src/CartScreen';
import AboutScreen from './AboutScreen';
import WelcomeScreen from './WelcomeScreen';
// import ReportScreen from './src/ReportScreen';

export const COLOR_PRIMARY = '#4285F4';
export const COLOR_ACCENT = 'yellow';
export const COLOR_TEXT = '#444';

const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR_PRIMARY,
    accent: COLOR_ACCENT,
    text: COLOR_TEXT,
  },
  fonts: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const Drawer = createDrawerNavigator();

// import { openDatabase } from 'react-native-sqlite-storage';
// var db = openDatabase({ name: 'UserDatabase.db' });

export default class App extends Component {
//   constructor() {
    // super();
    // db.transaction(tx => {
    //   tx.executeSql(
    //     "create table if not exists profile (id integer primary key not null, shop_name text, description text);"
    //   );
    //   tx.executeSql(
    //     "create table if not exists products (id integer primary key not null, description text, price int, price_buy int, stock int);"
    //   );
    //   tx.executeSql(
    //     "create table if not exists transactions (id integer primary key not null, no text, discount int, total_item_price_buy int, total_item_price int, cart text, date text);"
    //   );
    //   tx.executeSql(
    //     "create table if not exists transaction_items (id integer primary key not null, description text, price int, price_buy int, product_id int, qty int, date text, transaction_id int);"
    //   );
    // });
//   }
//   componentDidMount() {
//     SplashScreen.hide();
//   }
  customDrawerContent(props) {
    return (
      <React.Fragment>
        {/* <View style={{ alignItems: 'center', backgroundColor: theme.colors.primary }}>
          <Image source={require('./assets/logo_landscape.png')} style={{height: 100, resizeMode: 'contain'}} />
        </View> */}
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </React.Fragment>
    );
  }
  render() {
    return (
    //   <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Welcome" drawerType="back" drawerContent={this.customDrawerContent}>
              {/* <Drawer.Screen 
                name="Home" 
                component={ProductListScreen} 
                options={{ drawerLabel: 'Beranda' }}
              />
              <Drawer.Screen 
                name="Cart" 
                component={CartScreen} 
                options={{ drawerLabel: 'Struk' }}
              />
              <Drawer.Screen 
                name="Report" 
                component={ReportScreen} 
                options={{ drawerLabel: 'Laporan' }}
              /> */}
              <Drawer.Screen 
                name="Welcome" 
                component={WelcomeScreen} 
                options={{ drawerLabel: 'Pengaturan' }}
              />
              <Drawer.Screen 
                name="About" 
                component={AboutScreen} 
                options={{ drawerLabel: 'Tentang Aplikasi Ini' }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </PaperProvider>
    //   </StoreProvider>
    ); 
  }
};
