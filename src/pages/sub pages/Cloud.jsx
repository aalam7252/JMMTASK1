import React from 'react'
import v10 from '../../assets/MP4/v10.mp4'
import bgimg from '../../assets/PNG/bgimg.jpg'
import vector from '../../assets/PNG/Vector.png'
import vector1 from '../../assets/PNG/Vector1.png'
import Footer from '../../components/Common/Footer'


const Cloud = () => {
  return (
    <div className=' h-[200vh]'>
      {/* div main container 1 */}
        <div className='bg-teal-200 h-[50vh] flex flex-col justify-center  pl-14 pt-14 bg-gradient-to-br from-[#5F39FF] to-[#20D9A1] text-white '>
            <div className='text-[70px] text-[700] font-bebas'>Cloud Services & Solutions </div>
            <div className='text-[18px] text-[500] font-mukta'>Home &gt;  Services &gt;  Cloud Services & Solutions </div>
        </div>
                          {/* div main container 2 */}
        <div className='h-[70vh]   flex justify-between'>
          <div className=' p-14 w-[100%] '>
            <video className='  object-cover h-[100%] w-[100%] rounded-[50px]' autoPlay loop muted>
              <source src={v10} typeof='video/mp4'/>
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
              <div className='text-[#3A3A3A] text-[54px] font-bebas'>Cloud Services &       <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>Solutions </span></div>
              <div className='font-mukta'>Our cloud services and solutions enable businesses to leverage the power of the cloud for scalability and innovation. We offer <br /> comprehensive cloud migration, management, and optimization services tailored to your specific needs. Our expertise ensures a <br /> smooth transition to the cloud, with minimal disruption to your operations. <br /> <br />

                We provide ongoing support to ensure your cloud infrastructure remains secure and efficient. Our solutions are designed to help <br /> you make the most of cloud  technology, driving business growth and agility.</div>
            </div>

            <div className='mt-10 flex gap-5'>
              <div className='relative bg-[#00CC851A] h-[30vh] w-[33%] mt-[2%] rounded-3xl'>
                <div className='bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] px-5 py-5 rounded-lg absolute top-[-30px] left-[6%]'><img className='w-[28px] h-[25px]' src={vector} alt="error vector" /></div>
                <div className='top-20 absolute ml-[10%] font-mukta text-[22px] text-[#3A3A3A] font-bold'>Cloud Migration</div>
                <div className='text-[#727272] absolute top-32 ml-[10%]  font-mukta text-[16px] '>Facilitating seamless migration to cloud platforms <br /> with minimal disruption.</div>
              </div>
              
              
              <div className='relative bg-[#00CC851A] h-[30vh] w-[33%] mt-[2%] rounded-3xl'>
                <div className='bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] px-5 py-5 rounded-lg absolute top-[-30px] left-[6%]'><img className='w-[28px] h-[25px]' src={vector1} alt="error vector" /></div>
                <div className='top-20 absolute ml-[10%] font-mukta text-[22px] text-[#3A3A3A] font-bold'>Cloud Management</div>
                <div className='text-[#727272] absolute top-32 ml-[10%]  font-mukta text-[16px] text-[400] '>Providing ongoing support and optimization for <br /> cloud infrastructure.</div>
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

export default Cloud
