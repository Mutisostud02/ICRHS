import Message from "../components/message"
import { Link } from "react-router-dom"
export default function AboutPage() {
    return (
      <>
      <div className='about-intro'>
        <h1>About Us</h1>
        <p>International Community for the Relief of Starvation & Suffering
  is an international NGO with a long history working in partnership with
  civil society organisations, non-governmental organisations, governments
  and bilateral agencies, including the Global Fund, the European Union,
  the World Health Organisation, UNICEF, and other local communities.
  </p>
    <p><a><Link to="/home">Home</Link></a>/About</p>
      </div>
      <div className="about-section1">
      <Section1 src="/assets/about2" />
      <Section2/>
      <div className="message">
      <Message
      title="Africanisation"
      >
      <p>We are proud that since 2001 all ICRHS programmes were completely managed by Africans. All project managers, supervisors, trainers, field teams and community staff are African. While these teams provide learning opportunities for intern and volunteer partnerships, the Africanisation of all projects has been a vital component of the success and continuity of the programmes.
      </p>
      </Message>
      <Message 
      title="Gender"
      >
      <p>
        ICRHS is an equal opportunity employer. As part of our Gender policy, we have actively recruited women into senior management positions. The majority of project managers and field coordinators are women, and the great majority of field staff are women. ICRHS focuses all its core programme development on gender.
      </p>
      </Message>
      <Message
      title="Ownership"
      >
        <p>Programmes are not owned or driven by donors but by local communities</p>
      </Message>
      <Message
      title="Whose Reality"
      >
        <p>As part of corporate accountability ICRHS places the beliefs, values, cultural structures and hopes of the local people at the centre of planning, decision making and planning. With a strong inclusion policy and partnership in local language, we work towards programmes that have their roots in local communities.</p>
      </Message>
      <Message
      title="Transparency"
      >    
      <p>As part of our policy of accountability to our donors ICRHS continually strives to improve its financial systems and procedures. With rural projects scattered across geographical areas larger than Ireland, there are challenges to ensure best practices and accountability of resources in Africa. ICRHS and our donors undertake frequent internal and external audits with annual external audits of all programmes.</p>
      <p>As part of continual improvements and strengthening of the organization, we conducted external organization and management reviews and have recently commissioned Ernst and Young to carry out a comprehensive financial review of all financial systems, structures procedures and operations. Our commitment is to best practices of transparency and collective accountability. ICRHS insists on the highest standards from its entire staff as well as ensuring due diligence and the highest work ethics. Our code of conduct is based upon international gold standards and ensures not only equality and ethics, but transparency and integrity.</p>
      <p>We are currently extending the Global fund accounting system into all new programmes being implemented.</p>
      <p>External audits and comprehensive financial records are available to partners including Governments through our national offices.</p>
      
      
      </Message> 
      
      </div>
     
      
      </div>
      </>
    )
  }
  
  function Section1 ({src}) {
    return (
        <div className="about-group1">
             <img src={src} style={{minWidth:"320px", maxWidth:"500px"}}/>
            <div className="about-group1Info">
            <h2>Mission Statement</h2>
            <p style={{marginBottom:'1rem'}}>Our goal is to reduce disease, suffering and poverty among the poorest of the poor. Our projects are implemented through the values and beliefs of the people themselves.</p>
            <p>Together we create self-reliance and work through long-term positive change towards sustainable self-supporting programmes.</p>
            <Link to="/services"><button>What We Do</button></Link>
            </div>
        </div>
    )
  }

    function Section2 () {
    return (
        <>
        <h1>Our History</h1>
        <div className="about-group2">

            <div id="image">
             <img src="/assets/about2" style={{width:"250px"}}/>
             <img src="/assets/about3" style={{width:"250px"}}/>
             <img src="/assets/about4" style={{width:"250px"}}/>
             <img src="/assets/about5" style={{width:"250px"}}/>
            </div>
            <div className="about-group2Info">
            <p style={{marginBottom:'1rem'}}>ICRHS began its work among pastoral communities in East Africa in 2005. For over 19 years, we gradually extended the coverage of our work from central Kenya to vulnerable communities in the Western counties of Kenya, particularly in the areas of HIV/AIDS.</p>
            <p>We have worked in Samburu, Kajiado, Nakuru, Bungoma, Nzoia, Siaya, Bondo, Buret and Mumias in Kenya and Arusha, Dodoma and Monduli in Tanzania.</p>
            <p>In addition, we have provided technical and material support to an extensive network of partner National local NGOs and faith-based projects in 7 African countries and 5 in Asia. This has included the first series of global health courses in Nepal lectures in international development in Cambodia as well as program evaluations in other Southeast Asian countries.</p>
            <p>Our core focus remains endangered pastoral communities across Kenya’s Rift Valley.</p>
            </div>
        </div>
        </>
    )
  }