//Classes

//Javascript OOP

class Student {
  constructor(rollNo, studentName) {
    this.rollNo = rollNo;
    this.studentName = studentName;
  }

  display() {
    console.log("student name", this.studentName);
    console.log("roll no", this.rollNo);
  }
}

let student1= new Student(1,"Raj")
student1.display()
