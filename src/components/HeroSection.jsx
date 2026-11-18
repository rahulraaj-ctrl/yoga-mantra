export default function HeroSection() {
    return (
        <section className="hero" id="home">
            <div className="wrap hero-grid">
                <div>
                    <span className="eyebrow">🌿 Online + Offline · Lucknow</span>
                    <h1>
                        Transform Your Health <br /> with <em>Yoga Mantra</em>
                    </h1>
                    <p className="sub">
                        Online & offline yoga classes for Weight Loss, Back Pain, PCOS, Diabetes, Stress & complete wellness — guided by certified trainers.
                    </p>
                    <div className="hero-ctas">
                        <a href="#trial" className="btn btn-primary">🎯 Book Free Demo Class</a>
                        <a href="https://wa.me/917905569751" className="btn btn-whatsapp">💬 WhatsApp Now</a>
                    </div>
                    <p className="trust-line">
                        ⭐ 4.9/5 Rated · <span>1000+</span> Happy Students · Certified Female & Male Trainers
                    </p>
                </div>

                <div className="hero-visual">
                    <div className="breath-wrap">
                        <img
                            src="https://media.istockphoto.com/id/599867640/photo/school-kids-meditating-during-yoga-class.jpg?s=612x612&w=0&k=20&c=zxrgvowNFb3KKGEcFE-1zNQULL3xNNUPo4kM5HiTFJU="
                            alt="Happy students placeholder"
                        />
                        <div className="breath-ring" />
                    </div>
                    <div className="rating-card">
                        <span className="stars">★★★★★</span>
                        <span>1000+ Happy Students</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
