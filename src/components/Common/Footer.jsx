import React from 'react'

import logo from '../../assets/PNG/Logo.png'
import facebook from '../../assets/PNG/Link.png'
import insta from '../../assets/PNG/Link (1).png'
import twitter from '../../assets/PNG/Link (2).png'
import linkdin from '../../assets/PNG/Link (3).png'
import phone from '../../assets/PNG/Overlay.png'
import mail from '../../assets/PNG/Overlay (1).png'
import location from '../../assets/PNG/Overlay (2).png'

const Footer = () => {
  return (
    <>
    <div className='h-[60vh] bg-gradient-to-l space-x-24 from-green-400 via-teal-500 to-blue-600 bg-[length:280%] p-14 flex text-white '>
                  
                  <div className='gap-10 flex flex-col'>
                    <div><img src={logo} alt="" /></div>
                    <div className='font-mukta text-[16px] text-white'>The point of using Lorem Ipsum is that it <br />
                        has a more-or-less normal distribution of <br />
                        letters, as opposed to using.</div>
                    
                    <div className='flex justify-between w-[90%]'>
                      <div><img src={facebook} alt="" /></div>
                      <div><img src={insta} alt="" /></div>
                      <div><img src={twitter} alt="" /></div>
                      <div><img src={linkdin} alt="" /></div>
                    </div>
                  </div>
                  
                  <div className='flex flex-col gap-6'>
                     <div className='font-mukta text-[20px] text-white'>Consultancy Services</div>
                     <div className='font-mukta text-[16px] text-white leading-9'>Technology Innovation <br /> Business Case & Pricing <br /> Customer Support <br />Alliance & Eco-Systems <br /> Digital Crisis & Disaster Management <br /> Digital Governance & Policy <br /> Digital Analytics</div>
                  </div>
                  
                  <div className='flex flex-col gap-6'> 
                    <div>Technology Development Services</div>
                    <div className='font-mukta text-[16px] text-white leading-9'>Web Development <br /> Mobile Application Development <br /> Cloud Services & Solutions <br /> Infrastructure Services <br />Digital Support <br />Data Management <br />Integration Services <br />Enterprise Digital Platforms</div>
                  </div>
                  
                  
                  
                  
                  <div className='space-y-7'>
                    <div>Get in touch</div>
                    
                    
                    <div className='space-y-2'>
                    <div className='flex space-x-4 items-center'>
                      
                      <div>
                          <img src={phone} alt="" />
                      </div>
                      
                      <div>
                          +966 5687 9999 <br />
                          +966 1234 5678
                      </div>
                    
                    </div>
                    
                    
                    <div className='flex space-x-4 items-center'>
                        <div><img src={mail} alt="" /></div>
                        <div>Info@codeworldeast.com</div>
                    </div>
                    
                    <div className='flex space-x-4 items-center'>
                      <div><img src={location} alt="" /></div>
                      <div>
                            225 Marion Street, <br /> 
                            Riyadh, KSA</div>
                    </div>
                    </div>
                  
                  </div>
              
              </div>

              {/* Main Container 7 */}

              <div className='bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#2b8ce6da] bg-[length:200%] p-5 px-16 font-mukta flex justify-between text-white items-center'>
                <div>Copyright © 2024  Code World East  All Rights Reserved.</div>
                <div>Privacy Policy Terms & Condition</div>
              </div>
    </>
  )
}

export default Footer