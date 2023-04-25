import express from "express";
import cors from "cors";
import { readFileSync, writeFileSync } from "fs";
import { v4 as uuid } from "uuid";

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/accounts", (req, res) => {
  const data = readFileSync("./data/data.json", "utf8");
  res.json({
    accounts: JSON.parse(data),
  });
});

app.post("/accounts", (req, res) => {
  let data = readFileSync("./data/data.json", "utf8");
  data = JSON.parse(data);
  const id = uuid();
  const account = { ...req.body.account, id };
  data.push(account);
  data = JSON.stringify(data);
  writeFileSync("./data/data.json", data);

  res.json({
    id,
  });
});

// app.put("/accounts", (req, res) => {
//     let data = readFileSync("./data/data.json", "utf8");
//     data = JSON.parse(data);
//     const account = { ...req.body.account, id };
//     data.push(account);
//     data = JSON.stringify(data);
//     writeFileSync("./data/data.json", data);

//     res.json({
//       id,
//     });
//   });

app.listen(PORT, () => {
  console.log("server running on 5000 ok");
});
