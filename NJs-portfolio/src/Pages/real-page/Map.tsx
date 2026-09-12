export default function Map() {
  return (
    <section id="google-map">
      {/*
        How to change your own map point
        1. Go to Google Maps
        2. Click on your location point
        3. Click "Share" and choose "Embed map" tab
        4. Copy only URL and paste it within the src="" field below
      */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0753952145183!2d-1.7868415262094655!3d4.927047195048957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe779af378e6961%3A0xf2451f4bead2e6c2!2sEssiljoe%20Ave%2C%20Takoradi%2C%20Ghana!5e0!3m2!1sen!2sus!4v1789073201203!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </section>
  );
}
