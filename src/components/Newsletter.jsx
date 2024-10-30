import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className=''>
      <div
        className="absolute left-0 right-0 mx-auto bg-cover rounded-3xl w-full h-full md:h-[25rem] -bottom-60 mb-10 outline outline-[0.15rem] outline-white "
        style={{
          backgroundImage: `linear-gradient(to top right,#aed6f1 ,#fdfefe , #fdfefe,#fed7aa), url('https://i.ibb.co/mTM4h2r/bg-shadow.png')`,
          backgroundBlendMode: 'overlay',
          filter: 'blur(0.005rem)',
          outlineOffset: '1.5rem',
         
        }}
      >
        <div className='flex flex-col items-center text-center justify-center my-28 '>

       
          <div className='space-y-4 '>
            <h1 className='text-4xl font-bold '>Subscribe to our Newsletter</h1>
            <h2 className='text-2xl font-semibold text-[#131313B3]'>Get the latest updates and news right in your inbox!</h2>
          </div>

          <div className='flex flex-row space-x-3 items-center mt-8 '>
          <input type="text" placeholder="Enter your email" className="input input-lg input-bordered text-xl font-normal w-96 rounded-2xl px-10 " />
          <button className=" items-center w-40 btn btn-lg text-xl rounded-2xl bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 shadow-inner shadow-gray-500/50">Subscribe</button>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Newsletter;
