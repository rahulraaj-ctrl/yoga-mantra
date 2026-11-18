import { whyCards } from '../data/siteData'

export default function WhyChooseSection() {
    return (
        <section id="why">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">Why Yoga Mantra</span>
                    <h2>Why Choose Yoga Mantra</h2>
                </div>
                <div className="why-grid">
                    {whyCards.map((card, index) => (
                        <div className="why-card reveal" key={card.title} style={{ transitionDelay: `${index * 80}ms` }}>
                            <div className="ico">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
