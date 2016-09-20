## User List Vanilla Flux Example

Read the code in the next order:

 1. [UserModel](./UserModel.js) — Data structures definition
 2. [Users](./Users.js) — Async API that works with Users collection
 3. [UserListContainer.react](./UserListContainer.react.js) — Stateful React component which sync users data with Users API
 4. [UserList.react](./UserList.react.js) — Stateless React component that simply map users collection to the UI
 5. [UserListItem.react](./UserListItem.react.js) — Stateful React component that shows data of one user and allows to edit it, committing changes to the persistence storage (Users API).
