# Grid Generator

Grid Generator is a Vue.js application that allows users to dynamically generate letter grids with configurable options. It demonstrates core Vue concepts and modern tooling.

## Features

- Generate up to 5 grids with sizes up to 5x5
- Each grid contains unique random letters
- Configure number of grids and size using input fields
- Simple, responsive UI design implemented with Tailwind CSS
- Vue 3 Composition API structure
- UnoCSS for atomic CSS styling
- Vite for rapid development environment

### Configuration

The main UI contains two number inputs to configure the grid generation:

- Number of Grids (1-5)
- Grid Size (1-5)
  Entering values and clicking "Generate" will create the specified number of grids with the defined size.

### Grid Generation

The Grid component handles the logic of generating random letters for itself.

- A computed array of unique letter CharCodes is created
- This is mapped to actual letter characters
- The letters are displayed in a flex grid layout
  This ensures each grid will contain a unique set of random letters.

### Responsive Design

The UI is implemented using Tailwind CSS utility classes to be responsive across screen sizes. The grid items scale down on smaller screens.

## Built With

- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [UnoCSS](https://uno.antfu.me/) - Atomic CSS engine
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
