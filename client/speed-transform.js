const fs = require('fs');

// Read the file synchronously
const data = fs.readFileSync('speeds.txt', 'utf-8');

// Split the data into an array of lines
const lines = data.split(/[\r\n]+/g);

// Do something with the lines

const finalData = new Array()

lines.forEach((line, i) => {

  const parts = line.split(" ")
  
  const oldDate = parts[0].split('/')
  
  const oldMonth = Number(oldDate[0]) - 1
  
  const oldYear = Number(oldDate[2]) + 2000
  
  const oldTime = parts[1].split(':')
  
  const newDate = new Date(oldYear, oldMonth, oldDate[1], oldTime[0], oldTime[1]);

  let thisSpeed;

  if (parts.length > 2) {
    thisSpeed = (Number(parts[2]))
  } else {
    thisSpeed = 0
  }

  let onePoint = {}
  onePoint.x = newDate
  onePoint.y = Math.floor(thisSpeed)

  finalData.push(onePoint)
})

console.log(finalData)


// lines.forEach((line, i) => {
//   const parts = line.split(" ")
  
//   const oldDate = parts[0].split('/')
  
//   const oldMonth = Number(oldDate[0]) - 1
  
//   const oldYear = Number(oldDate[2]) + 2000
  
//   const oldTime = parts[1].split(':')
  
//   const newDate = new Date(oldYear, oldMonth, oldDate[1], oldTime[0], oldTime[1]);
  
//   const thisSpeed = new Array()
  
//   if (parts.length > 2) {
//     thisSpeed.push(Number(parts[2]))
//     thisSpeed.push(Number(parts[3]))
//   } else {
//     thisSpeed.push(0)
//     thisSpeed.push(0)
//   }
  
//   finalSpeed = new Array()
//   finalSpeed.push(newDate)
//   finalSpeed.push(thisSpeed)

//   finalData.push(finalSpeed)
// }) 
