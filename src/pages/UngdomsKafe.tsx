import "./UngdomsKafe.css"; // Make sure to create this CSS file

function UngdomsKafe() {
  return (
    <div className="ungdoms-kafe-container">
      <div className="image-section">
        {/* Put your image path here */}
        <img src="/path-to-your/image.jpg" alt="Flowers and archway" />
      </div>
      <div className="info-section">
        <h1>Ungdoms kafe</h1>
        <p className="address">
          museplassen 3<br />
          5007 Bergen
        </p>
        <div className="opening-hours">
          <i className="icon-calendar"></i>
          <span>Torsdag kl.17-18</span>
        </div>
        <div className="age-group">
          <i className="icon-user"></i>
          <span>6-17 år</span>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
      </div>
    </div>
  );
}

export default UngdomsKafe;
