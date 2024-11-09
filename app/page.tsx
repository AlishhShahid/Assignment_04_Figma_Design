import Card from "./components/recent-post-card";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="main">
            <div className="hero-container-text">
              <h1 className="main-text">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>

            <div>
              <div>
                <img src="/image.png" width={300} height={300} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-all-btn">View all</button>
            </div>

            <div className="parent-card">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>

      <section className="featured-works">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured works</h3>
            </div>

            <div className="card-parent">
                  <div className="card">
                    <img className="img" src="/01.png" width={250} height={190} alt="image" />
                    <div className="card-content">
                      <h2 className="h2">Designing Dashboard</h2>
                      <div className="badge-parent">
                        <div className="badge">
                          <p>2020</p>
                        </div>
                        <p className="dashboard">Dashboard</p>
                      </div>
                      <p className="p">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor
                        do amet sint. Velit officia consequat duis enim velit
                        mollit. Exercitation veniam consequat sunt nostrud amet.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <img className="img" src="/02.png" width={250} height={190} alt="image" />
                    <div className="card-content">
                      <h2 className="h2">Designing Dashboard</h2>
                      <div className="badge-parent">
                        <div className="badge">
                          <p>2020</p>
                        </div>
                        <p className="dashboard">Dashboard</p>
                      </div>
                      <p className="p">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor
                        do amet sint. Velit officia consequat duis enim velit
                        mollit. Exercitation veniam consequat sunt nostrud amet.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <img className="img" src="/03.png" width={250} height={190} alt="image" />
                    <div className="card-content">
                      <h2 className="h2">Designing Dashboard</h2>
                      <div className="badge-parent">
                        <div className="badge">
                          <p>2020</p>
                        </div>
                        <p className="dashboard">Dashboard</p>
                      </div>
                      <p className="p">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor
                        do amet sint. Velit officia consequat duis enim velit
                        mollit. Exercitation veniam consequat sunt nostrud amet.
                      </p>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
