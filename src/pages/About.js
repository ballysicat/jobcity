import Footer from "./Footer";
import Header from "./Header";

function About() {
  return (
    <>
      <Header name="about" />
      
      <div className="home-page">
        <h1><span
            style={{
              color: "#11ec09",
              margin: 0,
              padding: 0,
              paddingLeft: "2px",
            }}
          >
            M
          </span>ISSION</h1>
        <div className="home-details">
          <div className="inner-details">
            Our mission is to connect job seekers and employers with their ideal
            matches, facilitating meaningful connections and fulfilling career
            opportunities. We strive to provide a seamless platform where
            individuals can find the perfect job opportunity that aligns with
            their skills, passions, and career aspirations. By leveraging
            advanced technology and a comprehensive understanding of both
            candidate and employer needs, we aim to streamline the hiring
            process, fostering mutual success and growth for all parties
            involved. Our commitment lies in empowering individuals to discover
            their professional potential and helping businesses thrive by
            building dynamic, diverse, and talented teams."
          </div>
          <br />
        </div>
        <h1><span
            style={{
              color: "#11ec09",
              margin: 0,
              padding: 0,
              paddingLeft: "2px",
            }}
          >
            V
          </span>ISION</h1>
        <div className="home-details">
          <div className="inner-details">
            Are you ready to take your recruitment strategy to the next level?
            Look no further! At JOB CITY, we're
            dedicated to helping you find the perfect candidates to grow your
            team and propel your business forward. Posting a job on our platform
            opens up a world of opportunities to connect with top talent who are
            eager to contribute to your company's success. Whether you're
            seeking experienced professionals or bright, ambitious individuals
            ready to make their mark, our platform is the ideal place to
            showcase your job openings. By joining our community of employers,
            you'll gain access to a diverse pool of candidates from various
            backgrounds and skill sets. Our user-friendly interface and robust
            features make it easy to create compelling job listings that attract
            the right candidates.
          </div>
          <br />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
