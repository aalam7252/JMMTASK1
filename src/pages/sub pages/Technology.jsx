import React from 'react'
import v1 from '../../assets/MP4/v1.mp4'
import bgimg from '../../assets/PNG/bgimg.jpg'
import vector from '../../assets/PNG/Vector.png'
import vector1 from '../../assets/PNG/Vector1.png'
import Footer from '../../components/Common/Footer'


const Technology = () => {
  return (
    <div className=' h-[200vh]'>
      {/* div main container 1 */}
        <div className='bg-teal-200 h-[50vh] flex flex-col justify-center  pl-14 pt-14 bg-gradient-to-br from-[#5F39FF] to-[#20D9A1] text-white '>
            <div className='text-[70px] font-bebas'>TECHNOLOGICAL INNOVATION</div>
            <div className='text-[16px]'>Home &gt;  Services &gt;  TECHNOLOGICAL  INNOVATION</div>
        </div>
                          {/* div main container 2 */}
        <div className='h-[70vh]   flex justify-between'>
          <div className=' p-14 w-[100%] '>
            <video className='  object-cover h-[100%] w-[100%] rounded-[50px]' autoPlay loop muted>
              <source src={v1} typeof='video/mp4'/>sdnam,nds,am
            </video>
          </div>
              
          <div className='h-[50vh] w-[50%] flex  mt-20  '>
            <div className='h-[100%]   flex relative  w-[100%] '><img className='rounded-md w-[85%] h-[100%] ' src={bgimg} alt="" />  
            <div className='absolute text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] font-mukta text-[28px] font-[700] mt-5 ml-9'>Consultancy Services</div>
            <div className='h-[3px] w-32 absolute top-[17%] ml-10 bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'></div>
            <div className='absolute top-10 leading-10 py-7 text-[18px] text-[700] font-mukta px-10 text-[#727272]'><span className='text-transparent absolute bg-clip-text bg-[#0060B7] font-mukta text-[18px] top-8'>Technology Innovation </span><br /> Business Case and Pricing <br /> Customer Support <br /> Alliance & Eco System <br /> Digital Crisis & Disaster Management <br /> Digital Governance & Policy <br /> Digital Analytics</div>
            </div>
          </div>
        </div>

        {/* div main container 3 */}

        <div className='px-14  relative h-[80vh]'>
          <div>
            <div>
              <div className='text-[#3A3A3A] text-[54px] font-bebas'>TEHNOLOGICAL <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'> INNOVATION </span></div>
              <div className='font-mukta'>Staying ahead in today’s fast-paced digital landscape requires constant innovation. Our approach to technological innovation is <br /> comprehensive, from initial technology assessments to full-scale implementation plans. <br />

                 <br />  By understanding your unique business needs, we tailor our recommendations and strategies to maximize your return on <br /> investment and minimize disruption.</div>
            </div>

            <div className='mt-10 flex gap-5'>
              <div className='relative bg-[#00CC851A] h-[30vh] w-[33%] mt-[2%] rounded-3xl'>
                <div className='bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] px-5 py-5 rounded-lg absolute top-[-30px] left-[6%]'><img className='w-[28px] h-[25px]' src={vector} alt="error vector" /></div>
                <div className='top-20 absolute ml-[10%] font-mukta text-[22px] text-[#3A3A3A]'>Technology Assessments</div>
                <div className='text-[#727272] absolute top-28 ml-[10%]  font-mukta text-[16px] '>In-depth evaluations to pinpoint technological <br /> opportunities for business growth and efficiency.</div>
              </div>
              
              
              <div className='relative bg-[#00CC851A] h-[30vh] w-[33%] mt-[2%] rounded-3xl'>
                <div className='bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] px-5 py-5 rounded-lg absolute top-[-30px] left-[6%]'><img className='w-[28px] h-[25px]' src={vector1} alt="error vector" /></div>
                <div className='top-20 absolute ml-[10%] font-mukta text-[22px] text-[#3A3A3A]'>Technology Assessments</div>
                <div className='text-[#727272] absolute top-28 ml-[10%]  font-mukta text-[16px] '>In-depth evaluations to pinpoint technological <br /> opportunities for business growth and efficiency.</div>
              </div>
            
          </div>

          <div>
              <div className='h-[60vh] w-[32%] flex  mt-20 absolute top-[-20px] right-[0px]'>
                <div className='h-[100%]   flex relative  w-[100%] '><img className='rounded-md w-[85%] h-[100%] ' src={bgimg} alt="" />  
                <div className='absolute text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] font-mukta text-[26px] font-[700] mt-8 ml-9'>Development Services</div>
                <div className='h-[3px] w-32 absolute top-[17%] ml-10 bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'></div>
                <div className='absolute top-20 leading-10 text-[18px] font-mukta text-[500] py-7 px-10 text-[#727272]'><span className=' text-[#727272] font-mukta text-[18px] top-8 absolute'>Web Development </span><br /> Mobile Application Development <br /> Cloud Services & Solutions <br /> Infrastructure Services <br /> Digital Support <br /> Data Management <br /> Integration Services <br /> Enterprise Digital Platforms</div>
                </div>
              </div> 
            </div>
          </div>
         </div>

{/* div main container 4 */}


            <Footer/>

    </div>
  )
}

export default Technology