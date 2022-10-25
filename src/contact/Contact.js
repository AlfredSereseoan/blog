import "./Contact.scss"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "default_service",
        "template_99uoj1h",
        refForm.current,
        "k8HYzGIKFmcCH40kp"
      )
      .then(
        () => {
          alert("Message was successfully sent!")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send the message, please try again!")
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>Contact me!</h1>
        <p>
          I am interested in job opportunities as Frontend Developer. If you
          have any questions don't hesitate to contact me using the form below.{" "}
          <br />
          Thank you for your interest!
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
            </ul>

            <input type="submit" className="flat-button" value="SEND" />
          </form>
        </div>
      </div>
      <div className="info-map">
        Alfred Sereseoan,
        <br />
        Romania,
        <br />
        Blvd. Eroilor 33, 400129 <br />
        Cluj Napoca <br />
        <br />
        <span>sereseoan@yahoo.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer
          center={[46.77065994096789, 23.593947097903964]}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[46.77065994096789, 23.593947097903964]}>
            <Popup>Aceasta este adresa lui Alfred Sereseoan</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contact
