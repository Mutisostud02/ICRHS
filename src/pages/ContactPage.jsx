import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 0.5279384851455688,
  lng: 35.25893783569336,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCpOX8UeB706633Osm3KSkp3sbj5Y_s8dE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} title="My location" />
      </GoogleMap>
    </LoadScript>
  );
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <GoogleMapComponent/>
      <div className="contact">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>If you have questions about how to donate, want to offer ideas for fundraising, become a volunteer, or something else, don't hesitate to get in contact.
          </p>
          <span id="span"> </span>
          <p id="welcome">We welcome all inquiries.</p>
          <div className="contact-links">
            <p>308, Turbo | Eldorect, Kenya</p>
            <p>0202600171</p>
            <p>info@icrhsinternational.org</p>
          </div>
        </div>
        <form action="https://formsubmit.co/6037ecf284436365003f48ae4cefa03c" method="POST" className="contact-form">
          <div className="personal-details">
          <input type="name" placeholder="Your name required"/>
          <input type="email" name="email" placeholder="Your email" required/>
          </div>
          <div className="text-area">
            <textarea cols="30" rows="5" name="message" placeholder="Your message.."></textarea>
          </div>
          <button>Send</button>
        </form>
    </div>
    </div>
  )
}
