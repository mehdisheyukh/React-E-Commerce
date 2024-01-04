
function NewsLetter() {
  return (
    <div className='flex flex-col items-center m-auto md:w-2/3 bg-gradient-to-b from-[#fde1ff] gap-8 pr-8 pl-8 mb-36 mt-20 overflow-hidden'>
        <h1 className='text-[#454545] text-3xl md:text-5xl font-semibold pt-10'>Get Exclusive offers On Your Email</h1>
        <p className='text-[#454545] text-base md:text-xl'>Subscribe to our newletter and stay updated</p>
        <div className='flex justify-between bg-white rounded-full border border-solid border-gray-300 md:w-1/2 h-[4.3rem]'>
            <input className='w-1/2 ml-7 text-[#616161] text-base' type="email" placeholder='Your Email id'/>
            <button className='bg-black text-white cursor-pointer text-base rounded-full w-1/3'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter


