
import { oil_plant } from "../assets/images"
import { Nav } from "../components"
import { Footer } from "../sections"
import { customer2 } from "../assets/images"
const About = () => {
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
            <h1 className=" text-center text-3xl font-bold">About Us</h1>
            <div className="text-2xl font-monserrat leading-8">
            Welcome to Kripa Biotech, where we bring together the realms of cutting-edge science and sustainable innovation. At [Your Biotech Plant Name], we are driven by a profound dedication to shaping a brighter and healthier future for our planet and its inhabitants.
            Our journey commenced with a simple yet powerful vision: to harness the incredible potential of biotechnology to address some of the worlds most pressing challenges. We haveve since evolved into a state-of-the-art facility equipped with the latest technologies and staffed by a team of experts who share our mission and commitment.

            We pride ourselves on being pioneers in the field, consistently striving to revolutionize biotech solutions that contribute to a more sustainable world. Whether it is advancements in pharmaceuticals, breakthroughs in agriculture, or innovations in environmental stewardship, we are at the forefront, continuously pushing boundaries and fostering positive change.

            What sets us apart is our unwavering dedication to sustainability, which is deeply ingrained in every aspect of our operations. We believe in minimizing our environmental footprint and promoting responsible practices, ensuring that our work benefits both humanity and the planet.
            </div>
        </div>
        
      </section>
      <section className='padding'>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0">
            <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gray-300 rounded-full overflow-hidden">
            <img
            src={customer2} // Replace with the actual path or URL of the founder's photo
            alt="Founder"
            className="w-full h-full object-cover"
          />
            </div>
            {/* Founder Information */}
            <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-semibold">Founders Name</h2>
                <p className="text-gray-600">Founder, [Company Name]</p>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet libero eget
                    velit consectetur...
                </p>
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

export default About