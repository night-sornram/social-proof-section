import Image from 'next/image'


export default function Home() {
  return (
    <div className=' w-screen h-screen flex flex-col justify-center items-center'>
      <div className=' w-5/6 sm:h-auto h-full'>
        <div className=' flex sm:flex-row flex-col  justify-between items-center w-full'>
          <div className=' flex flex-col w-full justify-center items-center sm:justify-normal sm:items-start sm:w-1/2 pt-20 sm:pt-0 '>
            <div className=' text-custom-100 w-2/3 text-5xl font-extrabold sm:text-3xl md:text-5xl text-center sm:text-start '>
              10,000+ of our users love our products.
            </div>
            <div className=' text-custom-300 my-5 w-4/6 text-center sm:text-start pt-3 sm:pt-0'>
              We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services. 
            </div>
          </div>
          <div className=' flex flex-col w-full sm:w-1/2 justify-start items-center'>
            <div className=' bg-custom-400 flex flex-col text-center sm:flex-row w-full sm:w-5/5 md:w-4/5 lg:w-3/5 justify-between items-center p-3 rounded-lg my-5 sm:mr-10 lg:mr-40'>
              <div className=' flex flex-row justify-around w-1/3 '> 
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
              </div>
              <div className=' w-2/3 ml-5  sm:text-xs lg:text-sm text-custom-100 font-bold pt-3 sm:pt-0'>
                Rated 5 Stars in Reviews
              </div>
            </div>
            <div className=' bg-custom-400 flex flex-col text-center sm:flex-row w-full sm:w-5/5 md:w-4/5 lg:w-3/5 justify-between items-center p-3 rounded-lg sm:mr-5 lg:mr-20'>
              <div className=' flex flex-row justify-around w-1/3 '> 
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
              </div>
              <div className=' w-2/3 ml-5 sm:text-xs lg:text-sm text-custom-100 font-bold pt-3 sm:pt-0'>
                Rated 5 Stars in Report Guru
              </div>
            </div>
            <div className=' bg-custom-400 flex flex-col text-center sm:flex-row w-full sm:w-5/5 md:w-4/5 lg:w-3/5 justify-between items-center p-3 rounded-lg my-5 '>
              <div className=' flex flex-row justify-around w-1/3 '> 
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
                <img src='/images/icon-star.svg' alt='star'></img>
              </div>
              <div className=' w-2/3 ml-5  sm:text-xs lg:text-sm text-custom-100 font-bold pt-3 sm:pt-0'>
                Rated 5 Stars in BestTech
              </div>
            </div>
            
          </div>
        </div>
        <div className=' flex flex-col sm:flex-row justify-around items-center w-full mt-10'>
          <div className=' flex flex-col bg-custom-100 py-5 px-7 sm:py-2 lg:py-5 sm:px-3 lg:px-7 rounded-lg'>
            <div className=' flex flex-row mt-5'>
              <Image
              src={"/images/image-colton.jpg"}
              alt='colton'
              width={50}
              height={50}
              className=' rounded-full sm:w-10 sm:h-10  lg:w-14 lg:h-14'/>
              <div className=' flex flex-col ml-5 justify-center'>
                <div className=' sm:text-xs lg:text-sm text-sm font-bold text-white'>
                  Colton Smith 
                </div>
                <div className=' sm:text-xs lg:text-sm text-sm text-custom-200'>
                  Verified Buyer
                </div>
              </div>
            </div>
            <div className='sm:text-xs lg:text-sm text-sm text-white   mb-5 mt-7 sm:mt-4 lg:mt-7 sm:mb-2 lg:mb-5'>
              "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
            </div>
            
          </div>
          <div className=' flex flex-col bg-custom-100 py-5 px-7 sm:py-2 lg:py-5 sm:px-3 lg:px-7 mt-6 sm:mt-6 rounded-lg sm:mx-10'>
            <div className=' flex flex-row mt-5'>
              <Image
              src={"/images/image-irene.jpg"}
              alt='irene'
              width={50}
              height={50}
              className=' rounded-full sm:w-10 sm:h-10  lg:w-14 lg:h-14'/>
              <div className=' flex flex-col ml-5 justify-center'>
                <div className=' sm:text-xs lg:text-sm text-sm font-bold text-white'>
                  Irene Roberts
                </div>
                <div className=' sm:text-xs lg:text-sm text-sm text-custom-200'>
                  Verified Buyer
                </div>
              </div>
            </div>
            <div className='sm:text-xs lg:text-sm text-sm text-white  mb-5 mt-7 sm:mt-4 lg:mt-7 sm:mb-2 lg:mb-5'>
              "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
            </div>
            
          </div>
          <div className=' flex flex-col bg-custom-100 mt-6 mb-10 sm:mb-0 sm:mt-12 px-7 py-5 sm:py-2 lg:py-5 sm:px-3 lg:px-7 rounded-lg'>
            <div className=' flex flex-row mt-5'>
              <Image
              src={"/images/image-anne.jpg"}
              alt='anne'
              width={50}
              height={50}
              className=' rounded-full sm:w-10 sm:h-10  lg:w-14 lg:h-14'/>
              <div className=' flex flex-col ml-5 justify-center'>
                <div className=' sm:text-xs lg:text-sm text-sm font-bold text-white'>
                  Anne Wallace
                </div>
                <div className='sm:text-xs lg:text-sm text-sm text-custom-200'>
                  Verified Buyer
                </div>
              </div>
            </div>
            <div className=' sm:text-xs lg:text-sm text-sm text-white  mb-5 mt-7 sm:mt-4 lg:mt-7 sm:mb-2 lg:mb-5'>
              "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )}

    