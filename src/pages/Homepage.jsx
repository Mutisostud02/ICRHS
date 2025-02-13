import { HomeOne, HomeTwo,HomeThree } from "../components/home"

export default function HomePage() {
    return (
      <>
      <div className='intro'>
        <p>Join us today</p>
        <h2>Better Life for People</h2>
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
      content = "Join our global team of volunteers, who are working to create self-sufficient communities in Kenya by helping ICRHS International with fundraising, web development, in-person help with the communities, and much more."
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
                  There is a shortage of basic computers for rural child education and training. We hope to provide and supply second-hand used laptops refurbished by volunteers to rural school children and teachers in rural areas of Kenya."
                    
        goal="Goal: $35,000"
        />
        <HomeTwo
        stylez={{ 
          backgroundImage: "url('/assets/aid2.webp')",
          backgroundPosition: 'center',
          backgroundSize:'cover'
         }}
        title="Medical Clinic Outreach 4WD"
        content="
                 Rural villages in desert areas lack sufficient medical clinics or healthcare. We would like to provide a small four-wheel drive supply vehicle. Qualified local medical professionals could visit each remote community/village frequently to provide all public health and clinical medical services needed.
  
  "
  goal="Goal: $45,000"

        
        />
        <HomeTwo
        stylez={{ 
          backgroundImage: "url('/assets/aid3.webp')",
          backgroundPosition: 'center',
          backgroundSize:'cover'
         }}
        title="Women Livestock Development"
        content="
                  Local African women are not financially independent from men. They do not have income-generating sources, which leads to disempowerment and exploitation by society. We would like to provide each village women’s gathering with goats, so that they can generate income for local mothers and their families."
                  goal="Goal: $25,000"
        
        />
        </div>
      </section>
      <section className='section3'>
        <HomeThree
        src="/assets/person.webp"
        size={50}
        title="Andrew Sang Kirwa"
        content="Founder of ICRHS International"
        />
        <HomeThree
        src="/assets/history.webp"
        size={200}
        title="Our History"
        content="ICRHS began its work among pastoral communities in East Africa in 2005. For over 19 years, we gradually extended the coverage of our work from central Kenya to vulnerable communities in the Western counties of Kenya, particularly in the areas of HIV/AIDS. Our core focus remains endangered pastoral communities"
        />
        <HomeThree
        src="/assets/history2.webp"
        size={200}
        title="Our Mission"
        content="Our goal is to reduce disease, suffering and poverty among the poorest of the poor. Our projects are implemented through the values and beliefs of the people themselves. Together we create self-reliance and work through long-term positive change towards sustainable self-supporting programmes."
        />
        </section>
        </>
    )
  
  }