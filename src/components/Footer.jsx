export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>Yoga Mantra Wellness</h4>
            <p style={{ fontSize: '0.88rem', color: '#b9c4b0' }}>
              Nurture your body, nurture your soul. Online & offline yoga classes for every lifestyle problem.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📞 <a href="tel:7905569751">7905569751</a></li>
              <li>💬 <a href="https://wa.me/917905569751?text=Hello%2C%20I%20am%20contacting%20from%20the%20Yoga%20Mantra%20website.%20Source%3A%20Website%20Footer">WhatsApp</a></li>
              <li>📍 Vikas Nagar, Lucknow</li>
              <li>📸 <a href="https://www.instagram.com/yogamantraofficial1?gwpx=MWtxMWF4cXpyNHVsdQ%3D%3D" target="_blank" rel="noreferrer">Instagram</a></li>
              <li>▶️ <a href="https://youtube.com/@yogamantrayogastudio?si=dSr3p9BmHsgFtqaD" target="_blank" rel="noreferrer">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4>Location</h4>
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4104710457823!2d80.9616666!3d26.890465199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d7699d9907%3A0x7a85a090dd496bc1!2sYoga%20Mantra!5e0!3m2!1sen!2sin!4v1795435458577!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Yoga Mantra location map"
              />
            </div>
          </div>
        </div>
        <div className="foot-bottom">© 2026 Yoga Mantra Wellness · All Rights Reserved</div>
      </div>
    </footer>
  )
}
