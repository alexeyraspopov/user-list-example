import { Record } from 'immutable';

const defaults = { id: '', firstName: '', lastName: '' };
let id = 0;

export class User extends Record(defaults) {
  constructor(data) {
    super(Object.assign({ id: `USER_${id++}` }, data));
  }
}
