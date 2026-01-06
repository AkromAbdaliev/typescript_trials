// Statis members
class Server {
  static users: number = 0;

  join() {
    Server.users++;
  }

  leave() {
    Server.users--;
  }
}

let firstUser = new Server();
firstUser.join();

let secondUser = new Server();
secondUser.join();

console.log(Server.users);
