export default function FloatingButtons() {
  return (
    <div className="float-stack">
      <a href="tel:7905569751" className="float-btn float-call" title="Call Now">📞</a>
      <a href="https://wa.me/917905569751" className="float-btn float-whatsapp" title="WhatsApp">💬</a>
      <a href="https://www.google.com/maps/search/?api=1&query=Anand+Bhog+Sector+6+Vikas+Nagar+Lucknow" className="float-btn float-map" title="Directions" target="_blank" rel="noreferrer">
        📍
      </a>
    </div>
  )
}
