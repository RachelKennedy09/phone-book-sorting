//--------------//
// FILE IS THE REMOTE CONTROL - IMPORT CLASS, CREATE AN INSTANCE, AND RUN METHODS LIKE .ADDCONTACT()//
//----------///

import { PhoneBook } from "./phoneBook.js";

// 1️ Create a new phone book instance
const myPhoneBook = new PhoneBook();

// Test Add a new contact
// myPhoneBook.addContact("Zack", "29387510", "zack@email.com");
// myPhoneBook.addContact("Alice", "123", "alice@email.com");
// myPhoneBook.addContact("Bob", "456", "bob@email.com");
// myPhoneBook.addContact("Charlie", "789", "charlie@email.com");

// Test deleting Zack
// myPhoneBook.deleteContact("29387510");

//Test updating
// myPhoneBook.updateContact("123", {
//   email: "updated@email.com",
//   phoneNumber: "555-123-0000",
// });

// myPhoneBook.sortContactsBy("name"); // Alphabetically
// myPhoneBook.sortContactsBy("phoneNumber"); // Numerically
// myPhoneBook.sortContactsBy("dateAdded");     // By most recent

//search methods
// myPhoneBook.searchContacts("Alice"); //should match name
// myPhoneBook.searchContacts("2938");    // should match phone
// myPhoneBook.searchContacts("@email");  // should match email
// myPhoneBook.searchContacts("Zack");    // try other examples!

// 3️ View all contacts
myPhoneBook.viewContacts();
