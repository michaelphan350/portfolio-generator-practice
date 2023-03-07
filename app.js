const fs = require('fs');
const generatePage3 = require('./src/page-template.js');

// // const generatePage = () =>  ----------Explicitly naming the Name and GithubName
// //     'Name: Jane, Github: janehub';

// // console.log(generatePage());

// console.log('===============') 

// const generatePage2 = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;             // Using template literals to set up function that accepts
// console.log(generatePage2('Jane', 'janehub')); // prints function after passing in name and username    // parameters for Name and username

// console.log('===============');
const profileDataArgs = process.argv.slice(2);
// Can be combined --const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [ name, github ] = profileDataArgs;

// const generatePage3 = (name, github) => { // this allows us to add line breaks-example of a multi line input
//     return `
//         <!DOCTYPE html>
//         <html lang='en'>
//         <head>
//             <meta charset='UTF-8'>
//             <meta name='viewport' content='width=device-width, initial scale=1.0'>
//             <meta http-equiv='X-UA-Compatible' content='ie=edge'>
//             <title>Portfolio Demo</title>
//         </head>

//         <body>
//             <h1>${name}</h1>
//             <h2><a href='https://github.com/${github}'>Github</a></h2>
//         </body>
//         </html>
//     `;
// };

fs.writeFile('./index.html', generatePage3(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfoli complete: Check out index.html to see the output!');
})

// console.log(generatePage3(name, github));
// console.log(name, github)
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//    for (let i = 0; i < profileDataArr.length; i++) {
//        console.log(profileDataArr[i]);
//    }
//    console.log('=============');
//    profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
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