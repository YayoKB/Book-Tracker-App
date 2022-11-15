# Book-Tracker-App
A book tracking app made for the Mobile App Scripting (MAST) module.

## Important files
<details>
<summary><b>App.js</b></summary>
Holds the tab navigators and the stack; connects the screens together.
</details>

### Screens
<details>
<summary><b>AdditionScreen.js</b></summary>
Where the user adds a book. The book gets added to the BookData.json object array, through the updateBooks() function. After adding a book, the user is automatically taken to the Home Screen to view their latest book.
</details>

<details>
<summary><b>HomeScreen.js</b></summary>
Displays the details of the latest book the user has added. If no books have been added, a button is displayed to take the user to the Addition Screen.
</details>

<details>
<summary><b>HistoryScreen.js</b></summary>
Displays the last 3 books the user added and their details. All of the books are imported from BookData.json and displayed using a FlatList.
</details>

<details>
<summary><b>GenreScreen.js</b></summary>
Displays the number of books that the user has added that have a certain genre. The genre count is imported from BookNumbers.json.
</details>

### Data
<details>
<summary><b>BookData.json</b></summary>
A JSON array holding books, where each book is an object with properties such as the unique ID, title, author, genre, year and number of pages. This is updated and added to each time the user adds a book.
</details>

<details>
<summary><b>BookNumbers.json</b></summary>
A JSON object with properties that hold the number of books the user added that have a certain genre. The appropriate property's value is incremented by one whenever the user adds a book of that genre.
</details>

### Functions
<details>
<summary><b>updateBooks.js</b></summary>
A function that takes in the title, author, genre, year and pages of a book and adds (pushes) it to the BookData.json object array. It returns BookData (without the spread operator).
</details>
