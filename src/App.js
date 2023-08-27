import './App.css';

function App() {
  return (
    <div className="root-div">
      <div className="App">
        <div className="bundle-save-container">
          <hr className="horizontal-line" />
          <p className="text-color">Bundle & Save</p>
          <hr className="horizontal-line" />
        </div>
        <div className="second-div-container">
          <label class="container-checkbox">
            <input type="radio" checked="checked" className="checkbox" />
            <div className="item-container">
              <div className="item-price-container">
                <div className="pair-container">1 Pair</div>
                <div className="price-container">DKK 195.00</div>
              </div>
              <div className="offer">
                <p>50% OFF</p>
              </div>
            </div>
          </label>
        </div>
        <div className="third-div-container">
          <label class="container-checkbox">
            <div className="radio-container">
              <input type="radio" checked="checked" className="checkbox-second" />
            </div>
            <div className="second-item-price-conatainer">
              <div className="second-pair">
                2 Pair
              </div>
              <div className="second-price">
                DKK 345.00
              </div>
            </div>
            <div className="old-price-strike-off">
              DKK 195.00
            </div>
            <div>
              <p className="most-popular-text">Most Popular</p>
              <p className="offer-text-40">40% OFF</p>
            </div>
          </label>
          <div className="labeles">
            <p className="size">Size</p>
            <p className="color">Color</p>
          </div>
          <div className="input-dropdown">
            <p className="item-num">#1</p>
            <select class="size-input">
                <option className="size-indication" value="small">S</option>
                <option className="size-indication" value="medium">M</option>
                <option className="size-indication" value="large">L</option>
            </select>
            <select class="color-input">
                <option className="color-indication" value="small">Colour</option>
                <option className="color-indication" value="medium">Red</option>
                <option className="color-indication" value="large">Blue</option>
            </select>
          </div>
          <div className="input-dropdown">
            <p className="item-num">#2</p>
            <select class="size-input">
                <option className="size-indication" value="small">S</option>
                <option className="size-indication" value="medium">M</option>
                <option className="size-indication" value="large">L</option>
            </select>
            <select class="color-input">
                <option className="color-indication" value="small">Colour</option>
                <option className="color-indication" value="medium">Red</option>
                <option className="color-indication" value="large">Blue</option>
            </select>
          </div>
        </div>
        <div className="second-div-container">
          <label class="container-checkbox">
            <div className="radio-btn-container">
            <input type="radio" checked="checked" className="checkbox-third" />
            </div>
            <div className="item-container">
              <div className="item-price-container">
                <div className="pair-container">3 Pair</div>
                <div className="price-container">DKK 528.00</div>
              </div>
              <div className="offer">
                <p>60% OFF</p>
              </div>
            </div>
          </label>
        </div>
        <div className="total-price-container">
          <div className="free-shoping-container">
            Free 2 Day Shipping
          </div>
          <div className="total-shoping">
          Total : DKK 360.00
          </div>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">+ Add to Cart</button>
        </div>
        <div className="copy-right-and-company-namne">
          <div className="copy-right">c</div>
          <div className="company-name">Powered by Pumper</div>
        </div>
      </div>
    </div>
  );
}

export default App;
