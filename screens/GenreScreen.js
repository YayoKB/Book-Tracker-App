import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../styles/globalStyles';
import BookData from '../data/BookData.json';
import BookNumbers from '../data/BookNumbers.json';

export const GenreScreen = () => {
  const [scifiCount, setScifiCount] = useState(BookNumbers.nScifi);
  const [fantasyCount, setFantasyCount] = useState(BookNumbers.nFantasy);
  const [romanceCount, setRomanceCount] = useState(BookNumbers.nRomance);
  const [adventureCount, setAdventureCount] = useState(BookNumbers.nAdventure);
  const [mysteryCount, setMysteryCount] = useState(BookNumbers.nMystery);
  const [horrorCount, setHorrorCount] = useState(BookNumbers.nHorror);
  const [thrillerCount, setThrillerCount] = useState(BookNumbers.nThriller);
  const [historyCount, setHistoryCount] = useState(BookNumbers.nHistory);
  const [biographyCount, setBiographyCount] = useState(BookNumbers.nBiography);

  return (
    <SafeAreaView>
      <ScrollView style={{minHeight: '100%', backgroundColor: '#202020'}}>
        <View style={globalStyles.wrapper}>
          <Text style={globalStyles.title}>Genres</Text>

          <Icon name="bookshelf" style={globalStyles.icon} />

          <View style={globalStyles.generalContainer}>
            <View style={globalStyles.genreHeadings}>
              <Text style={globalStyles.heading2}>Genre</Text>
              <Text style={globalStyles.heading2}>Books Read</Text>
            </View>

            <View style={globalStyles.genresView}>
              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Science Fiction</Text>
                <Text style={globalStyles.genreNumber}>{scifiCount}</Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Fantasy</Text>
                <Text style={globalStyles.genreNumber}>{fantasyCount}</Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Romance</Text>
                <Text style={globalStyles.genreNumber}>{romanceCount}</Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Adventure</Text>
                <Text style={globalStyles.genreNumber}>{adventureCount}</Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Mystery</Text>
                <Text style={globalStyles.genreNumber}>{mysteryCount}</Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Horror</Text>
                <Text style={globalStyles.genreNumber}>{horrorCount}</Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Thriller</Text>
                <Text style={globalStyles.genreNumber}>{thrillerCount}</Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>History</Text>
                <Text style={globalStyles.genreNumber}>{historyCount}</Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Biography</Text>
                <Text style={globalStyles.genreNumber}>{biographyCount}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
