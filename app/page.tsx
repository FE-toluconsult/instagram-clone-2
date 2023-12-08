import dynamic from 'next/dynamic'
import Image from 'next/image';
import Link from 'next/link';

const LoginForm = dynamic(() => import('@/app/ui/auth/LoginForm'), {
  loading: () => <p>Loading...</p>,
});

function Home({searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const queryExists = Object.keys(searchParams).length
  
  return (
    <section className="w-full bg-white flex justify-center gap-7 items-center pt-8">
      {!queryExists && 
        <div className="hidden lg:block bg-[url('/img/home-phones-2x.webp')] bg-[length:468.32px_634.15px] bg-[-42px_0] self-center h-[589px] min-w-[380.32px]" />
      }
      <div className="max-w-[358px] w-full flex flex-col">
        <div className="form sm:border w-full border-neutral-200 flex flex-col">
          <LoginForm />
        </div>

        <div className="form border w-full border-neutral-200 flex flex-col py-5 my-2 text-center">
          <h5 className="text-sm font-medium">Don&apos;t have an account? <Link href="/accounts/emailsignup/" className="text-[#0095f6]">Sign up</Link></h5>
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

export default Home