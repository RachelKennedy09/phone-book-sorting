// test/phoneBook.test.js

// 1) Import 'expect' so we can write readable assertions like expect(x).to.equal(y)
import { expect } from "chai";

// 2) We'll write/clear data.json between tests so each test starts fresh
import fs from "fs";

// 3) Import your real class (we’re not mocking!)
import { PhoneBook } from "../phoneBook.js";

// 4) A small helper to “seed” some contacts for tests
function seed(pb) {
  pb.addContact("Zoe", "300", "zoe@email.com");
  pb.addContact("Alice", "100", "alice@email.com");
  pb.addContact("Bob", "200", "bob@email.com");
}

describe("PhoneBook (using real class & data.json)", () => {
  let phoneBook;

  // This runs BEFORE each test — clean file + fresh instance every time
  beforeEach(() => {
    // Overwrite data.json with an empty array so tests don’t leak into each other
    fs.writeFileSync("./data.json", "[]");
    // Create a new phonebook which will load that empty array
    phoneBook = new PhoneBook();
  });

  it("should add a contact", () => {
    // Arrange + Act: add one contact
    phoneBook.addContact("Alice", "12345", "alice@example.com");

    // Assert: the last item in contacts should be Alice with that phone
    const last = phoneBook.contacts[phoneBook.contacts.length - 1];
    expect(last.name).to.equal("Alice");
    expect(last.phoneNumber).to.equal("12345");
    expect(last.email).to.equal("alice@example.com");
  });

  it("should delete a contact by phone number", () => {
    // Arrange: seed three contacts
    seed(phoneBook);

    // Act: delete one by phone number
    phoneBook.deleteContact("200"); // deletes Bob

    // Assert: only two remain and none has phone "200"
    expect(phoneBook.contacts.length).to.equal(2);
    const phones = phoneBook.contacts.map(c => c.phoneNumber);
    expect(phones).to.not.include("200");
  });

  it("should update a contact’s email and phone number", () => {
    // Arrange
    phoneBook.addContact("Alice", "111", "old@email.com");

    // Act: update Alice, looked up by current phone "111"
    phoneBook.updateContact("111", {
      email: "new@email.com",
      phoneNumber: "222"
    });

    // Assert: find Alice by her new phone and check the updated fields
    const updated = phoneBook.contacts.find(c => c.phoneNumber === "222");
    expect(updated).to.exist;
    expect(updated.email).to.equal("new@email.com");
    expect(updated.name).to.equal("Alice"); // name unchanged
  });

  it("should sort by name (A–Z) using MergeSort", () => {
    // Arrange
    seed(phoneBook); // Zoe, Alice, Bob (unordered)

    // Act
    phoneBook.sortContactsBy("name");

    // Assert: alphabetical -> Alice, Bob, Zoe
    const names = phoneBook.contacts.map(c => c.name);
    expect(names).to.deep.equal(["Alice", "Bob", "Zoe"]);
  });

  it("should sort by phoneNumber (ascending) using MergeSort", () => {
    // Arrange
    seed(phoneBook); // phone numbers: 300, 100, 200

    // Act
    phoneBook.sortContactsBy("phoneNumber");

    // Assert: as strings, but these sort fine: "100","200","300"
    const phones = phoneBook.contacts.map(c => c.phoneNumber);
    expect(phones).to.deep.equal(["100", "200", "300"]);
  });

  it("should sort by dateAdded (oldest first) using MergeSort", () => {
    // Arrange: Add 3 contacts, then manually set dates so order is predictable
    phoneBook.addContact("C1", "1", "c1@email.com");
    phoneBook.addContact("C2", "2", "c2@email.com");
    phoneBook.addContact("C3", "3", "c3@email.com");

    // Manually set deterministic dates (ISO strings)
    // NOTE: We update the internal array for test determinism, then save.
    const [c1, c2, c3] = phoneBook.contacts;
    c1.dateAdded = "2020-01-01T00:00:00.000Z"; // oldest
    c2.dateAdded = "2021-01-01T00:00:00.000Z";
    c3.dateAdded = "2022-01-01T00:00:00.000Z"; // newest
    phoneBook.saveData(); // persist test dates

    // Act
    phoneBook.sortContactsBy("dateAdded");

    // Assert: oldest first -> C1, C2, C3
    const names = phoneBook.contacts.map(c => c.name);
    expect(names).to.deep.equal(["C1", "C2", "C3"]);
  });

  it("should search by name / phone / email (case-insensitive, substring)", () => {
    // Arrange
    seed(phoneBook); // Zoe(300), Alice(100), Bob(200)

    // Act
    const byName = phoneBook.searchContacts("ali"); // partial, lowercase
    const byPhone = phoneBook.searchContacts("00"); // matches 100 & 200 & 300
    const byEmail = phoneBook.searchContacts("@email.com");

    // Assert
    expect(byName.map(c => c.name)).to.deep.equal(["Alice"]);
    expect(byPhone.map(c => c.phoneNumber)).to.deep.equal(["300", "100", "200"]); // depends on current order
    expect(byEmail.length).to.equal(3);
  });
});
