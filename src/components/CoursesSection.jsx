import { specialCourses } from '../data/siteData'

export default function CoursesSection() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">📘 Beyond Yoga</span>
          <h2>Special Classes</h2>
        </div>
        <div className="course-grid">
          {specialCourses.map((course, index) => (
            <div className="course-card reveal" key={course.title} style={{ transitionDelay: `${index * 80}ms` }}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="ico">{course.icon}</div>
              <h3>{course.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
