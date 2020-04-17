import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import Repository from './components/repository';
import api from './services/api';

export default function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    listRepositories();
  }, []);

  async function listRepositories() {
    const response = await api.get('/repositories');
    setRepositories(response.data);
    console.log(response.data);
  }



  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={item => item.id.toString()}
          renderItem={item => <Repository repo={item.item} />}
        />

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
});
