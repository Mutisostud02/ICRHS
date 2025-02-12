import { HomeTwo } from "../components/home"
export default function Services() {
    return (
    <>
      <div className='services-header'>
        <h1>What We Do</h1>
        <p>Learn about ICRHS International's key areas of focus.</p>
    <p><a>Home</a>/WHAT WE DO</p>
      </div>
      <section className="services-section">
        <Section1
        title="ICRHS International is dedicated to the following:"
        >
            <li>We prevent diseases and control epidemics.</li>
            <li>We create long-term changes in infant mortality.</li>
            <li>We are creating low cost-effective solutions to break the cycle of poverty.</li>
            <li>We train, educate and support thousands of local people to be self-sufficient.</li>
            <li>We believe in evidence led public health programmes responding to the realities on the ground.</li>
            <li>We support communities in helping orphaned children and help them respond to poverty in the villages.</li>
            <li>We identify the most vulnerable children & communities and provide practical immediate help and long term solutions so they will be independent.</li>
            <li>We see what is working and find out what is effective through scientific study and research. Working with international institutions we have published widely on new innovative responses to disease and poverty.</li>
        </Section1>
        <section>
            <h3>Featured campaigns</h3>
            <div className="services-group2">
             <HomeTwo
                    stylez={{ 
                      backgroundImage: "url('/assets/services.jpeg')",
                      backgroundPosition: 'center',
                      backgroundSize:'cover'
                     }}
                    title="Community Owned Primary Healthcare"
                    content="This covers child survival, training traditional birth attendants, reduction of maternal deaths, gender rights awareness, commercial sex workers support, female circumcision harm reduction, safe motherhood, education and girls."  
            />
            <HomeTwo
                    stylez={{ 
                      backgroundImage: "url('/assets/services2.jpeg')",
                      backgroundPosition: 'center',
                      backgroundSize:'cover'
                     }}
                    title="Poverty Reduction"
                    content="This includes training health workers in desert areas, trachoma blindness control, diarrhea control, tribal community health programmes, surgical training, and desertification projects." 
            />
            <HomeTwo
                    stylez={{ 
                      backgroundImage: "url('/assets/services3.jpeg')",
                      backgroundPosition: 'center',
                      backgroundSize:'cover'
                     }}
                    title="Children Rights, Gender and Development"
                    content="This covers child-to-child sanitation and hygiene, pediatric disease control, child survival, immunization, primary health care, infant mortality control, AIDS orphans and vulnerable children’s rights, child health promotion."
            />
            <HomeTwo
                    stylez={{ 
                      backgroundImage: "url('/assets/services4.jpeg')",
                      backgroundPosition: 'center',
                      backgroundSize:'cover'
                     }}
                    title="Community Strengthening"
                    content="This includes disease surveillance, women's group developments, technical support to small organisations, legal and material support, water and sanitation projects, ICRHS resource leverage, partnership development and networking."
            />
                    <HomeTwo
                    stylez={{ 
                      backgroundImage: "url('/assets/services5.jpeg')",
                      backgroundPosition: 'center',
                      backgroundSize:'cover'
                     }}
                    title="HIV/AIDS, TB and Malaria Prevention"
                    content="This covers disease surveillance, women's group developments, technical support to small organisations, legal and material support, water and sanitation projects, ICRHS resource leverage, partnership development and networking."   
            />
                    <HomeTwo
                    stylez={{ 
                      backgroundImage: "url('/assets/services6.jpeg')",
                      backgroundPosition: 'center',
                      backgroundSize:'cover'
                     }}
                    title="Poverty Awareness"
                    content="This includes campaigning for child health, human rights, health rights and water rights."
            />
            </div>
        </section>
      </section>
      </>

    )
}

function Section1({title, children}) {
    return (
        <div className="services-content">
            <h3>{title}</h3>
            <ul>
                {children}
            </ul>
        </div>
    )
}