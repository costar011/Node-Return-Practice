import express from "express";

const PORT = 3000;
const app = express();

const concat = (param1, param2) => {
  const result = param1 + param2;
  console.log(param1, param2);
};

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);

  concat("Hi", "My name is...");
});
