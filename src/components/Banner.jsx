import './Banner.css';
import PropTyeps from 'prop-types';
const Banner = ({ handleFreeCredit }) => {
  return (
    <div className="bg bg-cover bg-no-repeat rounded-3xl w-full md:w-full h-full md:h-[35.5rem] mt-10"
         style={{ backgroundImage: 'url(https://i.ibb.co.com/mTM4h2r/bg-shadow.png)' }}>
          
      <div className='flex flex-col items-center justify-center text-center mt-10'>
        <div className='mt-20 space-y-5'>
          <div className='ml-96'> <img src="./banner-main.png" alt="" /></div>
          <h1 className='text-5xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <h2 className='text-2xl font-semibold text-[#FFFFFFB3]'>Beyond Boundaries Beyond Limits</h2>
          <div className='p-3 ring-offset-2'>
            
            <button 
             onClick={handleFreeCredit}  // Call handleFreeCredit on click
              className="btn bg-[#E7FE29] text-lg font-bold rounded-xl border-0 outline outline-[0.15rem] outline-[#E7FE29] outline-offset-8">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
Banner.propTypes = {
  handleFreeCredit: PropTyeps.func.isRequired,
};
  
export default Banner;
