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
              <li>💬 <a href="https://wa.me/917905569751">WhatsApp</a></li>
              <li>📍 Vikas Nagar, Lucknow</li>
              <li>📸 Instagram</li>
              <li>▶️ YouTube</li>
            </ul>
          </div>
          <div>
            <h4>Location</h4>
            <div className="map-box">
              <img
                src="https://placehold.co/400x160/2a2a22/cfd8c9?text=Replace%3A+Google+Map+Embed"
                alt="Map placeholder"
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="foot-bottom">© 2026 Yoga Mantra Wellness · All Rights Reserved</div>
      </div>
    </footer>
  )
}
