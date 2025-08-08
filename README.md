# phone-book-sorting
CLI phone book app with class-based logic, file storage, and sorting



# Dev notes:

- I used trello cards for management and step-by-step to organize how to do this project
- I learned to not use nodemon (npm dev start) due to the loopholes in it for this exercise. I learned to use npm run start instead.
- Using classes instead of functions like the professor suggested
- I had a bug and was console logging at the bottom of the file the entire phonebook, before I added it to the viewcontacts(). I made sure it was just on the viewcontacts() function so that way it was cleaner code.

# What I learned in phase 1 of phoneBook.js and index.js
- class groups all phone book features together logically
- constructor() Sets up the initial state of the app
- this.contacts Stores your in-memory contact list
- fs module Read and writes data to a file
- export/import allows files to work together in parts


# What I learned in sorting 
- Java script has built in .sort() and for learning purposed i chose to go with Merge Sort because it is stable and good for sorting objects like the phone book contacts and is not a large database
- Instead of using a standalone mergesort() function, i created a class as the professor suggested
# What is merge sort
- Merge sort is a highly efficient, comparison-based sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays, sorting those subarrays, and then merging them back together to produce a sorted array.
Key characteristics of merge sort include:
 -It is stable, meaning that the relative order of equal elements is preserved.
It has a time complexity of O(n log n), making it efficient for large datasets.
Merge sort is particularly useful for sorting linked lists and large files that do not fit into memory."
from https://www.bing.com/search?q=merge+sort+algorithm&toWww=1&redig=A0DB03BF13874CBE925FA4A2BA8D5D0F