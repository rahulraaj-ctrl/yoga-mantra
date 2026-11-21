import { eveningTimings, morningTimings } from '../data/siteData'

export default function TimingsSection() {
    const regularMorningTimings = morningTimings.filter((slot) => !slot.value.includes('Female Only'))
    const regularEveningTimings = eveningTimings.filter((slot) => !slot.value.includes('Female Only'))
    const femaleTimings = [
        ...morningTimings.filter((slot) => slot.value.includes('Female Only')),
        ...eveningTimings.filter((slot) => slot.value.includes('Female Only')),
    ]

    return (
        <section id="timings">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">⏰ Class Schedule</span>
                    <h2>Class Timings</h2>
                </div>
                <div className="timing-grid">
                    <div className="timing-card reveal">
                        <h3>🌅 Morning Batches</h3>
                        <div className="slot-list">
                            {regularMorningTimings.map((slot) => (
                                <div className="slot" key={slot.label}>
                                    <span>{slot.label}</span>
                                    <b>{slot.value}</b>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="timing-card reveal">
                        <h3>🌆 Evening Batches</h3>
                        <div className="slot-list">
                            {regularEveningTimings.map((slot) => (
                                <div className="slot" key={slot.label}>
                                    <span>{slot.label}</span>
                                    <b>{slot.value}</b>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="female-timings-section">
                    <h3>🚺 Female Only Timings</h3>
                    <div className="slot-list">
                        {femaleTimings.map((slot) => (
                            <div className="slot female-slot" key={`${slot.label}-${slot.value}`}>
                                <span>{slot.label}</span>
                                <b>{slot.value}</b>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
