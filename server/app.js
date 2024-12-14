const express = require("express");
const fs = require("fs");
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const dataFile = "speeds.txt";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.text());

app.post("/", (req, res) => {
  let auth = Buffer.from(req.headers.authorization.split(" ")[1], "base64")
    .toString()
    .split(":");

  let usr = auth[0];
  let pw = auth[1];

  if (usr !== USER || pw !== PASSWORD) {
    res.send("Nice try.");
  }

  fs.appendFile(dataFile, req.body + "\n", (err) => {
    if (err) throw err;
    console.log("Text appended to file!" + USER + PASSWORD);
  });
  res.send();
});

app.get("/", (req, res) => {
  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const finalData = transformData(data);
    res.send(finalData);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function transformData(data) {
  const lines = data.split(/[\r\n]+/g);
  const transformedData = new Array();

  lines.forEach((line, i) => {
    const parts = line.split(" ");
    const oldDate = parts[0].split("/");
    const oldMonth = Number(oldDate[0]) - 1;
    const oldYear = Number(oldDate[2]) + 2000;
    const oldTime = parts[1].split(":");

    const newDate = new Date(
      oldYear,
      oldMonth,
      oldDate[1],
      oldTime[0],
      oldTime[1]
    );

    let thisSpeed;
    if (parts.length > 2) {
      thisSpeed = Number(parts[2]);
    } else {
      thisSpeed = 0;
    }

    let onePoint = {};
    onePoint.x = newDate;
    onePoint.y = Math.floor(thisSpeed);

    transformedData.push(onePoint);
  });
  return transformedData;
}
