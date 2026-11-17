function ProjectPhoto({ file, alt, className }) {
  return <img className={className} src={"assets/projects/" + file} alt={alt} loading="lazy" />;
}

export default function RhythmsDetails({ contact }) {
  return (
    <article className="rhythms-details">
      <div className="rhythms-columns">
        <div className="rhythms-story">
          <ProjectPhoto file="fe866.png" alt="CAD model of the double-pendulum installation" />
          <section>
            <h3 className="eyebrow">Skills applied</h3>
            <ul>
              <li>Electrical system design for a Class II CSA-approved device</li>
              <li>Mechanical enclosure design for outdoor −20°C weather and DFM &amp; DFA</li>
              <li>ESP32 and Raspberry Pi</li>
              <li>Hardware troubleshooting</li>
            </ul>
          </section>
          <section>
            <h3 className="eyebrow">The execution</h3>
            <h4>V1 for Lumière · Nov. 2025 to Mar. 2026</h4>
            <ul>
              <li>Designed the initial electrical system around the venue’s 120 VAC, 16 A supply and the installation’s requirements.</li>
              <li>Developed the slip-gear reset mechanism through research, calculations, prototype testing, and finalization with machined gears.</li>
              <li>Unit-tested the ring LEDs, motors, and slip-gear mechanism.</li>
              <li>Designed the main enclosure in CAD with waterjet and welding tolerances.</li>
              <li>Integrated the system and troubleshot it with a digital multimeter and external power supply.</li>
            </ul>
            <h4>V2 for Nuit Blanche · May to Oct. 2026</h4>
            <ul>
              <li>Led the overall project and electrical teams of over 20 people to build a more reliable installation.</li>
              <li>Designed the overall electrical system for CSA approval.</li>
              <li>Reviewed designs for the custom power distribution, motor controller, and sound amplifier boards.</li>
            </ul>
          </section>
        </div>
        <div className="rhythms-story">
          <section className="rhythms-idea">
            <h3 className="eyebrow">The idea</h3>
            <p>A kinetic double-pendulum light installation for <strong>2026 Lumière: The Art of Light</strong> and <strong>Nuit Blanche Toronto 2026</strong>!</p>
          </section>
          <div className="rhythms-drawings">
            <ProjectPhoto file="60a75.png" alt="Mechanical drawings of the installation" />
            <div>
              <ProjectPhoto file="4b1b8.png" alt="Electrical system block diagram" />
              <ProjectPhoto file="2630e.png" alt="Detailed electrical design notes" />
            </div>
          </div>
          <div className="rhythms-fabrication">
            <ProjectPhoto file="03060.png" alt="Double-pendulum assembly in the workshop" />
            <ProjectPhoto file="5d67c.png" alt="Fabricated component on a workshop stand" />
          </div>
          <ProjectPhoto
            file="rhythms-v2-system-diagram.png"
            alt="V2 system diagram showing the power and control connections for the three pendulum enclosures"
            className="rhythms-system-diagram"
          />
        </div>
      </div>
      <section className="rhythms-columns rhythms-results" aria-labelledby="rhythms-result-title">
        <ProjectPhoto file="7b92c.png" alt="Visitors viewing the illuminated installation" />
        <div className="rhythms-story">
          <h3 className="eyebrow" id="rhythms-result-title">The result!</h3>
          <p>V1 was on public display in downtown Toronto for 1.5 months, reaching over 120,000 people.</p>
          <p>V2 was on display for 12 hours at Nuit Blanche Toronto, alongside over 20 professional artists and in front of over 2,500 visitors. The team is pictured below!</p>
        </div>
        <video
          className="rhythms-video"
          aria-label="Rhythms of Chaos at Nuit Blanche"
          src="assets/projects/rhythms-nuit-blanche-full.mp4"
          poster="assets/projects/rhythms-nuit-blanche-full.webp"
          controls
          playsInline
          preload="none"
        />
        <ProjectPhoto file="34309.png" alt="Rhythms of Chaos team gathered around the illuminated installation" />
      </section>
      <div className="rhythms-columns rhythms-learnings-row">
        <ProjectPhoto file="rhythms-learnings.webp" alt="On-site wiring repair inside the Rhythms of Chaos installation" />
        <section className="rhythms-learnings">
          <h3 className="eyebrow">The learnings</h3>
          <ul>
            <li>End-to-end electromechanical system development within three-month design cycles.</li>
            <li>On-site troubleshooting and repair when needed.</li>
            <li>Designing for an outdoor public installation.</li>
            <li>Art installations capture both the creativity and the behind-the-scenes blood, sweat, and tears of the artist :)</li>
          </ul>
        </section>
      </div>
      <footer className="rhythms-contact" aria-label="Let’s Connect">
        <ProjectPhoto file="5fca0.svg" alt="" className="rhythms-divider" />
        <h3>Let’s Connect!</h3>
        {contact}
      </footer>
    </article>
  );
}
