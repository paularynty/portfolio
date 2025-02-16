export const projectData = {
  "mikke!": {
    name: "Mikke!",
    description: `
    Mikke! (Japanese for "Found it!") is a quick, low-threshold tool for Japanese language learners. 
    It allows lookup of kanji (Japanese character) by English word/meaning and provides detailed information on the respective kanji.
    The app has been built with Next.js, React and TypeScript.`,
    details: `Features
    
    🔍 Kanji search by English meaning
    📘 Detailed kanji information, including onyomi/kunyomi reading and stroke order
    📝 Comprehensive kanji list 
  
    Planned improvements
    - Add English meanings to kanji search results
    - Display words composed by searched kanji
      `,
    link: "https://mikke-kanji.vercel.app/",
  },
  "lunchtime-with-dragon": {
    name: "Lunchtime with Dragon",
    description: `
    A top-down 2D game built using only C, playable directly from the computer terminal.
    
    You play as a baby dragon, whose objective is to collect all of the fruits on the screen, before depositing them in the lunch basket.

    The game has been built using C and the MLX42 library, which is an open-source alternative of the miniLibX.
    This was a mandatory project in the Hive Helsinki curriculum.
    
    The theming and graphics could be chosen freely, so I went with a colorful, cozy vibe.
    I designed the sprites for the dragon and the lunch basket, and the rest of the sprites were sourced from itch.io.`,

    details: `Project specifications
    
    - The program will receive, as the only argument, a map of a .ber (binary file) filetype.
    - The map must be square/rectangular, i.e. all rows must be of equal length.
    - The map must be closed, i.e. surrounded by walls.
    - There must be at least one exit, one player, and one collectible on the map.
    - The game map accepts only P (player), 1 (wall), 0 (floor), C (collectible), and E (exit) characters.
    - If any of these checks fail, the game must not render, and display a descriptive error message in the terminal.`,
    link: "https://github.com/paularynty/so_long/",
  },
};
