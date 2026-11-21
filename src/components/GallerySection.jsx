import glp1 from "../assets/glimpes/glp1.jpeg"
import glp2 from "../assets/glimpes/glp2.jpeg"
import glp3 from "../assets/glimpes/glp3.jpeg"
import glp4 from "../assets/glimpes/glp4.jpeg"
import glp5 from "../assets/glimpes/glp5.jpeg"
import glp6 from "../assets/glimpes/glp6.jpeg"
import glp7 from "../assets/glimpes/glp7.jpeg"
import glp8 from "../assets/glimpes/glp8.jpeg"
export default function GallerySection() {
    const glimpes = [
        glp1,
        glp2,
        glp3,
        glp4,
        glp5,
        glp6,
        glp7,
        glp8
    ]
    return (
        <section>
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">📸 Class Glimpses</span>
                    <h2>Our Studio & Sessions</h2>
                </div>
                <div className="gallery-grid">
                    {glimpes.map((_, index) => (
                        <img
                            key={index}
                            className="reveal"
                            style={{ transitionDelay: `${index * 50}ms` }}
                            src={_}
                            alt={`Gallery photo ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
