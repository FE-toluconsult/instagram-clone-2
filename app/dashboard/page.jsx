import SideNav from '@/app/ui/SideNav'
import Footer from '@/app/ui/Footer'

function Page() {
  return (
    <div className='w-full h-full bg-white relative'>
    <SideNav />

    <div className='body ml-auto h-full flex flex-col'>
      <Footer />
    </div>
  </div>
  )
}

export default Page