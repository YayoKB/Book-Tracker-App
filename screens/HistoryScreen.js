import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, FlatList} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {globalStyles} from '../styles/globalStyles';
import BookData from '../data/BookData.json';

export const HistoryScreen = () => {
  const renderItem = ({item}) => {
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

  const [bookCount, setBookCount] = useState(BookData.length);
  const [books, setBooks] = useState([...BookData]);

  const DisplayList = () => {
    if (BookData[BookData.length - 1].bookID === 0) {
      console.log('Book count empty (expected 1):', bookCount);
      return <Header />;
    } else {
      console.log('Book Count:', bookCount);
      return (
        <FlatList
          data={BookData.slice(-3, bookCount)}
          extraData={books}
          renderItem={renderItem}
          keyExtractor={item => item.bookID}
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
