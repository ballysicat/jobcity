import Footer from "./Footer";
import Header from "./Header";
import src from "./images/searchicon.png";

function JobList() {
  var jlist = [
    {
      tittle: "Senior Developer",
      company: "",
      responsibilities: [
        "1+ years experience in .Net Core, C# ",
        "Experienced in following the software development lifecycle (SDLC) to plan, design, build, test, and deploy software applications.",
        "Experienced in the development, design, and implementation of new or modified software products and business projects",
        "C# (Strong), HTML5 (Strong), CSS (Strong), JavaScript(Strong), Unit testing (Capable)",
        "Programming Models: Asp.Net MVC, Asp.Net Core, Asp.Net Web Forms",
        "Database: SQL Server, Oracle, MySQL",
        "Knowledgeable in four or more of these:  ASP.NET Web API, Entity Framework (EF), Object Oriented Programming System (OOPS), REST, Cloud development (Capable), Microservices architecture",
        "Knowledgable in two or more of these front-end frameworks: React (Capable), Angular 2, Angular 4, Angular 6, Angular 8, Angular JS, Ember.js, Vue.js",
      ],
      detail: `Play a crucial role in the development, design, and implementation of new or modified software products and ongoing business projects.
                          Responsible for writing and implementing efficient code, following the software development lifecycle (SDLC) to plan, design, build, test, and deploy software applications.
                          Participate in the development, design, and implementation of new or modified software products and business projects.
                          Write and implement efficient, high-quality code.
                          Follow the Software Development Lifecycle (SDLC) to plan, design, build, test, and deploy software applications.
                          Stay up to date with the latest technologies and best practices in .NET Core, C#, and Angular`,
    },
    {
      tittle: "Microservice Developer",
      company: "",
      responsibilities: [
        "Owns cross-team shared technology and architecture.",
        "Works with head of development to choose new technologies and promote culture/process.",
        "Does serious research to evaluate and test options.",
        "Understands implications (and trade-offs) of reliability, scalability, operational costs, ease of adoption by organization, recruiting, etc.",
        "Evaluate system-wide platform decisions and set long-term company-wide technical strategy.",
        "Potentially work both as individual contributors on a feature team and as architectural reviewers working with the head of development.",
      ],
      detail: `Results driven, highly engaged professional; uses discretionary effort to meet/exceed desired results in a fast paced environment.
                            Passionate team member; collaborative; cultivates an energizing environment and is committed to team success.
                            Supports culture of customer appreciation; plays an active role in creating a positive customer experience.
                            Demonstrates effective communication and interpersonal skills.
                            Possesses appropriate knowledge and skills; understands company, process, products, job duties, and necessary work methods.
                            Contributes to a climate of innovation and continuous improvement to achieve excellence.
                            Demonstrates personal excellence, integrity and accountability.
                            Identifies ways to continuously improve own and/or company performance.`,
    },
    {
      tittle: ".Net Developer",
      company: "",
      responsibilities: [
        "Prepare individual, corporate, and partnership tax returns, including related city and state reports and filings",
        "Enter and analyze previously filed tax returns for optimization or refund opportunities",
        "Respond to tax notices and inquiries from various taxing jurisdictions",
        "Communicate with tax leads to address issues and meet deadlines",
        "Onboard and offboard customers",
        "Maintain and update document checklists for efficient workflow",
        "Explore automation opportunities for document requests",
        "Process tax returns, manage schedules, and facilitate document flow",
      ],
      detail: `A Bachelor's degree in Accountancy
                              At least 2 years of experience in a related field (technology industry is preferable)
                              US Tax background is a plus
                              Proficient in Google App platform and Microsoft Office applications with a high level of expertise in Excel and Google Spreadsheets
                              Knowledge of tax software GoSystem, UltraTax, and QuickBooks is a plus
                              High level of English communication skills and is a quick learner
                              Experience in a multi-client environment
                              Analytical skills with particular attention to detail
                              Aptitude in data management, analytics, reporting preparation
                              Ability to function in an autonomous environment—independent worker, self-directed`,
    },
  ];
  var hidediv = () => {
    document.querySelector("#defaultdiv").classList.add("details-hide");
    document.querySelector("#defaultdiv").classList.remove("details-show");
    //document.querySelector("#job-list").classList.remove("details-hide");
  };

  return (
    <>
      <Header name="joblist" />
      <div className="search-div">
        <div>
          <input type="text" placeholder="Search" />
          <input type="text" placeholder="location" />
          <img src={src} alt="test" />
        </div>
      </div>
      <div>
        <div className="finder-area">
          <div id="job-list" className="job-list" >
            {jlist.map((item) => (
              <>
                <ListItem jItem={item} />
              </>
            ))} 
            
          </div>
        </div>
      </div>
      <div id="defaultdiv" className="details-area">
        <div className="inner-details">
          <h2 id="role">Job Role</h2>
          <p>Responsebilities</p>
          <ul>
            <li>Aimsrandom Lorem ipsum dolor sit amet</li>
            <li>Aimsrandom Lorem ipsum dolor sit amet</li>
            <li>Aimsrandom Lorem ipsum dolor sit amet</li>
          </ul>
          <br />
          <p>Company Details</p>
          <p>
            JobCity Aimsrandom Lorem ipsum dolor sit amet JobCity Aimsrandom
            Lorem ipsum dolor sit amet obCity Aimsrandom Lorem ipsum dolor sit
            amet JobCity Aimsrandom Lorem ipsum dolor sit amet obCity Aimsrandom
            Lorem ipsum dolor sit amet JobCity Aimsrandom Lorem ipsum dolor sit
            amet obCity Aimsrandom Lorem ipsum dolor sit amet JobCity Aimsrandom
            Lorem ipsum dolor sit amet JobCity Aimsrandom Lorem ipsum dolor sit
            amet JobCity Aimsrandom Lorem ipsum dolor sit amet JobCity
            Aimsrandom Lorem ipsum dolor sit amet obCity Aimsrandom Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet obCity Aimsrandom Lorem
            ipsum dolor sit amet JobCity Aimsrandom Lorem ipsum dolor sit amet
            obCity Aimsrandom Lorem ipsum dolor sit amet JobCity Aimsrandom
            Lorem ipsum dolor sit amet obCity Aimsrandom Lorem ipsum dolor sit
            amet JobCity Aimsrandom Lorem ipsum dolor sit amet JobCity
            Aimsrandom Lorem ipsum dolor sit amet JobCity Aimsrandom Lorem ipsum
            dolor sit amet JobCity Aimsrandom Lorem ipsum dolor sit amet obCity
            Aimsrandom Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </p>
          <input type="submit"  onClick={hidediv} />
        </div>
      </div>
      <Footer />
    </>
  );
}
function ListItem(prop) {
  var showdetails = () => {
    // document.querySelector("#defaultdiv").classList.remove("details-hide")
    // document.querySelector("#defaultdiv").classList.add("details-show");
    //document.querySelector("#job-list").classList.add("details-hide");
  };

  return (
    <>
      <div id={prop.jItem.key} name={prop.jItem.tittle} className="job-item" >
        <p>{prop.jItem.tittle}</p>
        <ul className="ulSize">
          {
            prop.jItem.responsibilities.map((arr)=>(
              <ListOfLi li={arr} />
            ))
          }
        </ul>
        <div>
          <div>{prop.jItem.detail}</div>
        </div>
        <span>4 Days ago</span>
        <br />
        <input type="submit" onClick={showdetails(prop)}/>
      </div>
    </>
  );
}
function ListOfLi(prop) {
  return (
      <li>{prop.li}</li>
  );
}

export default JobList;

// One of your dependencies, babel-preset-react-app, is importing the
// "@babel/plugin-proposal-private-property-in-object" package without
// declaring it in its dependencies. This is currently working because
// "@babel/plugin-proposal-private-property-in-object" is already in your
// node_modules folder for unrelated reasons, but it may break at any time.

// babel-preset-react-app is part of the create-react-app project, which
// is not maintianed anymore. It is thus unlikely that this bug will
// ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
// your devDependencies to work around this error. This will make this message
// go away.
