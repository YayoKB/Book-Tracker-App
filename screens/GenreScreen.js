import React, {useContext, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../styles/globalStyles';
import BookContext from '../context/BookContext';

export const GenreScreen = () => {
  const {bookNumbers} = useContext(BookContext);

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
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nScifi}
                </Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Fantasy</Text>
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nFantasy}
                </Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Romance</Text>
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nRomance}
                </Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Adventure</Text>
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nAdventure}
                </Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Mystery</Text>
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nMystery}
                </Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Horror</Text>
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nHorror}
                </Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Thriller</Text>
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nThriller}
                </Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>History</Text>
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nHistory}
                </Text>
              </View>

              <View style={globalStyles.genreGroupView}>
                <Text style={globalStyles.genreType}>Biography</Text>
                <Text style={globalStyles.genreNumber}>
                  {bookNumbers.nBiography}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
