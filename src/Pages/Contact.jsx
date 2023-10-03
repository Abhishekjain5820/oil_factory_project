import { oil_plant } from "../assets/images"
import { Nav } from "../components"
import { Footer } from "../sections"
// import { customer2,customer3 } from "../assets/images"

const Contact = () => {
  return (
    <main className='relative'>
    <section>
    <Nav />
    </section>
 
  <section className=' padding'>
    <img
    src={oil_plant}
    className="h-screen w-screen"
    alt="oil_plant"
    />
  </section>
  <section className='padding'>
    <div className="flex flex-col">
        <h1 className=" text-center text-3xl font-bold">Contact Us</h1>
        <div className="flex flex-row justify-between bg-green-100 h-[400px]">
            <div className="text-2xl font-monserrat leading-8 ">
                <h2>Mandsaur Bypass, Mandsaur, <br></br>Madhya Pradesh 458001</h2>
                <h2>Contact No:+91 8787879567</h2>
           
            </div>
            <div className="text-2xl font-monserrat leading-8 ">
            <h2>Mandsaur Bypass, Mandsaur,<br></br> Madhya Pradesh 458001</h2>
            <h2>Contact No:+91 8487879567</h2>
           

            </div>
        
        </div>
    </div>
    
  </section>
  
  <section className='padding-x py-10'>
    
  </section>
  <section className='padding'>
    
  </section>
  <section className='bg-pale-blue padding'>
   
  </section>
  {/* <section className='padding-x sm:py-32 py-16 w-full'>
    <Subscribe />
  </section> */}
  <section className="padding-x sm:py-32 py-16 w-full">

  </section>
  <section className=' bg-black padding-x padding-t pb-8'>
    <Footer />
  </section>
</main>
  )
}

export default Contact