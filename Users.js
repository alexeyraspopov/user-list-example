import { User } from './UserModel';
import { List } from 'immutable';

// Created object provides async methods to work with users collection.
// Since the API is async, you can replace internal implementation with
// HTTP requests and the app will still work as before.
// All methods will return a List instance with User records that are
// implemented in UserModel.js
class Users {
  constructor(usersData) {
    const listOfRecords = usersData.map(data => new User(data));
    this.users = new List(listOfRecords).toMap().mapKeys((k, v) => v.id);
  }

  async retrieve() {
    return this.users;
  }

  async update(id, data) {
    return this.users.mergeIn([id], data);
  }

  async destroy(id) {
    return this.users.delete(id);
  }
}

const dummyData = [{ firstName: 'Alex', lastName: 'Raspopov' }];

export default new Users(dummyData);
