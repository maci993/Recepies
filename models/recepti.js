const fs = require("fs");

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      data = JSON.parse(data);
      return resolve(data);
    });
  });
};

const write = async (fileName, data) => {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

const add = async (data) => {
  let file = await read("recepti.json");
  file.push(data);
  await write("recepti.json", file);
};

const remove = async (index) => {
  let file = await read("recepti.json");
  file = file.filter((recept, i) => Number(index) !== i);
  await write("recepti.json", file);
};

const list = async () => {
  return await read("recepti.json");
};

module.exports = {
  read,
  write,
  add,
  remove,
  list,
};
