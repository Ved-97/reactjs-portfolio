export default function HeroSection() {
    return (
       <section id="heroSection" className="hero--section">
        <div className="hero--section--content-box">
           <div className="hero--section-content">
             <p className="section--title">Hey, I'm Vedant</p>
             <h1 className="hero--section--title">
                <span className="hero--section-title--color">
                Front End
                </span>{""}
                <br />
                Developer
             </h1>
                <p className="hero--section-description"> Welcome to my Portfolio,
                <br />  Would you like to watch some cool stuff that I make and Get in touch ?
             </p>
           </div>
           <button className="btn btn-primary">Get in Touch</button>
        </div>
        <div className="hero--section--img">
         <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
       </section>
    );
}