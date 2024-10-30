import Availavble_players from "./components/Availavble_players";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Selected_players from "./components/Selected_players";
import Player_view from "./components/Player_view";
import { useState } from "react";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";




function App() {
  const [players, setPlayers] = useState([]);
  const [price, setPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true); // True for available view, false for selected view

  const addPlayer = (player) => {
    const isExist = players.find((pre_player) => pre_player.playerId === player.playerId);
    if (isExist) {
      alert("Player Already Added");
    } else {
      setPlayers([...players, player]);
      setPrice(price + player.biddingPrice); // Add bidding price to total price
    }
  };


  const handleFreeCredit = () => {
    setPrice(price + 6000000); // Add 6,000,000 to price
  };

  const handleDeletePrice = (id) => {
    const deletePlayer = players.find((player) => player.playerId === id);
    if (deletePlayer) {
      setPrice(price - deletePlayer.biddingPrice);
    }
  };

  const handleDeletedPlayer = (id) => {
    handleDeletePrice(id); // Pass the id to handleDeletePrice
    const newPlayers = players.filter((player) => player.playerId !== id);
    setPlayers(newPlayers);
  };

  const handlePlayers = (status) => {
    setIsAvailable(status === "available");
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-10">
        <Navbar price={price} />
        <Banner handleFreeCredit={handleFreeCredit} /> {/* Pass handleFreeCredit to Banner */}
        <Player_view players={players} handlePlayers={handlePlayers} isAvailable={isAvailable} />
        
        <section>
          {isAvailable ? (
            <Availavble_players addPlayer={addPlayer} />
          ) : (
            <Selected_players players={players} handleDeletedPlayer={handleDeletedPlayer} handlePlayers={handlePlayers} />
            
          )}
        </section>

      
        <div className="relative my-10 ">
            <Newsletter />
            
        </div>

      </div>

      <Footer />
    </>
  );
}

export default App;
