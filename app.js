const profileDataArgs = process.argv.slice(2, process.argv.length);

// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
   for (let i = 0; i < profileDataArr.length; i++) {
       console.log(profileDataArr[i]);
   }
   console.log('=============');
   profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow')


// console.log(animalArray);

// const personObj = {
//     name: 'Michael',
//     age: '28'
// };

// personObj.age = 100
// personObj.occupation = 'Developer'

// console.log(personObj);