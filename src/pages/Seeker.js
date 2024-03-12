import Header from "./Header";
import Footer from "./Footer";
import bio from "./images/bioimg.jpg";
function Seeker() {
  return (
    <>
      <Header name="seeker" />
      <div className="bio-div">
        <img src={bio} alt="bio" />

        <div className="seeker-text">
          We're thrilled that you've chosen to explore career opportunities with
          us. Whether you're just starting your job search journey or seeking
          new horizons in your career, you're in the right place. At [Your
          Company/Organization Name], we believe in empowering individuals like
          you to discover your full potential and achieve your professional
          goals. Here, you'll find a wealth of exciting job opportunities from
          leading companies across various industries. Our platform is designed
          to make your job search experience seamless and rewarding. From
          entry-level positions to executive roles, we're committed to helping
          you find the perfect match that aligns with your skills, interests,
          and aspirations. Feel free to browse through our listings, customize
          your search criteria, and connect with employers who are eager to
          welcome talented individuals like yourself. We're here to support you
          every step of the way, providing resources, guidance, and
          opportunities for growth.
          <button>Login</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Seeker;
