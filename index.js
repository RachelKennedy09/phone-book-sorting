import { PhoneBook } from "./phoneBook.js";

// 1️ Create a new phone book instance
const myPhoneBook = new PhoneBook();

// 2️ Add a new contact
myPhoneBook.addContact("Rachel Kennedy", "1234567890", "rachel@email.com");

// 3️ View all contacts
myPhoneBook.viewContacts();
