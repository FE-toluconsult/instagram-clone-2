import Button from "@/app/ui/utility/Button"
import Image from "next/image"
import Link from "next/link"

export default function Page() {

  const inputClass = 'placeholder:text-neutral-500 block outline-none focus:border-neutral-400 border w-10/12 border-neutral-200 bg-neutral-100 py-3 px-2 text-xs rounded mx-auto mb-2'
  let afterStroke = 'after:absolute after:bg-neutral-300 after:h-[1px] after:w-28 after:top-2/4 after:left-full'
  let beforeStroke = 'before:absolute before:bg-neutral-300 before:h-[1px] before:w-28 before:top-2/4 before:right-full'


  return (
    <section className="">
      <div className="mt-3 max-w-[350px] w-full flex flex-col mx-auto">
        <div className="form sm:border w-full border-neutral-200 flex flex-col">
          <div className="bg-[url('/img/form-logo.png')] h-[51px] w-[175px] mx-auto mt-11 mb-1 bg-[length:175.32px]"></div>

          <div className="text-center w-10/12 my-3 mx-auto">
            <h4 className="text-primary-gray text-base leading-4 font-bold">Sign up to see photos and videos from your friends.</h4>
          </div>

          <Button className="mt-3 mb-2 text-xs" width={`w-10/12`} id="loginBtn">Log in with Facebook</Button>

          {/* divider */}
          <div className="w-60 mx-auto my-1 flex justify-center items-center">
            <div className={`font-semibold text-neutral-400 px-3 relative ${afterStroke} ${beforeStroke}`}>OR</div>
          </div>

          {/* form  */}
          <form className="w-full text-xs mt-2 pb-2">
            <input className={inputClass}
            type="text" name="email" id="email" aria-label="Mobile Number or email" placeholder="Mobile Number or email" />
            
            <input className={`${inputClass}`} type="text" name="full_name" id="full_name" placeholder="Full Name" aria-label="Full Name" />
            <input className={inputClass} type="text" name="username" id="username" placeholder="Username" aria-label="Username" />
            <input className={inputClass} type="password" name="password" id="password" placeholder="Password" aria-label="Password" />

            <div className="text-center w-10/12 my-3  px-2 mx-auto">
              <div className="text-neutral-600 text-xs">People who use our service may have uploaded your contact information to Instagram. 
              <Link passHref={true} className="text-[#385185]" href="https://www.facebook.com/help/instagram/261704639352628" target="_blank" rel="noopener noreferrer">Learn More</Link>
              </div>

              <div className="text-neutral-600 text-xs mt-3">By signing up, you agree to our <Link passHref={true} className="text-[#385185]" href="https://www.facebook.com/help/instagram/261704639352628" target="_blank" rel="noopener noreferrer">Terms, </Link> 
              <Link passHref={true} className="text-[#385185]" href="https://www.facebook.com/help/instagram/261704639352628" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> and
              <Link passHref={true} className="text-[#385185]" href="https://www.facebook.com/help/instagram/261704639352628" target="_blank" rel="noopener noreferrer"> Cookies Policy</Link>
              </div>
            </div>


            <Button width="w-10/12" className='my-3' type="submit" id="loginBtn"> Sign Up </Button>
          </form>

        </div>

        <div className="form sm:border w-full border-neutral-200 flex flex-col py-5 my-2 text-center">
          <h5 className="text-sm text-black font-medium">Have an account <Link href={`/accounts/login/?source=auth_switcher`} className="text-[#0095f6]">Log in</Link></h5>
        </div>

        <div className="w-full hidden sm:block text-center mt-2">
          <p className="font-normal mx-auto text-sm">Get the app.</p>
          <div className="flex justify-center items-center gap-4 my-2">
            <Image src="/img/apple-image.png" width={136} height={40} className="h-[40px]" alt="appleLogo" />
            <Image src="/img/play-image.png" width={136} height={40} className="h-[40px]" alt="PlayStoreLogo" />
          </div>
        </div>
      </div>
    </section>
  )
}
