class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static add(name, email, password) {
    const newUser = new UserModel(users.length + 1, name, email, password);
    users.push(newUser);
  }
  static isValidUser(email, password) {
    const result = users.find(
      (user) => user.email == email && user.password == password
    );
    return result;
  }
}
const users = [];
export default UserModel;
