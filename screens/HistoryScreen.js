import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {globalStyles} from '../styles/globalStyles';
import BookContext from '../context/BookContext';

export const HistoryScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    //the element to render in the FlatList
    return (
      <View style={globalStyles.latestBookView}>
        <FontAwesome5Icon name="book" style={globalStyles.latestBookIcon} />
        <View style={globalStyles.latestBookDetails}>
          <Text style={globalStyles.historyTitle}>{item.title}</Text>
          <Text style={globalStyles.historyDetails}>
            {item.year}, {item.genre}, {item.pages} Pages
          </Text>
          <Text style={globalStyles.historyAuthor}>{item.author}</Text>
        </View>
      </View>
    );
  };

  const Header = () => {
    return (
      <View>
        <Text style={globalStyles.title}>Book History</Text>

        <FontAwesome5Icon name="history" solid style={globalStyles.icon} />

        <Text style={[globalStyles.heading1, {marginBottom: 35}]}>
          A few of your latest books...
        </Text>
      </View>
    );
  };

  const {bookData, bookCount} = useContext(BookContext);

  const GoToAddButton = () => {
    return (
      <TouchableOpacity
        style={{
          width: '66.7%',
          marginBottom: 40,
          marginTop: 32,
          alignSelf: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddBook');
        }}>
        <View style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>GO TO ADD A BOOK</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const DisplayList = () => {
    if (bookCount == 0) {
      return (
        <View style={{width: '77.7%'}}>
          <Header />
          <Text style={globalStyles.heading3Sub}>
            No books to show, go add some!
          </Text>
          <GoToAddButton />
        </View>
      );
    } else {
      return (
        <FlatList
          data={bookData.slice(-3, bookData.length)} //displays the last 3 books in bookData
          extraData={bookData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{width: '77.7%'}}
          ListHeaderComponent={Header}
        />
      );
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#202020',
        alignItems: 'center',
      }}>
      <DisplayList />
    </SafeAreaView>
  );
};
