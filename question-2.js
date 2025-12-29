const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

function checkTotalScores(array){
  let totalScores = array.filter(student=> student.score > 50)
  .map(student=>student.score * 1.1)
  .reduce((total, score)=> (total + score),0);

  return console.log(`Total score is ${totalScores}`);
}
checkTotalScores(students);