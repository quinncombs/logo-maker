const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

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
            message: 'Which shape would you like? (please capitalize the first letter!:)',
            choices: [ 'Circle', 'Square', 'Triangle'],
        }

    ])

    // function to write shape file
// .then((answers) => {
//     const SVGfile = generateMarkdown(answers);
  
fs.writeToFile('./examples', SVGfile, (err) =>
err ? console.log(err) : console.log('Generated logo.svg.')
)

async function start() {
    var svgCreate = '';
    var SVGfile = 'logo.svg';


// letters must be between 1 and 3 characterse
var textChoice = '';
if (answers.text.length > 0 && answers.text.length < 4) {
      textChoice = answers.text;
  } else {
      console.log("Must be only between 1 and 3 characters!");
      return;
  }

// console log answers and set
letters = answers['characters'];
    console.log(letters);
fontColor = answers['textColor'];
    console.log(textColor);
imageColor = answers['shapeColor'];
    console.log(shapeColor);
image = answers['shape'];
    console.log(shape);

// shape
let shapeChoice;
if (image === 'Circle') {
    shapeChoice = new Circle()
}
else if (image === 'Square') {
    shapeChoice = new Square()
}
else if (image === 'Triangle') {
    shapeChoice = new Triangle()
}
else {
    console.log('Please choose between Circle, Square, or Triangle')
}

  //puts shape and color together
shapeChoice.setColor(imageColor);

  //put choices together to crate svg
var svg = new Svg();
svg.setTextElement(textChoice, fontColor)
svg.setShapeElement(shapeChoice)
svgCreate = svg.render()

writetoFile(SVGfile, svgCreate)
}

start()


