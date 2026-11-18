import { featuredProgram, programCards } from '../data/siteData'

export default function ProgramsSection() {
    return (
        <section className="programs-bg" id="programs">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">🎯 What We Offer</span>
                    <h2>Our Yoga Programs</h2>
                </div>
                <div className="program-grid">
                    {programCards.map((card, index) => (
                        <div className="program-card reveal" key={card.title} style={{ transitionDelay: `${index * 80}ms` }}>
                            <img src={card.image} alt={card.title} />
                            <div className="program-body">
                                <h3>{card.title}</h3>
                                <span className="program-price">{card.price}</span>
                                <ul className="program-feats">
                                    {card.feats.map((feat) => (
                                        <li key={feat}>{feat}</li>
                                    ))}
                                </ul>
                                <a href={card.cta} className="btn btn-primary">
                                    {card.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}

                    <div className="program-card featured reveal" style={{ transitionDelay: '320ms' }}>
                        <img src={featuredProgram.image} alt={featuredProgram.title} />
                        <div className="program-body">
                            <h3>{featuredProgram.title}</h3>
                            <span className="program-price">{featuredProgram.price}</span>
                            <ul className="program-feats">
                                {featuredProgram.feats.map((feat) => (
                                    <li key={feat}>{feat}</li>
                                ))}
                            </ul>
                            <a href={featuredProgram.cta} className="btn btn-primary">
                                {featuredProgram.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
