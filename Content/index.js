const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

// this should pass:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

inquirer
    .prompt([

        {
            type: 'input',
            name: 'characters',
            message: 'Enter up to three characters:',
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'Choose a color for text (color keyword or hexidecimal number)',
        },

        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose a color for the shape (color keyword or hexidecimal number)',
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like?',
            choices: [ 'Circle', 'Square', 'Triangle'],
        }

    ])

    // function to write shape file
.then((answers) => {
    const SVGfile = generateMarkdown(answers);
  
    fs.writeFile('./examples', SVGfile, (err) =>
    err ? console.log(err) : console.log('Successfully created logo!')
    )
  })