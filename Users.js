import { User } from './UserModel';
import { List } from 'immutable';

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
