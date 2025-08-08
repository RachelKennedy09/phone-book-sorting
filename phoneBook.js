//------------//
//THIS FILE IS BASICALLY THE REMOTE//
//---------//

//1.Import built-in 'fs' module so we can read/write files
import fs from "fs";

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
  }

  // 8. View all contacts, 
  viewContacts() {
    if (this.contacts.length === 0) {
      console.log("No contacts found.");
      return;
    }
//Prints the contacts nicely for human reading
    console.log("📖 Phone Book:");
    this.contacts.forEach((contact, index) => {
      console.log(`\n#${index + 1}`);
      console.log(`Name: ${contact.name}`);
      console.log(`Phone: ${contact.phoneNumber}`);
      console.log(`Email: ${contact.email}`);
      console.log(
        `Date Added: ${new Date(contact.dateAdded).toLocaleString()}`
      );
    });
  }
}
