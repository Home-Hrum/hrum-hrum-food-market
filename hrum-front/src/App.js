import './App.css';

function App() {
    let appTitle = ["Доставка", "домашней", "еды"]
    let navButtons = ["Button1", "Button2", "Button3"]
    let categories = ["Супы", "Салаты", "Закуски",
        "Пельмени и вареники", "Горячие блюда", "Гарниры"]


  return (
    <div className="App">
        <div className="wrapper__nav">
            <div className="nav__logo">
                <div className="nav__logo_box"></div>
            </div>
            <div className="nav__button_grp">
                {navButtons.map(el =>
                    <div className="nav__button">
                        <span>{el}</span>
                    </div>
                )}
            </div>
            <div className="nav__bin"></div>
        </div>

        <div className="wrapper__banner">
          <div className="banner__info">
              <div className="banner__title">
                  {appTitle.map(el =>
                      <h1>{el.toUpperCase()}</h1>
                  )}
              </div>
              <div className="banner_subinfo">
                  <span>доставка домой по выходным</span>
              </div>
          </div>
      </div>

        <div className="wrapper__categories">
            {categories.map(el =>
                <span>{el}</span>
            )}
        </div>
    </div>
  );
}

export default App;
