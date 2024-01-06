
const LoginSingup = () => {
  return (
    <div className='bg-[#fce3fe] flex flex-col items-center h-[50rem] pt-[6rem] overflow-hidden'>
        <div className="bg-white w-1/2 p-8 rounded-lg ">
          <h1>Sing Up</h1>
          <div className="flex flex-col gap-8 mt-8 mb-8 ">
            <input className='h-16 rounded-lg text-[#5c5c5c] text-base' type="text" placeholder='Your Name' />
            <input className='h-16 rounded-lg text-[#5c5c5c] text-base' type="Email" placeholder='Email Address' />
            <input className='h-16 rounded-lg text-[#5c5c5c] text-base' type="password" placeholder='Password' />
          </div>
          <button className='bg-[#ff4141] w-1/2 h-16 text-white rounded-lg cursor-pointer'>Continue</button>
          <p className="text-[#5c5c5c] text-base font-medium">Already have an account <span>Login here</span></p>
          <div className='flex items-center text-[#5c5c5c] text-base font-medium gap-5'>
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSingup;
