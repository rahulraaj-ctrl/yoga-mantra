import { pricePlans } from '../data/siteData'

export default function PricingSection() {
    return (
        <section id="pricing" style={{ background: 'var(--cream-soft)' }}>
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">💰 Simple Pricing</span>
                    <h2>Transparent & Affordable Plans</h2>
                </div>
                <div className="pricing-grid">
                    {pricePlans.map((plan, index) => (
                        <div
                            className={`price-card ${plan.primary ? 'popular' : ''} reveal`}
                            key={plan.name}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {plan.popular && <span className="badge">⭐ Most Popular</span>}
                            <h3>{plan.name}</h3>
                            <div className="price-amt">
                                {plan.pricePrefix && <span className="price-prefix">{plan.pricePrefix} </span>}
                                {plan.price}
                                <span>{plan.period}</span>
                            </div>
                            <ul className="price-feats">
                                {plan.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <a href={plan.link} className={`btn ${plan.primary ? 'btn-primary' : 'btn-outline'} btn-block`}>
                                Book Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
