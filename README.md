<h1 align="center">📚 Book Tracker App 📚</a></h1>

<h1 align="center">Overview</h1>

<div align="center"><img height="600" src="https://user-images.githubusercontent.com/38580104/205488096-006bcb02-ca9e-4fdc-a659-8664fdf56d2e.png"/></div>

## 💼 Project Brief
> Thobeka would like an Android app that would allow her to record and track her favourite books while away-from-home.

# Technical details
## 🖥️ Tech stack used:
- React Native
  - React Native Picker
  - React Native Vector Icons
  - React Navigation

## ❔ Why we used this stack:
This project formed part of the Mobile App Scripting module where we had to develop our app in React Native. Therefore, React Native was used. We could develop with or without Expo.

<details>
  <summary><h2>📓 Requirements</h2></summary>
  
### Pages / Functionality
- Home Screen where the user can view the details of the last book they entered
  - Details: Title, Author, Genre, Number of Pages
  - Total number of pages read across all entered books
  - Average number of pages read across all entered books
- Addition Screen where the user enters the title, author, genre and number of pages of the book they want to add
- History Screen where the last 3 books read and their details are displayed
- Genre Screen where the total number of books read in each genre is displayed

### Other requirements
- Code must make use of seperate files for each screen, instead of all the code being within App.js
</details>

<details>
  <summary><h2>🔄 Process</h2></summary>

### I. Part 1
1. Design wireframes and prototype of the app in Figma
2. Create a React Native project and implement the Home Screen without any functionality and hardcoded data

### II. Part 2
3. Develop and implement the Addition Screen with book addition functionality and error-checking
4. Implement navigation between Home and Addition screen
5. Implement the tracking of total and average pages read
6. Display the latest book's details on the Home Screen
7. Add different Home Screen design when no books have been added

### III. Part 3
8. Develop and implement the History Screen
9. Develop and implement the Genre Screen
10. Add Context API to store the data of the books entered and the genre count
10. Add different History Screen when no books have been added

  </details>

## ✨ End Result
- 94% for Part 1
- 98% for Part 2
- Awaiting results for Part 3

## 🤓 What I learned
This was my first time working with React Native (and the React library in general). I learned a lot about React Native, components, navigation, Javascript (ES6+) features such as arrow functions, Context API and working with JSON data.

## 🙃 What I struggled with
- The first 2 parts were relatively straightforward (I had one or two hitches that were resolved within a day or two), but Part 3 was particularly difficult.
- I struggled with getting certain components (data grabbed from a JSON array) to re-render through useState
- Getting used to Context API was a little tough, but I understood it in the end (which fixed the above problem)
