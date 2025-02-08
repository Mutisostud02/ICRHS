import { useState } from 'react'
import Header from './components/Header'
import HomeOne from './components/home'
import { HomeTwo, HomeThree } from './components/home'
import FooterDetails from './components/footer'



function App() {

  return (
    <>
    <Header/>
    <div className='intro'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Iste obcaecati architecto reprehenderit veritatis provident
         quasi repellat officiis perferendis corrupti ipsam alias, 
         tempore, non quibusdam distinctio nostrum? Iste, eius! Qui, non?
      </p>
    </div>
    <section className='section1'>
    <HomeOne
    src="/assets/icon-1.webp"
    title="Make a Donation"
    content = "Help support causes like fighting infant mortality, poverty, disease prevention and treatment (HIV/AIDS, TB, malaria, and trachoma), maternal and child healthcare, clean water management, women's rights, and sexual health awareness."
    />
    <HomeOne
    src="/assets/icon-2.webp"
    title="Make a Donation"
    content = "We appreciate any support. Thank you to all of the NGOs and individual donors."
    extraContent = "Become a fundraiser today and offer help to the people who need it most."
    />
    <HomeOne
    src="/assets/icon-3.webp"
    title="Make a Donation"
    content = "Join our global team of volunteers, who are working to create self-sufficient communities in Kenya by helping ICROSS International with fundraising, web development, in-person help with the communities, and much more."
    />
    </section>
    <section className='section2'>
      <h2>Recent Causes</h2>
      <p>Make a donation to support new initiatives for 2021 and beyond.</p>

      <div className='section2group'>
      <HomeTwo
      stylez={{ 
        backgroundImage: "url('/assets/aid1.webp')",
        backgroundPosition: 'center',
        backgroundSize:'cover'
       }}
      title="Laptops for School Children"
      content="
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Expedita incidunt harum non modi illo. Necessitatibus 
                  voluptatem pariatur maxime veniam?"
                  
      />
      <HomeTwo
      stylez={{ 
        backgroundImage: "url('/assets/aid2.webp')",
        backgroundPosition: 'center',
        backgroundSize:'cover'
       }}
      title="Medical Clinic Outreach 4WD"
      content="
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Expedita incidunt harum non modi illo. Necessitatibus 
                  voluptatem pariatur maxime veniam?"
      
      />
      <HomeTwo
      stylez={{ 
        backgroundImage: "url('/assets/aid3.webp')",
        backgroundPosition: 'center',
        backgroundSize:'cover'
       }}
      title="Women Livestock Development"
      content="
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Expedita incidunt harum non modi illo. Necessitatibus 
                  voluptatem pariatur maxime veniam?"
      
      />
      </div>
    </section>
    <section className='section3'>
      <HomeThree
      src="/assets/person.webp"
      size={50}
      title="Michael Meegan"
      content="Founder of ICRHS International"
      />
      <HomeThree
      src="/assets/history.webp"
      size={200}
      title="Our History"
      content="ICROSS began its work among pastoral communities in East Africa in 1979. For over 37 years, we gradually extended the coverage of our work from central Kenya to vulnerable communities in the Western counties of Kenya, particularly in the areas of HIV/AIDS. Our core focus remains endangered pastoral communities"
      />
      <HomeThree
      src="/assets/history2.webp"
      size={200}
      title="Our Mission"
      content="Our goal is to reduce disease, suffering and poverty among the poorest of the poor. Our projects are implemented through the values and beliefs of the people themselves. Together we create self-reliance and work through long-term positive change towards sustainable self-supporting programmes."
      />
      </section>
      <FooterDetails/>
      <hr/>
      <footer>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24px" width="24px" viewBox="0 0 24 24"><title>copyright</title><path d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 10C10.68 9.44 11.19 9.15 11.88 9.14C12.33 9.14 12.74 9.34 13.03 9.63C13.31 9.94 13.5 10.37 13.5 10.8H15.3C15.28 10.33 15.19 9.9 15 9.5C14.85 9.12 14.62 8.78 14.32 8.5C12.87 7.16 10.18 7.35 8.95 8.87C7.66 10.54 7.63 13.46 8.94 15.13C10.15 16.62 12.8 16.83 14.24 15.5C14.55 15.25 14.8 14.94 15 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.5C13.5 13.64 13.43 13.83 13.34 14C13.25 14.19 13.13 14.34 13 14.47C12.67 14.73 12.28 14.87 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.5 10.5 14.27 10.38 14C9.88 13.1 9.96 11.85 10.08 10.86M12 2C6.5 2 2 6.5 2 12C2.53 25.27 21.5 25.26 22 12C22 6.5 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12C4.44 1.39 19.56 1.39 20 12C20 16.41 16.41 20 12 20Z" /></svg>
        <p>ICRHS 2022</p>
        </div>
        <div>
          <p>Terms</p>
          <p>Report problem</p>
        </div>
      </footer>
    </>

  )
}



export default App
