import CV from "../../assets/hemaxi goyani resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Hemaxi_Goyani_Resume" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
