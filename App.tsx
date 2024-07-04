/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [dogImages, setDogImages] = useState<string[]>([]);

  const fetchDogImages = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
      const data = await response.json();
      setDogImages(data.message);
    } catch (error) {
      console.error('Error fetching dog images:', error);
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View>
          <TouchableOpacity onPress={fetchDogImages}>
            <Text style={styles.sectionTitle}>Click Here</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          {dogImages.map((image, index) => (
            <Image key={index} source={{uri: image}} style={styles.dogImage} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dogImage: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#1E90FF',
  },
});

export default App;
