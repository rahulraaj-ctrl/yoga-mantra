import { teamMembers } from '../data/siteData'

export default function TeamSection() {
  return (
    <section id="team">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">👥 Our People</span>
          <h2>Yoga Mantra Special Team</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card reveal" key={member.name} style={{ transitionDelay: `${index * 80}ms` }}>
              <img src={member.image} alt={member.name} />
              <div className="team-body">
                <h3>{member.name}</h3>
                <span className="founder-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
