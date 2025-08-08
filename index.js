import { PhoneBook } from "./phoneBook.js";

// 1️ Create a new phone book instance
const myPhoneBook = new PhoneBook();

// Test Add a new contact
myPhoneBook.addContact("Rachel Kennedy", "1234567890", "rachel@email.com");

// Test deleting
// myPhoneBook.deleteContact("1234567890");

//Test updating
// myPhoneBook.updateContact("1234567890", {
//   email: "updated@email.com",
//   phoneNumber: "555-123-0000",
// });

// 3️ View all contacts
myPhoneBook.viewContacts();
