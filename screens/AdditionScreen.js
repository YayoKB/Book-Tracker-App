import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';
import BookContext from '../context/BookContext';

var total = 0;
var avg = 0;
var nBooks = 0;

export function AdditionScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState(''); //first genre version
  const [selectedGenre, setSelectedGenre] = useState('scifi');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState(0);
  const {
    bookData,
    bookCount,
    setBookData,
    bookNumbers,
    increaseGenreCount,
    updateBooks,
  } = useContext(BookContext);

  function AddBookButton() {
    return (
      <TouchableOpacity
        onPress={() => {
          const parsedPages = Math.trunc(parseInt(pages, 10)); //create a pages variable that is (hopefully) an integer with any decimal points removed
          if (title == '' || author == '' || year == '' || pages == '') {
            //if any of the input fields are empty
            alert("Please fill in all of the book's details.");
          } else if (isNaN(parsedPages)) {
            //if the pages is not a number
            alert('Please enter a whole number for the number of pages.');
          } else if (parsedPages < 1) {
            //if the number of pages are below 1
            alert(
              'Please enter a number greater than 0 for the number of pages.',
            );
          } else {
            console.log('');
            console.log('-------- ADDING A BOOK ---------');
            console.log('bookCount before:', bookCount);
            nBooks++;
            total = total + parsedPages;
            avg = (total / nBooks).toFixed(1);
            console.log('About to increase genre count.');
            console.log('bookNumbers before increase:');
            console.log(bookNumbers);
            increaseGenreCount(selectedGenre);
            console.log('Genre count increased! Genre count after:');
            console.log(bookNumbers);
            console.log('');

            console.log('About to update bookData.');
            console.log('bookData before update:');
            console.log(bookData);
            setBookData([
              ...updateBooks(title, author, selectedGenre, year, parsedPages),
            ]);
            console.log('bookData updated! bookData after:');
            console.log(bookData);
            console.log('');

            console.log('bookCount after:', bookCount);

            /*Navigate to Home screen with below params */
            navigation.navigate('Home', {
              bookTitle: title,
              bookAuthor: author,
              bookGenre: selectedGenre,
              bookYear: year,
              bookPages: parsedPages,
              totalPages: total,
              avgPages: avg,
            });
            setTitle('');
            setAuthor('');
            setSelectedGenre('scifi');
            setGenre('');
            setYear('');
            setPages('');

            console.log('---------- BOOK ADDED ----------');
            console.log('');
          }
        }}>
        <View style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>ADD BOOK</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView style={{minHeight: '100%', backgroundColor: '#202020'}}>
        <View style={globalStyles.wrapper}>
          <Text style={globalStyles.title}>Add a Book</Text>

          <Icon name="book-plus" style={globalStyles.icon} />

          <View style={globalStyles.addInputView}>
            <TextInput
              placeholder="Book Title..."
              placeholderTextColor={'#757575'}
              style={globalStyles.addInput}
              value={title}
              onChangeText={newText => setTitle(newText)}
            />
            <TextInput
              placeholder="Book Author..."
              placeholderTextColor={'#757575'}
              style={globalStyles.addInput}
              value={author}
              onChangeText={newText => setAuthor(newText)}
            />
            <View style={globalStyles.pickerView}>
              <Picker
                mode="dialog"
                dropdownIconColor={'#202020'}
                prompt="Please select a genre for the book..."
                style={globalStyles.pickerStyle}
                itemStyle={globalStyles.pickerItem}
                selectedValue={selectedGenre}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGenre(itemValue)
                }>
                <Picker.Item
                  label="Science Fiction"
                  value="scifi"
                  style={globalStyles.pickerItem}
                />
                <Picker.Item
                  label="Fantasy"
                  value="fantasy"
                  style={globalStyles.pickerItem}
                />
                <Picker.Item
                  label="Romance"
                  value="romance"
                  style={globalStyles.pickerItem}
                />
                <Picker.Item
                  label="Adventure"
                  value="adventure"
                  style={globalStyles.pickerItem}
                />
                <Picker.Item
                  label="Mystery"
                  value="mystery"
                  style={globalStyles.pickerItem}
                />
                <Picker.Item
                  label="Horror"
                  value="horror"
                  style={globalStyles.pickerItem}
                />
                <Picker.Item
                  label="Thriller"
                  value="thriller"
                  style={globalStyles.pickerItem}
                />
                <Picker.Item
                  label="History"
                  value="history"
                  style={globalStyles.pickerItem}
                />
                <Picker.Item
                  label="Biography"
                  value="biography"
                  style={globalStyles.pickerItem}
                />
              </Picker>
            </View>
            <TextInput
              placeholder="Published Year..."
              placeholderTextColor={'#757575'}
              style={globalStyles.addInput}
              value={year}
              onChangeText={newText => setYear(newText)}
            />
            <TextInput
              placeholder="Number of Pages..."
              keyboardType="numeric"
              placeholderTextColor={'#757575'}
              style={globalStyles.addInput}
              value={pages}
              onChangeText={newText => setPages(newText)}
            />

            <AddBookButton />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
