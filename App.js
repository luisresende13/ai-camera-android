// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    drawerRef.openDrawer();
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    drawerRef.closeDrawer();
    setDrawerOpen(false);
  };

  let drawerRef;

  return (
    <DrawerLayoutAndroid
      ref={ref => (drawerRef = ref)}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => (
        <View style={styles.drawerContainer}>
          <Text style={styles.drawerItem}>Menu Item 1</Text>
          <Text style={styles.drawerItem}>Menu Item 2</Text>
          <Text style={styles.drawerItem}>Menu Item 3</Text>
        </View>
      )}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text>Open Menu</Text>
        </TouchableOpacity>
        <Text>Open up App.js to start working on your app! TEST</Text>
        <StatusBar style="auto" />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});
