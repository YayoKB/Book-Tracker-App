import React, {useState} from 'react';
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
import BookData from '../data/BookData.json';
import BookNumbers from '../data/BookNumbers.json';
import updateBooks from '../functions/updateBooks';

var total = 0;
var avg = 0;
var nBooks = 0;

function checkAndAddGenre(genreToAdd) {
  //changes the raw genre value from the picker to a readable formatted value for display, then increases the number of books of that genre in BookNumbers.json
  switch (genreToAdd) {
    case 'scifi':
      BookNumbers.nScifi++;
      break;

    case 'fantasy':
      BookNumbers.nFantasy++;
      break;

    case 'romance':
      BookNumbers.nFantasy++;
      break;

    case 'adventure':
      BookNumbers.nAdventure++;
      break;

    case 'mystery':
      BookNumbers.nMystery++;
      break;

    case 'horror':
      BookNumbers.nHorror++;
      break;

    case 'thriller':
      BookNumbers.nThriller++;
      break;

    case 'history':
      BookNumbers.nHistory++;
      break;

    case 'biography':
      BookNumbers.nBiography++;
      break;

    default:
      console.log('No valid genre added');
  }
}

export function AdditionScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState(''); //first genre version
  const [selectedGenre, setSelectedGenre] = useState('scifi');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState(0);
  const [books, setBooks] = useState(...[BookData]);

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
            nBooks++;
            total = total + parsedPages;
            avg = (total / nBooks).toFixed(1);

            // BookData.push({
            //   bookID: BookData.length + 1,
            //   title: title,
            //   author: author,
            //   genre: selectedGenre,
            //   year: year,
            //   pages: parsedPages,
            // });

            setBooks([
              ...updateBooks(title, author, selectedGenre, year, parsedPages),
            ]);

            checkAndAddGenre(selectedGenre);

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

            console.log('Number of books within BookData:', BookData.length);
            console.log(books);
            console.log(BookData);
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
