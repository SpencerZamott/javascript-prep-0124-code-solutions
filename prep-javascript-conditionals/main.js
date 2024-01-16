const age = 22
function isAdult(age){
 let boolean;
  if(age>18) {
    boolean = true;
  }else{
    boolean = false;
  }
 return boolean;
}
console.log("Is an adult:",isAdult(22))

const student1Score = 40
function didStudentPass(score){
  let boolean;
  if(score>70){
    boolean=true;
  }else{
    boolean=false;
  }
  return boolean;
}

console.log("did student pass?", didStudentPass(40))

const student2Score= 105
function gradeCalculator(score){
  let grade;
  if(score<60){
grade="F"
  }if (score<70){
grade="D"
  }if (score<80){
    grade="C"
  }if (score<90){
    grade="B"
  }if (score<100){
    grade="A"
  }else{
    grade="A++"
  }
  return grade
}
console.log("Grade result:", gradeCalculator(105))

const season= "autumn"
function seasonMessanger(season){
  let text;
  if(season==="summer"){
text= "It's hot today"
  }else if (season==="spring"){
    text="the flowers are blooming"
  }else if(season==="autumn"){
    text="The leaves are starting to change color"
  }else if(season==="winter"){
    text="it's cold today"
  }else{
    text= "please enter a valid season"
  }
  return text
}
console.log("Season Message:", seasonMessanger("autumn"))

const dayOfTheWeek = "thursday"
function dayDetector(dayOfTheWeek){
  if (dayOfTheWeek === "saturday" || dayOfTheWeek === "sunday"){
    text = "Have a great weekend!"
  } else{
    text= "It's a weekday!"
  }
  return text
}
console.log(dayDetector("Monday"))
