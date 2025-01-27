export const projectData = {
  "mikke!": {
    name: "Mikke!",
    description: `
      Mikke is a quick, low-threshold way to look up kanji (Japanese characters/ideograms adapted from Chinese characters). 
      The app is aimed at people with already some knowledge of kanji. 
      
      The app displays a full list of kanji from the external API kindly provided by Kanji Alive. The list may be sorted by stroke order 
      (how many brushstrokes are needed to write the entire character). Individual kanji search by English word is also available. 
  
      By clicking on any kanji in the search result or list, you may view information about said kanji such as all possible meanings, 
      onyomi/kunyomi (Chinese/Japanese) readings, and stroke count.`,
    details: `
      Tech stack: 
      - React
      - JavaScript
      - Node.js
      - PostgreSQL
      - Docker 
  
      Planned improvements:
      - A database for saving favorites
      - Improved search functionality
      `,
  },
  // "to-do-list": {
  //   name: "To-do List",
  //   description:
  //     "To-do list app to organize your tasks and increase productivity.",
  //   details: `**Features:**
  //     - Add, edit, and delete tasks
  //     - Mark tasks as complete
  //     - Responsive UI

  //     **Tech stack:** React and TypeScript.`,
  // },
  "baby-dragons-lunchtime": {
    name: "Baby Dragon's Lunchtime",
    description: `
    A top-down 2D game built using only C, playable directly from the computer terminal.
    
    You play as a baby dragon, whose objective is to collect all of the fruits on the screen, before depositing them in the lunch basket.

    The game has been built using C and the MLX42 library, which is an open-source alternative of the miniLibX.
    This was a mandatory project in the Hive Helsinki curriculum.
    
    The game follows a strict ruleset:
    
    - The executable so_long will receive as the only argument, a map of a .ber (binary file) filetype.
    - The map must be square/rectangular, i.e. all rows must be of equal length.
    - The map must be closed, i.e. surrounded by walls.
    - There must be at least one exit, one player, and one collectible on the map.
    - The game map accepts only P (player), 1 (wall), 0 (floor), C (collectible), and E (exit) characters.
    - If any of these checks fail, the game must not render, and display a descriptive error message in the terminal.
    
    The theming and graphics could be chosen freely, so I went with a colorful, cozy vibe.
    I designed the sprites for the dragon and the lunch basket, and the rest of the sprites were sourced from itch.io.`,

    details: `Tech stack (or lack thereof):

    - C
    - MLX42 library (open-source alternative of the miniLibX)`,
  },
};
