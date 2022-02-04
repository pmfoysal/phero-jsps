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
