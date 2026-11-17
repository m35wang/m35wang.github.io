export default function WaterAttackDetails({ contact }) {
return <article className="frame-details water-frame">
<div className="detail-columns">
<div className="detail-stack">
<img className="detail-photo " src="assets/projects/0c34b.png" alt="CAD model of the rack and pinion water shooter" loading="lazy" />
<section>
        <h3 className="eyebrow">
          SKILLS APPLIED
        </h3>
        <ul>
          <li>
            <span>AC Circuit and Mechanical Design</span>
          </li>
          <li>
            <span>Biosignal Interfacing</span>
          </li>
          <li>
            <span>Hardware Troubleshooting</span>
          </li>
          <li>
            <span>Identifying Requirements and Engineering Specifications</span>
          </li>
          <li>
            <span>Arduino</span>
          </li>
          <li>
            <span>Iterative Design Process</span>
          </li>
        </ul>
      </section>
<img className="detail-photo " src="assets/projects/32db3.png" alt="EMG signal processing circuit prototype" loading="lazy" />
<img className="detail-photo " src="assets/projects/be561.png" alt="EMG electrodes placed on the user’s forearm" loading="lazy" />
<img className="detail-photo " src="assets/projects/208b8.png" alt="Wearable water shooter prototype" loading="lazy" />
</div>
<div className="detail-stack">
<section>
        <h3 className="eyebrow">
          THE IDEA
        </h3>
        <p>
          The electrography (EMG) designed water shooter device is for those with limited hand mobility, fine motor disabilities, etc. who have an interest in participating in water shooting fights simply by contracting their bicep muscles.
        </p>
      </section>
<img className="detail-photo " src="assets/projects/998ca.png" alt="Mechanical simulation, force analysis, and engineering calculations" loading="lazy" />
<img className="detail-photo " src="assets/projects/7f41c.png" alt="Signal processing circuit schematic and measured EMG waveform" loading="lazy" />
<section>
        <h3 className="eyebrow">
          THE DESIGN PROCESS
        </h3>
        <ul>
          <li>
            <span>Designed and simulated EMG signal processing circuit using LTSpice and prototyped each sub-circuit (3 order bandpass filter, full-wave rectifier, peak detector, comparator etc.).</span>
          </li>
          <li>
            <span>Applied circuitry troubleshooting to adjust physical circuit based on realistic hardware circumstances and verified the functionality of each subcircuit before integrating another.</span>
          </li>
          <li>
            <span>Modelled prototype with DFA principles using SolidWorks. Simulated rack and pinion mechanism using SolidWorks Motion Analysis for verification of rotational system converting to 12.5N linear force within ~1 second.</span>
          </li>
          <li>
            <span>Prototyped mechanical system with PLA 3D printing, identified issues with tolerancing due to specific printing machine and length of pinion system was shorter due to realistic user sizing. Iterated design based on specific user measurements.</span>
          </li>
          <li>
            <span>Integrated signal processing circuit with EMG sensors, shooting rack and pinion system, and Arduino for final control of circuit-based muscle contraction signals.</span>
          </li>
        </ul>
      </section>
</div></div>
<figure className="water-demo">
  <video
    className="water-demo-video"
    src="assets/projects/water-attack-demo.mp4"
    poster="assets/projects/water-attack-demo-poster.png"
    aria-label="Water Attack prototype demonstration"
    controls
    playsInline
    preload="metadata"
  />
</figure>
<section>
        <h3 className="eyebrow">{`THE OUTCOMES & LEARNINGS`}</h3>
        <ul>
          <li>
            <span>Hardware Troubleshooting!!!!</span>
          </li>
          <li>
            <span>Signal processing circuit filters existing disturbances and noise delivered by EMG sensors to output correct value to Arduino for repetitive use and user control.</span>
          </li>
          <li>
            <span>Medium fidelity prototyped produced for successful and repeatable launch of water at set requirement of ~1 meter distance within ~1 second of time after muscle contraction.</span>
          </li>
          <li>
            <span>User can self assemble system and carry device under 5kg for light mobility.</span>
          </li>
        </ul>
      </section>
<footer className="rhythms-contact"><img src="assets/projects/5fca0.svg" alt="" /><h3>Let’s Connect!</h3>{contact}</footer></article>;
}
