import PropType from 'prop-types';

const Navbar = ({price}) => {
    return (
        <div className="flex flex-row justify-between items-center">

            <img src="./logo.png" alt="" />
           

            <div className="space-x-16 flex flex-row justify-between items-center text-[#131313B3] font-semibold">
                <h3>Home</h3>
                <h3>Fixture</h3>
                <h3>Teams</h3>
                <h3>Schedules</h3>

                <div className="flex flex-row justify-between items-center space-x-2 text-gray-900 font-bold text-xl border-2 px-5 py-2 rounded-xl">
                    <h4>${price}</h4>
                    <h4>Coin</h4>
                    <img src="./coin.png" alt="" />
                </div>
                
            </div>
  
        </div>
    );
};

Navbar.propTypes = {
    price: PropType.number.isRequired,
};

export default Navbar;