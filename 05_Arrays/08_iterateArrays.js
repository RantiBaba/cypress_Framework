const courseCodes = [101, 102, 103, 104, 105, 106];

//using the forloop to iterate through an array
for (let courseCode of courseCodes) console.log(courseCode);

//using forEach
courseCodes.forEach(function (courseCodes) {
  console.log(courseCodes);
});
//cleaner implementation of forEach
courseCodes.forEach((courseCodes) => 
console.log(courseCodes));

courseCodes.forEach((index, courseCodes) => console.log(index, courseCodes));
