
# GitHub Daily Contribution Settings

This is a simple React app that generates a grid of cells with different levels of contribution, similar to the GitHub contribution graph.

## How it works

The app uses a function to generate a random number between 0 and 100, and assigns a level of contribution based on that number. The levels are:

- level-0: no contribution (grey color)
- level-1: low contribution (light green color)
- level-2: medium contribution (green color)
- level-3: high contribution (dark green color)
- level-4: very high contribution (very dark green color)

The app then creates 371 cells and assigns them a random level of contribution. The cells are arranged in a grid with 7 columns and 53 rows, representing the days of the week and the weeks of the year.

## How to run

To run the app, you need to have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone this repository or download the zip file.
2. Navigate to the project folder and run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and go to `http://localhost:3000` to see the app in action.

## How to customize

You can customize the app by changing some variables in the `App.css` file, such as:

- The width and height of the cells
- The gap between the cells
- The border radius of the cells
- The colors of the levels
