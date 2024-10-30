import PropTypes from "prop-types";
const Selected_players = ({ players, handleDeletedPlayer, handlePlayers }) => {
    return (
        <div className="mb-80">

            {players.map((plar) => (


                <div key={plar.playerId} className="flex flex-row items-center justify-between border border-gray-300 rounded-xl mb-2 mt-5">
                    <div className="flex flex-row items-center p-4 gap-4">
                        <img src={plar.image} alt="image" className="w-28 h-24 rounded-xl" />
                        <div className="space-y-1 items-center">
                            <p className="font-bold text-xl">{plar.name}</p>
                            <p className="font-semibold text-base">{plar.battingType}</p>
                            <p className="font-semibold text-base">Price: <i className="fa-solid fa-dollar-sign text-sm"></i> {plar.biddingPrice}</p>
                        </div>
                    </div>

                    <div className="p-4">
                        <button onClick={() => handleDeletedPlayer(plar.playerId)} className=" text-red-400 mr-4 ">
                            <i className="fa-solid fa-trash-can text-xl"></i>
                        </button>
                    </div>
                </div>


            ))}

            <button onClick={() => handlePlayers("available")} className="btn bg-[#E7FE29] text-lg font-bold rounded-xl border-0 mt-4
                              outline outline-[0.13rem] outline-[#131313] outline-offset-4">
                Add More Player
            </button>

        </div>
    );
};

Selected_players.propTypes = {
    players: PropTypes.array.isRequired,
    handleDeletedPlayer: PropTypes.func.isRequired,
    handlePlayers: PropTypes.func.isRequired,
}

export default Selected_players;


