# Ultimate Dream 11 Team Builder

Assemble your dream cricket team with ease! This web application allows you to select your favorite cricket players, track your team and budget, and add free credit to expand your team. Get ready to create the Ultimate Dream 11 team and take your cricket management skills to the next level!

## 📝 Description
The Ultimate Dream 11 Team Builder is an interactive web application for cricket enthusiasts who want to build their ideal team. You can explore available players, add them to your selection, view their stats, and manage your budget dynamically. The app also lets users claim free credit and remove players to optimize their lineup.

## 🚀 Technologies Used   ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)                      
-  **React.js**: For building the user interface and managing state.
-  **JavaScript**: Core programming language.
-  **CSS**: For styling and layout.
-  **JSON**: For data storage of player information.


## ⚙️ Key Features
1. **Player Selection**: Browse a list of available players and add them to your team. Each player has their own stats, including role, country, and bidding price.
```javascript
const addPlayer = (player) => {
  const isExist = players.find((pre_player) => pre_player.playerId === player.playerId);
  if (isExist) {
    alert("Player Already Added");
  } else {
    setPlayers([...players, player]);
    setPrice(price + player.biddingPrice);
  }
};
```
2. **Dynamic Price Management**: The total budget updates based on player selection and allows for free credits. Each player’s bidding price contributes to the total displayed price.
```javascript
 const handleFreeCredit = () => {
  setPrice(price + 6000000);
};
```
3. **View Toggle**: Easily switch between available players and selected players views. Use the "Add More Player" button to navigate back to available players and continue building your team.
```javascript
 const handlePlayers = (status) => {
  setIsAvailable(status === "available");
};
```

 ## Project Live Links: 
 - [Github Private Repository Link](https://github.com/programming-hero-web-course1/b10a7-dream-11-Khalid9080)
 - [Netlify Live Link](https://khalid-dream11-betting-site.netlify.app/)
 - [Surge Live Link](https://khalid-dream-11.surge.sh/)
