import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="mainbody">
        <div className="container-fluid maincontainer1">
          <nav class="navbar navrow  navbar-expand-lg ">
            <div class="container-fluid container1">
              <div class="circle"></div>
              <a class="navbar-brand ms-2 werlton" href="#">
                WERLTON
              </a>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class=" head-div d-flex ul1 me-auto mb-2 mb-lg-0 list-unstyled">
                  <li class="nav-item">
                    <a
                      route="active"
                      class="nav-link"
                      aria-current="page"
                      href="https://www.google.co.in/"
                    >
                      main
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      route="active"
                      class="nav-link"
                      href="https://www.google.co.in/"
                    >
                      about us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      route="active"
                      class="nav-link"
                      href="https://www.google.co.in/"
                    >
                      tours
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      route="active"
                      class="nav-link"
                      href="https://www.google.co.in/"
                    >
                      gallery
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      route="active"
                      class="nav-link"
                      href="https://www.google.co.in/"
                    >
                      reviews
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      route="active"
                      class="nav-link"
                      href="https://www.google.co.in/"
                    >
                      contacts
                    </a>
                  </li>
                </ul>
                <a class="search" href="">
                  <img
                    class="searchimage"
                    src="https://www.downloadclipart.net/large/search-button-png-image-hd.png"
                  />
                </a>
              </div>
            </div>
          </nav>

          <div className="row mainrow1">
            <div className="d-flex container2  ">
              <div className="part1">
                <h1 className="travel">travel time</h1>
                <p class="pera1">Don't let the loud noise scare you, </p>
                <p class="pera1">Let the rythems of the dance asume you. </p>
                <p class="pera1">You are given a very rare chance</p>
                <p class="pera1">Feel the movements of our ancestors</p>
              </div>
              <div className="part2 ms-auto">
                <h2 className="numbers">01</h2>
                <h2 className="numbers">02</h2>
                <h2 className="number3">03</h2>
                <h2 className="numbers">04</h2>
                <h2 className="numbers">05</h2>
              </div>
            </div>
          </div>
          <div className="row mainrow2">
            <div className="d-flex row2items">
              <div className=" row2item1">
                <div className="d-flex content">
                  <img
                    className="rowimage1"
                    src="https://cdn4.iconfinder.com/data/icons/location-and-navigation-set/128/Location-Color-34-512.png"
                  />
                  <div className="ms-2 itempera1">
                    <p className="pera2">There will be a small title here.</p>
                    <p className="pera2">A couple of senteces of text</p>
                  </div>
                </div>
                <div className="itempera2">
                  <h3 class="more">more detailed</h3>
                </div>
              </div>
              <div className="row2item2">
                <div className="d-flex content">
                  <img
                    className="rowimage1"
                    src="https://cdn4.iconfinder.com/data/icons/location-and-navigation-set/128/Location-Color-34-512.png"
                  />
                  <div className="ms-2 itempera1">
                    <p className="pera2">There will be a small title here.</p>
                    <p className="pera2">A couple of senteces of text</p>
                  </div>
                </div>
                <div className="itempera2">
                  <h3 class="more">more detailed</h3>
                </div>
              </div>
              <div className="row2item3">
                <div className="d-flex content">
                  <img
                    className="rowimage1"
                    src="https://cdn4.iconfinder.com/data/icons/location-and-navigation-set/128/Location-Color-34-512.png"
                  />
                  <div className="ms-2 itempera1">
                    <p className="pera2">There will be a small title here.</p>
                    <p className="pera2">A couple of senteces of text</p>
                  </div>
                </div>
                <div className="itempera2">
                  <h3 class="more">more detailed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
