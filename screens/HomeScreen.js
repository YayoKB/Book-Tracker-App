import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {globalStyles} from '../styles/globalStyles';

// import {Book} from '../books';

export function HomeScreen({route, navigation}) {
  //take params from Addition Screen, and assign values if they arrive as empty (i.e. when starting app and no books have been added)
  const {
    bookTitle,
    bookAuthor,
    bookGenre,
    bookYear,
    bookPages,
    totalPages,
    avgPages,
  } = route?.params || {
    bookTitle: 'None! Try adding a book :)',
    bookAuthor: 'No Author',
    bookGenre: 'No Genre',
    bookYear: 'No Year',
    bookPages: 'No',
    totalPages: 0,
    avgPages: 0,
  };

  let capitalisedGenre = '';

  switch (bookGenre) {
    case 'scifi':
      capitalisedGenre = 'Science Fiction';
      break;

    case 'fantasy':
      capitalisedGenre = 'Fantasy';
      break;

    case 'romance':
      capitalisedGenre = 'Romance';
      break;

    case 'adventure':
      capitalisedGenre = 'Adventure';
      break;

    case 'mystery':
      capitalisedGenre = 'Mystery';
      break;

    case 'horror':
      capitalisedGenre = 'Horror';
      break;

    case 'thriller':
      capitalisedGenre = 'Thriller';
      break;

    case 'history':
      capitalisedGenre = 'History';
      break;

    case 'biography':
      capitalisedGenre = 'Biography';
      break;

    default:
      capitalisedGenre = 'No Genre';
      console.log('No valid genre found');
  }

  var displayType = '';

  if (totalPages == 0) {
    displayType = 'flex';
  } else {
    displayType = 'none';
  }

  function GoToAddButton() {
    return (
      <TouchableOpacity
        style={{display: displayType, width: '66.7%', marginBottom: 40}}
        onPress={() => {
          navigation.navigate('AddBook');
        }}>
        <View style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>GO TO ADD A BOOK</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{minHeight: '100%', backgroundColor: '#202020'}}>
      <ScrollView>
        <View style={globalStyles.wrapper}>
          <Text style={globalStyles.title}>Book Tracker</Text>

          <FontAwesome5 name="book-reader" solid style={globalStyles.icon} />

          <Text style={globalStyles.heading1}>Your Latest Book:</Text>
          <Text style={globalStyles.heading2}>{bookTitle}</Text>
          <Text style={globalStyles.heading3Sub}>By {bookAuthor}</Text>

          <View style={globalStyles.bookDetailsView}>
            <View>
              <FontAwesome5 name="book" style={globalStyles.latestBookIcon} />
            </View>

            <View style={globalStyles.bookDetailsItemView}>
              <Text style={globalStyles.bookDetailsItem}>
                {capitalisedGenre}
              </Text>
              <Text style={globalStyles.bookDetailsItem}>{bookYear}</Text>
              <Text style={globalStyles.bookDetailsItem}>
                {bookPages} Pages
              </Text>
            </View>
          </View>
          <Text style={globalStyles.heading2}>Your Statistics:</Text>
          <View style={globalStyles.statsView}>
            <View>
              <Text style={globalStyles.statsLabel}>Total Pages Read:</Text>
              <Text style={globalStyles.statsLabel}>Average Pages Read:</Text>
            </View>
            <View>
              <Text style={globalStyles.statsItem}>{totalPages}</Text>
              <Text style={globalStyles.statsItem}>{avgPages}</Text>
            </View>
          </View>
          <GoToAddButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
