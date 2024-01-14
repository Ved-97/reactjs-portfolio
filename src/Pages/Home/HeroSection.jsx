export default function HeroSection() {
  return (
    <section id="heroSection" class="hero--section bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." >
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vedant</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          With a knack for crafting seamless digital experiences. 
            <br /> Transforming ideas into elegant code for a smarter, connected world.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
