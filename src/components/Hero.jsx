import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-info">
          <h1>
            <span className="color">Contentful</span> CMS
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            maxime recusandae dignissimos debitis soluta corrupti fugiat, qui
            dolorem natus at quibusdam vel minima numquam repudiandae
            repellendus in reiciendis deserunt distinctio?
          </p>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="woman and computer" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
