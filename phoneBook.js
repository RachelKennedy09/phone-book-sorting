//------------//
//FILE IS A CLASS WITH METHODS: ADDCONTACT, VIEWCONTACTS, DELETECONTACTS, UPDATECONTACTS//
//---------//

//1.Import built-in 'fs' module so we can read/write files
import fs from "fs";

//Merge Sort step 1: import Merge Sorting file
import { MergeSorter } from "./utils/mergeSorter.js";

//2. Path to where our contacts will be stored (data.json)
const FILE_PATH = "./data.json";

//3. Define the PhoneBook class
// makes it available for import
export class PhoneBook {
  // Runs when you do new PhoneBook(), initializes your contact list
  constructor() {
    // 4. This array will hold all contacts in memory
    this.contacts = this.loadData();
  }

  //5. load contacts from the file and return them into a JS array
  loadData() {
    try {
      const data = fs.readFileSync(FILE_PATH, "utf8");
      return JSON.parse(data); // convert string into array of objects
    } catch (err) {
      return []; //If file doesn't exist or is empty
    }
  }

  //6. Save contacts to the file as text and saves it in data.json
  saveData() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(this.contacts, null, 2));
  }

  // 7. Add a contact (creates it and saves it)
  addContact(name, phoneNumber, email = "") {
    const newContact = {
      name,
      phoneNumber,
      email,
      dateAdded: new Date().toISOString(),
    };

    this.contacts.push(newContact);
    this.saveData();
    console.log(`Added "${name}" to the phone book.`);
    return newContact;
  }

  // 8. View all contacts,
  viewContacts() {
    if (this.contacts.length === 0) {
      console.log("No contacts found.");
      return;
    }
    console.log("Phone Book:");
    this.contacts.forEach((contact, index) => {
      console.log(`\n#${index + 1}`);
      console.log(`Name: ${contact.name}`);
      console.log(`Phone: ${contact.phoneNumber}`);
      console.log(`Email: ${contact.email}`);
      console.log(
        `Date Added: ${new Date(contact.dateAdded).toLocaleString()}`
      );
    });
    return this.contacts;
  }

  //9. Delete a contact by phone number
  deleteContact(phoneNumber) {
    //original length stores the number of contacts before deletion
    const originalLength = this.contacts.length;

    //Remove any contact with a matching phone number, filter creates a new array
    //that excludes the contact with the matching number
    this.contacts = this.contacts.filter(
      (contact) => String(contact.phoneNumber) !== String(phoneNumber)
    );
    //if length didn't change no contact was found
    if (this.contacts.length === originalLength) {
      console.log(`No contact found with phone number: ${phoneNumber}`);
      return false;
    } else {
      this.saveData();
      console.log(`Deleted contact with phone number ${phoneNumber}.`);
      return true;
    }
  }

  //10. update a contact by phone number
  updateContact(phoneNumber, newDetails) {
    //find the contact we want to update
    const contact = this.contacts.find(
      (c) => String(c.phoneNumber) === String(phoneNumber)
    );
    // if it cant find the contact, show an error and stop
    if (!contact) {
      console.log(`Contact not found: ${phoneNumber}`);
      return false;
    }

    //only overwrite fields that were provided
    contact.name = newDetails.name || contact.name;
    contact.phoneNumber = newDetails.phoneNumber || contact.phoneNumber;
    contact.email = newDetails.email || contact.email;
    contact.dateAdded = newDetails.dateAdded || contact.dateAdded;

    //save the updated array to the file
    this.saveData();
    console.log(`Updated contact with phone number ${phoneNumber}.`);
    return true;
  }

  // 11. Merge Sort: sort by field
  sortContactsBy(field) {
    const sorter = new MergeSorter(this.contacts);
    this.contacts = sorter.sortBy(field);
    this.saveData();
    console.log(`Sorted contacts by ${field}`);
    return this.contacts;
  }

  // 12. search contacts by name, phone, or email(case insensitive, substring)
  searchContacts(query) {
    //convert the search query to lowercase to make the search case-insensitive
    const lowerQuery = String(query || "")
      .toLowerCase()
      .trim();

    //Go through all the contacts and find the ones that match the search query
    const results = this.contacts.filter((contact) => {
      //Check if the query appears inside the name, phoneNumber, or email
      //safe casting so .tolowercase never crashes
      const name = String(contact.name || "").toLowerCase(); //search in name
      const phone = String(contact.phoneNumber || ""); //digits don't need a lowercasing
      const email = String(contact.email || "").toLowerCase(); // search  in email

      return (
        name.includes(lowerQuery) ||
        phone.includes(lowerQuery) ||
        email.includes(lowerQuery)
      );
    });

    //if no results are found, tell the user
    if (results.length === 0) {
      console.log(`No contacts found matching "${query}".`);
    } else {
      // if matches were found, show each one nicely
      console.log(`Found search results for "${query}":`);
      results.forEach((contact, index) => {
        console.log(`\n#${index + 1}`); // Show the contact number (starting from 1)
        console.log(`Name: ${contact.name}`); // Show the contact name
        console.log(`Phone: ${contact.phoneNumber}`); // Show the phone number
        console.log(`Email: ${contact.email}`); // Show the email
        console.log(
          `Date Added: ${new Date(contact.dateAdded).toLocaleString()}`
        ); // Show the date the contact was added (in readable format)
      });
    }

    //return results so tests can run
    return results;
  }
}
