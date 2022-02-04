// Neccessary Datas
const results = [
   {
      name: 'Alia',
      mark: 95,
   },
   {
      name: 'Dalia',
      mark: 66,
   },
   {
      name: 'Salia',
      mark: 80,
   },
   {
      name: 'Malia',
      mark: 59,
   },
   {
      name: 'Lilia',
      mark: 47,
   },
   {
      name: 'Jalaia',
      mark: 77,
   },
];

function numToGradeOf(name, mark) {
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

// Method 01 - Using For Loop
console.log('\n==== Method 01 - Using For Loop ====');

for (let i = 0; i < results.length; i++) {
   const {name, mark} = results[i];
   numToGradeOf(name, mark);
}

// Method 02 - Using While Loop
console.log('\n==== Method 02 - Using While Loop ====');

let i = 0;
while (i < results.length) {
   const {name, mark} = results[i];
   numToGradeOf(name, mark);
   i++;
}

// Method 03 - Using For of Loop
console.log('\n==== Method 03 - Using For of Loop ====');

for (const student of results) {
   const {name, mark} = student;
   numToGradeOf(name, mark);
}

// Method 04 - Using For Each Function
console.log('\n==== Method 04 - Using For Each Function ====');

results.forEach(student => {
   const {name, mark} = student;
   numToGradeOf(name, mark);
});

// Method 05 - Using Map Function
console.log('\n==== Method 05 - Using Map Function ====');

results.map(student => {
   const {name, mark} = student;
   numToGradeOf(name, mark);
});

// Method 06 - Using Type Manually
console.log('\n==== Method 05 - Using Type Manually ====');

numToGradeOf('Alia', 95);
numToGradeOf('Dalia', 66);
numToGradeOf('Salia', 80);
numToGradeOf('Malia', 59);
numToGradeOf('Lilia', 47);
numToGradeOf('Jalaia', 77);
