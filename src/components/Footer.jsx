
import './Footer.css';


const Footer = () => {
    return (

        <div className="bg-[#06091A] mt-10 space-y-10">
            <div className="flex flex-col items-center justify-center ">
                <div className="mt-64 mb-14">
                    <img src="./logo-footer.png" alt="" />
                </div>

                <div className="flex flex-row gap-x-72 mb-16 ml-20">
                    <div className="space-y-5">
                        <h1 className="text-xl font-semibold text-white ">About Us</h1>
                        <h3 className="text-[#FFFFFF99] text-lg "> We are a passionate team <br /> dedicated to providing the best <br />services to our customers.</h3>
                    </div>

                    <div className='mr-48'>
                        <h1 className="text-xl font-semibold text-white mb-5">Quick Links</h1>
                        <ul className="text-[#FFFFFF99] text-lg space-y-5">
                            <li><i className="fa-solid fa-square text-xs mr-3"></i>Home</li>
                            <li><i className="fa-solid fa-square text-xs mr-3 "></i>Service</li>
                            <li><i className="fa-solid fa-square text-xs mr-3"></i>Avout</li>
                            <li><i className="fa-solid fa-square text-xs mr-3"></i>Contact</li>
                        </ul>
                    </div>

                    <div className='mr-32 space-y-3'>
                        <h1 className="text-xl font-semibold text-white mb-5 ">Subscribe</h1>
                        <h3 className="text-[#FFFFFF99] text-lg">Subscribe to our newsletter for the <br /> latest updates.</h3>
                        <div className='flex flex-row'>
                            <label className="input input-bordered flex items-center gap-2 font-semibold border-r-0 rounded-r-none rounded-xl"> 
                            <input type="text" className="grow" placeholder="Enter your email" />
                        </label>
                        <button className="px-8 btn py-2 text-lg  border-l-0  rounded-l-none rounded-xl bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 shadow-inner shadow-gray-500/50">Subscribe</button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>

            <div className='footer-border m-7'></div>

            <div className="text-center pb-7">
                <h1 className="text-[#FFFFFF99] text-lg bg-[#06091A] ">@2024 Your Company All Rights Reserved.</h1>
            </div>

        </div>



    );
};

export default Footer;
