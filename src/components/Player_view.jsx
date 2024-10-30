
import PropTypes from "prop-types";

const Player_view = ({ players, handlePlayers, isAvailable }) => {
  return (
    <div className="flex flex-row justify-between items-center mt-16">
      <div className="text-2xl font-bold text-black">
        <h2>{isAvailable ? "Available Players" : `Selected Players (${players.length}/10)`}</h2>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button
          className={`border border-r-0 px-8 py-2 rounded-l-lg text-xl font-semibold ${
            isAvailable ? "bg-[#E7FE29]" : ""
          }`}
          onClick={() => handlePlayers("available")}
        >
          Available
        </button>

        <button
          className={`border border-l-0 px-8 py-2 rounded-r-lg text-xl font-semibold ${
            !isAvailable ? "bg-[#E7FE29]" : ""
          }`}
          onClick={() => handlePlayers("selected")}
        >
          Selected ({players.length})
        </button>
      </div>
    </div>
  );
};

Player_view.propTypes = {
  players: PropTypes.array.isRequired,
  handlePlayers: PropTypes.func.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default Player_view;
