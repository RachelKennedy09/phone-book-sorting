# Phone Book Sorting

A beginner-friendly **CLI Phone Book app** built with **JavaScript classes**, file storage, and a **Merge Sort** implementation for organized contact management.  
Includes unit tests with **Mocha + Chai**.

---

# How to use the app

## 📦 Prerequisites

Make sure you have these installed before running the app:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

This project also uses:
- [Mocha](https://mochajs.org/) – JavaScript testing framework
- [Chai](https://www.chaijs.com/) – Assertion library
- [Nodemon](https://nodemon.io/) – For auto-restarting during development (optional)

You don’t need to install these separately — running:

npm install

1. **Clone the repo**
   
   git clone https://github.com/yourusername/phone-book-sorting.git
   cd phone-book-sorting

2. **Install Dependencies**
   
   npm install

3. **Run the app**
   
   npm run start

-This will run index.js where you can call methods like
- myPhoneBook.addContact("Alice", "12345", "alice@email.com");
- myPhoneBook.viewContacts();
- myPhoneBook.deleteContact("12345");
- myPhoneBook.sortContactsBy("name");
- myPhoneBook.searchContacts("alice");

---

# Dev notes:

-Used Trello cards for project management and step-by-step planning.
[Trello Project Management link](https://trello.com/invite/b/68962fd95f66da298a744b50/ATTIb75234b4c832592a38956be14299972d40F13E28/phonebook-sorting-appalgorithms-and-data-structure)

-Learned to avoid nodemon for this exercise (it caused issues with file I/O). Used npm run start instead.

-Built the app using classes instead of standalone functions, as recommended by my professor.

-Debugged a bug where I was console logging the entire phone book at the bottom of the file—moved logs into viewContacts() for cleaner output.

## 📖 What I Learned

Building this project taught me a lot across several phases of development.  
I learned how to organize code using **JavaScript classes** so all phone book features live in one logical place, and how to use a **constructor** to set up the initial state of an app. I practiced storing data in memory with `this.contacts` and persisting it to disk using Node’s built-in **`fs` module**. I learned to break code into separate files and use **`export` / `import`** so each part of the project has a clear purpose.

For sorting, I explored JavaScript’s built-in `.sort()` but implemented **Merge Sort** for the learning challenge. I now understand how merge sort works using the **divide-and-conquer** approach, why it’s **stable**, and how it achieves **O(n log n)** performance. I wrapped my Merge Sort logic in its own class (`MergeSorter`) so it’s reusable and testable.

I also learned how important **testing** is. Using **Mocha + Chai**, I wrote tests for adding, updating, deleting, sorting, and searching contacts. I discovered that tests often require **return values** from methods, not just console logs, and that resetting my data file before each test keeps them isolated and reliable.  

Finally, I improved my debugging skills: handling type mismatches, preventing `.toLowerCase()` crashes when fields are missing, cleaning up console logs for consistent output, and making search and delete logic more flexible to handle variations in input. Overall, this project improved my skills in JavaScript, file I/O, algorithms, and beginner-friendly test-driven development.

---

### Sorting
- Java script has built in .sort() but for learning purposes i chose to go with Merge Sort.
  
 **Why Merge Sort?**
- It’s **stable**, so equal elements keep their original order.
- Time complexity is **O(n log n)**.
- Good for sorting objects like phone book contacts.
- Efficient even with larger datasets (though this app isn’t huge).
- Implemented as a **class** (`MergeSorter`) instead of a standalone function.

**What is merge sort>**
- Merge sort is a highly efficient, comparison-based sorting algorithm that follows the **divide-and-conquer** approach:
  1. Recursively split the array into smaller subarrays.
  2. Sort the subarrays
  3. Merge them back together
**Key characteristics**
 - **Stable** (Keeps the relative order of equal elements).
 - **O(n log n)** time complexity.
 - Great for sorting **linked lists** oor large datasets

--- 

### Mocha/Chai Testing
- Testing is harder than it looks!
- Learned I need **return values** and **console logs** in each method so tests can verify results.
- Wrote tests for **add**, **update**, **delete**, **sort**, and **search**.
  
---

## Wins
- Completed a fully working CLI app that stores and sorts contacts.
- Learned to implement **Merge Sort** from scratch.
- Built and ran **real unit tests** using Mocha + Chai (no mocks).
- Used file-based storage so contacts persist between runs.
  
---


## Challenges
- Debugging file I/O issues when using **nodemon**.
- Making search work case-insensitively while also handling missing fields without crashing.
- Ensuring tests ran in isolation (resetting `data.json` before each test).
- Getting used to writing clean, consistent **console logs**.

## Future Improvements

Here are some features and refinements I’d like to add in future versions of the Phone Book app:

- **Normalize phone number formatting**  
  Automatically remove spaces, dashes, or brackets so phone numbers are stored in a consistent format (e.g., always `5551234567`).  
  This would make searching and deleting contacts more reliable.

- **Phone number format validation**  
  Require users to enter phone numbers in a specific pattern (e.g., `(XXX) XXX-XXXX`) or as digits only, to keep the data consistent.

- **Duplicate contact prevention**  
  Warn the user or block adding a contact if a phone number already exists in the phone book.

- **Export/Import contacts**  
  Allow saving the contact list to a CSV or JSON file for backup, and importing it into another copy of the app.

- **Sort order options**  
  Add the ability to sort in both ascending (A–Z) and descending (Z–A) order for names, numbers, or dates.

- **Improved search**  
  Support searching multiple fields at once (e.g., `alice 555` could match name *and* phone number).

- **Command-line arguments**  
  Let the user pass commands directly when starting the app (e.g., `node index.js --add "Alice" 5551234567`).

- **Interactive CLI**  
  Use a package like [Inquirer.js](https://www.npmjs.com/package/inquirer) to create a menu-driven interface so users can choose actions instead of editing `index.js`.

- **Better date handling**  
  Store `dateAdded` in a standard format (like ISO 8601) and display it in the user’s local timezone.
