import { faqs } from '../data/siteData'

export default function FAQSection() {
  return (
    <section id="faq" style={{ background: 'var(--cream-soft)' }}>
      <div className="wrap" style={{ maxWidth: '820px' }}>
        <div className="section-head reveal">
          <span className="eyebrow">❓ Common Questions</span>
          <h2>FAQs</h2>
        </div>
        {faqs.map((faq, index) => (
          <details key={faq.question} className="faq-item reveal" style={{ transitionDelay: `${index * 60}ms` }}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
