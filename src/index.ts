// Statis members
class Server {
  private static _users: number = 0;

  join() {
    Server._users++;
  }

  leave() {
    Server._users--;
  }

  static get users() {
    return Server._users;
  }
}

// Cannot access
// Server._users = 12;

let firstUser = new Server();
firstUser.join();

let secondUser = new Server();
secondUser.join();

console.log(Server.users);
