/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Header from "@/app/ui/Header"

function page() {
  let errorMessage = ''

  const inputClass = 'block outline-none focus:border-neutral-400 border w-9/12 border-neutral-200 bg-neutral-100 p-2 text-xs rounded mx-auto mb-2'
  let afterStroke = 'after:absolute after:bg-neutral-300 after:h-[1px] after:w-32 after:top-2/4 after:left-full'
  let beforeStroke = 'before:absolute before:bg-neutral-300 before:h-[1px] before:w-32 before:top-2/4 before:right-full'



  return (
    <>
      <Header />
      <section className="mt-12">
        <div className="pt-8 max-w-[388px] w-full flex flex-col mx-auto">
          <div className="form sm:border w-full border-neutral-200 flex flex-col">
            <div className="bg-[url('/img/form-logo-2.png')] h-[96px] w-[99px] mx-auto mt-9 mb-1 bg-[length:440.32px] bg-[19.6rem_top]"></div>

            <div className="text-center w-10/12 mx-auto">
              <h2 className=" text-black font-medium text-lg my-2">Trouble logging in?</h2>
              <p className="text-primary-gray text-sm">Enter your email, phone, or username and we'll send you a link to get back into your account</p>
            </div>

            {/* form  */}
            <form className="w-full text-xs mt-4">
              <input className={inputClass}
              type="text" name="username" id="username" placeholder="Phone number, username, or email" />


              <input className="block mt-3 mb-2 mx-auto bg-[#0095f6] py-2 w-9/12 rounded border-[#0095f6] text-white font-bold disabled:opacity-50" 
              type="submit" value="Send login link" name="loginBtn" id="loginBtn" />
            </form>
            <div className="w-full text-center">
              {!!errorMessage && <div className="text-sm text-red-600 mx-10 my-2 font-medium">{errorMessage}</div>}
              <Link href={`/accounts/password/reset`} className="text-[#385185] font-normal mb-3 mx-auto text-sm">Can't reset your password?</Link>
            </div>
            {/* divider */}
            <div className="w-60 mx-auto mt-7 flex justify-center items-center">
              <div className={`font-semibold text-neutral-400 px-3 relative ${afterStroke} ${beforeStroke}`}>OR</div>
            </div>

            <div className="w-full text-center mt-3">
              <Link href={`/accounts/emailsignup/`} className="text-[#385185] text-base font-semibold mx-auto">Create new account</Link>
            </div>

            <div className="w-full mt-16 pt-1">
              <Link href={`/accounts/login?source=reset_password`} className="font-medium text-[#262626] border border-neutral-200 inline-flex items-center justify-center bg-[#fafafa] w-full h-11">Back to login</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default page