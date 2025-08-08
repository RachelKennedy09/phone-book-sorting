# phone-book-sorting
CLI phone book app with class-based logic, file storage, and sorting



# Dev notes:

- I used trello cards for management and step-by-step to organize how to do this project
- I learned to not use nodemon (npm dev start) due to the loopholes in it for this exercise. I learned to use npm run start instead.
- Using classes instead of functions like the professor suggested
- I wanted to keep it clean and not console.log the phone book after each function was called, but i added it to update so that way the user can see the updated contact on the phonebook. I also added it to view contacts so it worked when it was called. 

# What I learned in phase 1 of phoneBook.js and index.js
- class groups all phone book features together logically
- constructor() Sets up the initial state of the app
- this.contacts Stores your in-memory contact list
- fs module Read and writes data to a file
- export/import allows files to work together in parts