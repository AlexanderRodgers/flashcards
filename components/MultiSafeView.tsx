import * as React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

const MultiSafeView: React.FC = ({ children }): JSX.Element => {
    return (
        <SafeAreaView style={styles.androidSafeArea}>
          {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default MultiSafeView;
