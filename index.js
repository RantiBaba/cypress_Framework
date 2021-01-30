function Student(id, firstName, lastName, modulesTaken) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.modulesTaken = modulesTaken;
}
console.log(Student.prototype);

Student.prototype.pendingModules = function () {
  console.log(
    `pending modules for ${this.firstName} ${this.lastName}
  is ` +
      (8 - this.modulesTaken)
  );
};
console.log(Student.prototype);

const student = new Student(1, "Fred", "Perry", 3);
console.log(student);

student.pendingModules();
