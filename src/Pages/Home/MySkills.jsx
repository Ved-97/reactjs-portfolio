import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className=" px-10 flex flex-col justify-center items-start gap-15 " id="mySkills">
      <div className="flex flex-col items-start gap-5">
        <p className="text-2xl font-bold text-heading-color leading-10 mt-8">My Skills</p>
        <h2 className="text-5xl font-bold text-heading-color leading-10">My Expertise</h2>
      </div>
      <div className="grid justify-center items-start gap-8 mt-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-8 bg-bg-shade rounded-lg shadow-md space-y-8 items-center flex-1 min-h-64 transition duration-300 transform hover:border-b-4 hover:border-primary hover:text-darkblue"
          >
            <div className="flex justify-center items-center bg-white shadow-md gap-5 rounded-lg ">
              <img src={item.src} alt="Skills Chain" className="w-16 h-16" />
            </div>
            <div className="text-center mt-4">
              <h3 className=" text-heading-color text-2xl font-bold leading-10 mt-2">{item.title}</h3>
              <p className=" text-black font-normal ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
