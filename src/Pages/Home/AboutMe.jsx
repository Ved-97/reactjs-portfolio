
export default function AboutMe() {
  return (
    <section id="AboutMe" className="grid grid-cols-2 gap-x-20 items-center py-32 px-4">
      
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-4">About Me</h1>
        </div>
        <div className="mt-4">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio.
          </p>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p>
        </div>
      </div>
      
      <div className="border h-fit w-fit ml-10">
        <img src="./img/about-me.jpg" alt="About Me" className="w-full h-full" />
      </div>
    </section>
  );
}

