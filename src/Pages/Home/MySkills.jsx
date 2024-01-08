import data from "../../data/index.json";

export default function MySkills() {
  return (

    // <section className="py-20 px-10 skills--section" id="mySkills">
    //   <div className="portfolio--container">
    //     <p className="text-2xl font-bold section--title">My Skills</p>
    //     <h2 className="text-4xl font-bold skills--section--heading">My Expertise</h2>
    //   </div>
    //   <div className="flex flex-wrap justify-center items-center gap-8 mt-8 skills--section--container">
    //     {data?.skills?.map((item, index) => (
    //       <div
    //         key={index}
    //         className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md skills--section--card"
    //       >
    //         <div className="skills--section--img">
    //           <img src={item.src} alt="Product Chain" className="w-32 h-32" />
    //         </div>
    //         <div className="text-center mt-4">
    //           <h3 className="text-lg font-semibold skills--section--title">{item.title}</h3>
    //           <p className="text-sm skills--section--description">{item.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
