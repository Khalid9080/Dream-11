import PropType from 'prop-types';
import { useEffect, useState } from 'react';

const Availavble_players = ({ addPlayer }) => {
    const [available_players, setAvailable_players] = useState([]);

    useEffect(() => {
        fetch('./playersData.json')
            .then(res => res.json())
            .then(data => setAvailable_players(data.players));
    }, []);

    return (
        <div className='mb-80'>
            <div className="grid grid-cols-3 gap-7 mt-10">
                {available_players.map(plr => (
                    <div key={plr.playerId} className="card bg-base-100 border-2">

                        <figure className="px-7 pt-7 ">

                            <img
                                src={plr.image}
                                alt="image"
                                className="rounded-xl bg-cover w-full h-[18rem]" />
                                
                        </figure>
                        <div className="card-body space-y-2">
                            <div className='flex flex-row items-center gap-3'>
                                <i className="fa-solid fa-user text-2xl text-[#131313CC]"></i>
                                <h2 className="card-title text-2xl font-bold">{plr.name}</h2>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='flex flex-row items-center gap-3 font-medium text-[#131313B3]'><i className="fa-solid fa-flag"></i><p>{plr.country}</p></div>
                                <button className="btn btn-sm">{plr.role}</button>
                            </div>
                            <div className='border-b'></div>
                            <h3 className='font-bold'>Rating</h3>
                            <div className="flex flex-row items-center justify-between">
                                <h3 className='font-bold'>{plr.battingType}</h3>
                                <h3 className='text-[#131313B3] font-semibold'>{plr.bowlingType}</h3>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <h3 className='font-bold'>Price: <i className="fa-solid fa-dollar-sign text-sm"></i>{plr.biddingPrice}</h3>

                                <button
                                    onClick={() => addPlayer(plr)} className="btn btn-sm">Choose Player
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Availavble_players.propTypes = {
    addPlayer: PropType.func.isRequired,
};

export default Availavble_players;
