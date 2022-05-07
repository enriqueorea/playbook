class User {
  constructor(id, userName, name, bio) {
    (this.id = id),
      (this.userName = userName),
      (this.name = name),
      (this.bio = bio),
      (this.dateCreated = new Date()),
      (this.lasUpdated = new Date());
  }
  getUsername() {
    return `${this.userName}`;
  }
  getBio() {
    return `${this.bio}`;
  }
  getDateCreated() {
    return `${this.dateCreated}`;
  }
  getLastUpdated() {
    return `${this.lasUpdated}`;
  }

  setNewUserName(newUserName) {
    this.userName = newUserName;
  }
  setNewBio(newBio) {
    this.bio = newBio;
  }
}
module.exports = User;
