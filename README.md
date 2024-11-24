# Animal Matching Game 🦁 (Assignment 4)

## Overview 🌟

The **Animal Matching Game** is a fun and educational game designed for children to enhance their object recognition and language abilities. The game displays an animal name on the left side of the page, and the player needs to select the correct animal image from a grid of 16 animals. If the player chooses the correct animal, they win; otherwise, they lose. This simple game helps improve both recognition skills and language development in an engaging way.

## Table of Contents 📑

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Running the Game](#running-the-game)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [How to Play](#how-to-play)
- [Outputs](#Outputs)
- [License](#license)

## Features 🚀

- Display of an animal name on the left side 🦓.
- A grid of 16 animal images 🐶🐱🐘🐯🐵.
- Immediate feedback on whether the selected animal was correct ("win" or "lose").
- Simple, responsive design for children to interact with easily.

## Technologies ⚙️

This project is built using the following technologies:

- **React** 🟢 - A JavaScript library for building user interfaces.
- **JavaScript (ES6+)** 📜 - Modern JavaScript for writing clean and efficient code.
- **CSS** 🎨 - For styling and layout.
- **VS Code** 💻 - The code editor used for development.

## Getting Started 🏁

To get started with the project on your local machine, follow these steps:

### Prerequisites 🛠️

- Make sure you have **Node.js** installed. You can download it from [here](https://nodejs.org/).

### Installation 💾

1. **Clone the repository:**

   Open a terminal and run the following command to clone the project:

   ```bash
   git clone https://github.com/your-username/animal-matching-game.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd animal-matching-game
   ```

3. **Install dependencies:**

   Run the following command to install the required npm packages:

   ```bash
   npm install
   ```

### Running the Game 🎮

After installing the dependencies, you can start the development server by running:

```bash
npm start
```

This will start the game on your local machine. By default, the game will be accessible at [http://localhost:3000](http://localhost:3000).

## Project Structure 🗂️

The project structure is as follows:

```
animal-matching-game/
├── src/
│   ├── assets/
│   │   ├── img/           # Folder for images of animals
│   │   ├── data/          # Folder for data files (like AnimalsDb.js)
│   │   └── css/           # Folder for CSS files (for styles)
│   ├── components/
│   │   └── AnimalTable.js  # Displays the grid of animal images
│   ├── App.js              # Main game component (handles logic and state)
│   ├── index.js            # Entry point for React
└── public/
    └── index.html
```

### Key Files 📂:

- **`App.js`**: The main component that manages the game logic.
- **`AnimalGrid.js`**: A component that renders the grid of animal images.
- **`AnimalName.js`**: A component that displays the animal name for matching.
- **`utils/`**: Utility functions for checking the correct answer.

## Contributing 🤝

We welcome contributions to improve this project! If you would like to contribute, please fork the repository and submit a pull request with your proposed changes.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new Pull Request.

## How to Play 🎮

1. A random **animal name** is displayed at the top of the screen.
2. **Select the corresponding animal image** from the 4x4 grid of animal images.
3. **Feedback**:
   - If you select the correct animal, **"WIN"** will be displayed.
   - If you select the incorrect animal, **"LOSE"** will be displayed.
4. After the feedback is shown, the game **automatically resets** for the next round, and a new animal name will appear.

## Outputs:

**Win**

![Win](https://github.com/user-attachments/assets/92a10d57-63b3-4bcb-b779-e26ffdebaf5a)

**Lose**

![Lose](https://github.com/user-attachments/assets/d26515e9-0423-4874-a64c-309c6f9a500e)



## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
