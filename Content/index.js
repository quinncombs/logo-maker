const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Square, Triangle } = require('./lib/shapes');

// this should pass:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }

    setTextElement(text,color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();

    }
     render() {

        return `<svg version="1.1" xmlns='http://www.w3.org/2000/svg' width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
}

// inquirer
//     .prompt(
        const questions = [

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

    ]

    // function to write shape file
// .then((answers) => {
//     const SVGfile =
  
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
err ? console.log(err) : console.log('Generated logo.svg.')
})
}

async function start() {
    var svgCreate = '';
    var SVGfile = 'logo.svg';
    const answers = await inquirer.prompt(questions);

    // letters must be between 1 and 3 characters dk why no work
    // var textChoice = '';
    // if (answers.text.length > 0 && answers.text.length < 4) {
    //     textChoice = answers.text;
    // } else {
    //     console.log("Must be only between 1 and 3 characters!");
    //     return;
    // }

    // console log answers and set
    letters = answers['characters'];
        console.log(letters);
    fontColor = answers['textColor'];
        console.log(fontColor);
    imageColor = answers['shapeColor'];
        console.log(imageColor);
    image = answers['shape'];
        console.log(image);

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
    svg.setTextElement(letters, fontColor)
    svg.setShapeElement(shapeChoice)
    svgCreate = svg.render()

writeToFile(SVGfile, svgCreate)

}

start()


