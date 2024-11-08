const users = [
  {
    id: 1,
    name: "Hernan",
  },
  {
    id: 2,
    name: "Tatiana",
  },
  {
    id: 3,
    name: "Jonathan",
  },
];

let id = 4;

module.exports = {
  getUsers: async () => {
    return users;
  },
  createUser: async (name)=>{
    const newUser = {
        id,
        name,
    };
    id++;
    users.push(newUser)
  }};
