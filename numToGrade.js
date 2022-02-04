// Solving Method 01 - Using For Loop
console.log('\n==== Solving Method 01 - Using For Loop ====');

var numbers = [95, 66, 80, 59, 47, 77];
var names = ['Alia', 'Dalia', 'Salia', 'Malia', 'Lilia', 'Jalaia'];

for (var i = 0; i < numbers.length; i++) {
   var mark = numbers[i];
   var name = names[i];

   if (mark > 0 && mark <= 100) {
      if (mark >= 80) {
         console.log(name + ' has got A+');
      } else if (mark >= 70) {
         console.log(name + ' has got A');
      } else if (mark >= 60) {
         console.log(name + ' has got A-');
      } else if (mark >= 50) {
         console.log(name + ' has got B');
      } else {
         console.log(name + ' has Failed!');
      }
   } else {
      console.log('Invalid Numbers Found!');
   }
}

// Solving Method 02 - Using While Loop
console.log('\n==== Solving Method 02 - Using While Loop ====');

var numbers = [95, 66, 80, 59, 47, 77];
var names = ['Alia', 'Dalia', 'Salia', 'Malia', 'Lilia', 'Jalaia'];
var i = 0;
while (i < numbers.length) {
   var mark = numbers[i];
   var name = names[i];

   if (mark > 0 && mark <= 100) {
      if (mark >= 80) {
         console.log(name + ' has got A+');
      } else if (mark >= 70) {
         console.log(name + ' has got A');
      } else if (mark >= 60) {
         console.log(name + ' has got A-');
      } else if (mark >= 50) {
         console.log(name + ' has got B');
      } else {
         console.log(name + ' has Failed!');
      }
   } else {
      console.log('Invalid Numbers Found!');
   }

   i++;
}

// Solving Method 03 - Using For of Loop
console.log('\n==== Solving Method 03 - Using For of Loop ====');

var numbers = [95, 66, 80, 59, 47, 77];
var names = ['Alia', 'Dalia', 'Salia', 'Malia', 'Lilia', 'Jalaia'];
var i = 0;
for (var mark of numbers) {
   var name = names[i];

   if (mark > 0 && mark <= 100) {
      if (mark >= 80) {
         console.log(name + ' has got A+');
      } else if (mark >= 70) {
         console.log(name + ' has got A');
      } else if (mark >= 60) {
         console.log(name + ' has got A-');
      } else if (mark >= 50) {
         console.log(name + ' has got B');
      } else {
         console.log(name + ' has Failed!');
      }
   } else {
      console.log('Invalid Numbers Found!');
   }

   i++;
}

// Solving Method 04 - Using For Each Function
console.log('\n==== Solving Method 04 - Using For Each Function ====');

var numbers = [95, 66, 80, 59, 47, 77];
var names = ['Alia', 'Dalia', 'Salia', 'Malia', 'Lilia', 'Jalaia'];

numbers.forEach((mark, index) => {
   var name = names[index];
   if (mark > 0 && mark <= 100) {
      if (mark >= 80) {
         console.log(name + ' has got A+');
      } else if (mark >= 70) {
         console.log(name + ' has got A');
      } else if (mark >= 60) {
         console.log(name + ' has got A-');
      } else if (mark >= 50) {
         console.log(name + ' has got B');
      } else {
         console.log(name + ' has Failed!');
      }
   } else {
      console.log('Invalid Numbers Found!');
   }
});
