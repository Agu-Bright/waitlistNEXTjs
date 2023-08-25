import Image from "next/image";
import Link from "next/link";
export default function Join() {
  return (
    <>
      <div className="h-[60px] bg-black flex items-center pl-4 lg:pl-[3.3rem] lg:h-[70px]">
        <a href="index.html">
          <img className="w-32 object-contain" src="./images/logo.png" alt="" />
        </a>
      </div>
      <section className="section-about">
        <div className="about-main-container">
          <div className="about-hero">
            <div className="hero-container">
              <div className="hero-writeup">
                <h1>
                  The largest freelancing and crowdsourcing marketplace in 9ja.
                </h1>
                <p>
                  We are your online marketplace for Jobs and Workers in Nigeria
                </p>
                <Link href="/contact-us">
                  <button>Contact Us</button>
                </Link>
              </div>
              <div className="hero-image">
                <img src="./images/about-us-page.png" alt="" />
              </div>
            </div>
          </div>
          <div className="overview">
            <div className="overview-container">
              <div className="creedlance-video">
                <video width="95%" autoPlay loop>
                  <source
                    src="./images/about-us-creedlance-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="overview-writeup">
                <h2>Company Overview</h2>
                <p>
                  Creedlance.com is Nigerias largest Jobs and workers crowd
                  sourcing marketplace. We connect businesses and people of what
                  ever scale to their respective needs in the market place, be
                  it a job, a worker or a service. We beleive any worker can be
                  an employer and any employer can be a worker, as such
                  creedlance prioritizes no exact type of service/job on her
                  platform. From proffessional jobs to large scale
                  projects/contracts or to laboured jobs concerning manpower,
                  all categories can be found in Creedlance. We also do beleive
                  that the Nigerian work and Job force can be sustained by
                  itself, if we all are connected the right way.
                </p>
              </div>
            </div>
          </div>
          <div className="provenance">
            <h2>Creedlance Provenance</h2>
            <div className="provenance-body">
              <div className="provenance-container">
                <div className="provenance-image">
                  <img src="./images/creative-team-amico.png" alt="" />
                </div>
                <div className="provenance-writeup">
                  <p>
                    Creedlance began by pioneering a better way of working,
                    assisting businesses in finding greater flexibility and
                    connecting talent with greater opportunities in Nigeria
                    (founded by Tonye Tex-Jack and Victory Okeke in 2023,
                    Nigeria).
                  </p>
                  <p>
                    Our mission of creating economic opportunities for people to
                    live better lives has taken us a long way. As a result,
                    we've evolved into the Nigeria's work marketplace, where
                    every day businesses of all sizes and independent talent
                    from around Nigeria come together to achieve incredible
                    things.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="team-heading">
              <h3>
                Meet the <span className="text-[#daa520]">Team</span> behind
                Creedlancer!
              </h3>
              <p>
                Meet our talented team of fun-lovers, magic makers and exemplary
                visionaries
              </p>
            </div>
            <div className="team-pics">
              <img src="./images/directors.png" alt="" />
              <div className="directors">
                <img src="./images/tonye.png" alt="" />
                <img src="./images/victory.png" alt="" />
              </div>
              <img src="./images/team-logo.png" alt="" />
              <div className="developers">
                <img src="./images/raay.png" alt="" />
                <img src="./images/chidera.jpeg" alt="" />
                <img src="./images/1.jpeg" alt="" />
                <img src="./images/2.jpg" alt="" />
                <img src="./images/3.png" alt="" />
                <img src="./images/4.png" alt="" />
                <img src="./images/5.png" alt="" />
              </div>
            </div>
          </div>
          <div className="roadmap-section">
            <h2>We're constantly updating our roadmap.</h2>
            <div className="various-roadmaps">
              <div className="completed roadmap">
                <button>completed</button>
                <ul>
                  <li>Wireframe</li>
                  <li>Design</li>
                  <li>Documentation</li>
                  <li>Launching plans and billings</li>
                  <li>Apps for iOS & Android</li>
                </ul>
              </div>
              <div className="in-progress roadmap">
                <button>in progress</button>
                <ul>
                  <li>Improved UI designs</li>
                  <li>
                    Community formation and the subsequent cyclic completion of
                    the product based on the wishes of customers
                  </li>

                  <li>Completion of all pages/links on the footer</li>
                  <li> Improving our customer care </li>
                </ul>
              </div>
              <div className="planned roadmap">
                <button>planned</button>
                <ul>
                  <li>
                    Integration of google maps and location, for live location
                    of worker, employer or an interview
                  </li>
                  <li>better chat systems and feutures</li>

                  <li>
                    Forums for different categories of businesses and people on
                    creedlance
                  </li>
                  <li>Integration of safety features and anti scam policies</li>
                </ul>
              </div>
            </div>
            <p>
              "Creedlance to us is a life long dedication of creating an
              acessible, safe and competent platform that is able to connect the
              entirety of Nigeria's work force as one family, where its safe to
              work, employ or render a service.. As such we will keep updating
              our road maps so our users see what has been done, what is in
              progress and what is to come"
            </p>
          </div>
          <div className="growth">
            <div className="growth-container">
              <h2>Concerned about our Growth</h2>
              <div className="numbers">
                <ul className="numbers-list">
                  <li>
                    <span>97,571,244 </span>Total Jobs Posted
                  </li>
                  <li>
                    <span>47,938,838 </span>Registered Users
                  </li>
                  <li>
                    <span>38,838</span> Registered Enterprises
                  </li>
                </ul>
              </div>
              <p>
                We are constantly updating our systems, designs, and Ideas in
                order to provide transparency to our users and to solicit
                feedback - please let us know what is important to you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
