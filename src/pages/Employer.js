import Header from "./Header";
import Footer from "./Footer";
import employerimg from "./images/employerimg.jpg";
function Employer() {
  return (
    <>
      <Header name="employer" />
      <div className="emplyer-div">
        <div className="employer-img">
          <img src={employerimg} alt="img"/>
        </div>
        <div className="employer-inner ">
          <p>
            Are you ready to take your recruitment strategy to the next level?
            Look no further! At Job City, we're dedicated to helping you find
            the perfect candidates to grow your team and propel your business
            forward.
          </p>
          <p>
            Posting a job on our platform opens up a world of opportunities to
            connect with top talent who are eager to contribute to your
            company's success. Whether you're seeking experienced professionals
            or bright, ambitious individuals ready to make their mark, our
            platform is the ideal place to showcase your job openings.
          </p>
          <p>
            By joining our community of employers, you'll gain access to a
            diverse pool of candidates from various backgrounds and skill sets.
            Our user-friendly interface and robust features make it easy to
            create compelling job listings that attract the right candidates.
            But that's not all! When you post a job with us, you're not just
            filling a position you're investing in the future of your company.
          </p>
          <p>
            You're opening doors to fresh perspectives, innovative ideas, and
            invaluable talent that can drive innovation and fuel growth.
          </p>
          <input type="submit" value="Register" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Employer;
