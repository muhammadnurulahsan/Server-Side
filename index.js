const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const users = [
  {
    id: 1,
    name: "Abdul Halim",
    email: "abdulhalim@gmail.com",
    job: "Web Developer",
  },
  {
    id: 2,
    name: "Abdul Karim",
    email: "abdulkarim@gmail.com",
    job: "Web Developer",
  },
  {
    id: 3,
    name: "Abdul Hashim",
    email: "abdulhashim@gmail.com",
    job: "Web Developer",
  },
  {
    id: 4,
    name: "Abdul Mannan",
    email: "abdulmannan@gmail.com",
    job: "Web Developer",
  },
  {
    id: 5,
    name: "Abdul Salim",
    email: "abdulsalim@gmail.com",
    job: "Web Developer",
  },
  {
    id: 6,
    name: "Abdul Momin",
    email: "abdulmonin@gmail.com",
    job: "Web Developer",
  },
  {
    id: 7,
    name: "Abdul Hamid",
    email: "abdulhamid@gmail.com",
    job: "Web Developer",
  },
];



app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
  console.log("Query", req.query);
});

app.get("/fruits", (req, res) => {
  res.send(["Apple", "Banana", "Orange", "Pineapple"]);
});

app.get("/fruits/apple", (req, res) => {
  res.send("Apple is a fruit");
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  console.log(req.params);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("Request Success", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listen to Port", port);
});
