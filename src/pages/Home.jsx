import Hero from '../components/Hero'
import HomeServices from '../components/HomeServices' // Updated import
import WhyChooseUs from '../components/WhyChooseUs'



export default function Home() {
  return (
    <div>
      <Hero />
      <HomeServices /> 
      <WhyChooseUs />
    </div>
  )
}