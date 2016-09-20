import { Record } from 'immutable';

const defaults = { id: '', firstName: '', lastName: '' };
let id = 0;

// User profile is described as an immutable data structure which uses Record
// from ImmutableJS. When created, user record will contain public getters
// that are described above in `defaults` variable.
// To create new user record, simply use `User` constructor and provide only
// necessary data:
//
//     const user = new User({ firstName: 'Scarlett', lastName: 'Johansson' });
//
// Created object can be easily used anywhere without transformations.
export class User extends Record(defaults) {
  constructor(data) {
    super(Object.assign({ id: `USER_${id++}` }, data));
  }
}
