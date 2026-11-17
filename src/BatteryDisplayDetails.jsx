export default function BatteryDisplayDetails({ contact }) {
return <article className="frame-details battery-frame">
<div className="detail-columns">
<div className="detail-stack">
<img className="detail-photo battery-intro" src="assets/projects/75a55.png" alt="Display and indicator lights installed in the Nexus" loading="lazy" />
<section>
        <h3 className="eyebrow">
          SKILLS APPLIED
        </h3>
        <ul>
          <li>
            <span>KiCAD - PCB Layout Design</span>
          </li>
          <li>
            <span>PCB Testing</span>
          </li>
          <li>
            <span>STM32 Firmware Development</span>
          </li>
          <li>
            <span>Hardware Integration</span>
          </li>
          <li>
            <span>Figma - UX/UI Design of Interface</span>
          </li>
        </ul>
      </section>
<section>
        <h3 className="eyebrow">
          THE DESIGN PROCESS
        </h3>
        <ul>
          <li>
            <span>{`Tested initial proof of concept with STM32 firmware via SPI and analyzed changes for initial display prototype seen on the right. `}</span>
          </li>
          <li>
            <span>Conducted design reviews and product requirements discussions with management.</span>
          </li>
          <li>
            <span>Designed new version of PCB based on production unit needs with debug port and more compact mechanical layout with KiCAD while not compromising functionality. Used company library and completed component selection via Digikey and JLC PCB.</span>
          </li>
          <ul>
            <li>
              <span>Ensured high power 24V and components were isolated from low power 3.3V e-ink display circuit.</span>
            </li>
            <li>
              <span>Ensured component placement satisfied mechanical integration requirements.</span>
            </li>
          </ul>
        </ul>
      </section>
<img className="detail-photo " src="assets/projects/40d30.png" alt="3D PCB assembly showing the connectors and display" loading="lazy" />
<img className="detail-photo " src="assets/projects/3c9ec.png" alt="Battery display connected to test equipment" loading="lazy" />
<section>
        <h3 className="eyebrow">{`THE OUTCOMES & LEARNINGS`}</h3>
        <div>
          <ul>
            <li>
              <span>Completed 2 iterations of PCB display board within 4 month timeline based on product iterations.</span>
            </li>
            <li>
              <span>{`Integrated with battery management system for final production level units. `}</span>
            </li>
            <li>
              <span>Considerations for readability of user interface design within a construction environment and display size restrictions!</span>
            </li>
          </ul>
          <p>{` `}</p>
        </div>
      </section>
</div>
<div className="detail-stack">
<section>
        <h3 className="eyebrow">
          THE IDEA
        </h3>
        <div>
          <p>{`Was responsible for end-to-end development of a display for battery and system updates of an new construction IoT device (Nexus).  `}</p>
          <p></p>
          <p>The main problems were:</p>
          <ul>
            <li>
              <span>How can I design a easy to interpret and informative user interface?</span>
            </li>
            <li>
              <span>{`Identify iterations on the PCB for final production units  of the device?`}</span>
            </li>
          </ul>
        </div>
      </section>
<div className="battery-design-photos detail-stack">
<img className="detail-photo board-v1" src="assets/projects/4f8bd.png" alt="Initial battery display board" loading="lazy" />
<img className="detail-photo board-v2" src="assets/projects/ae7b7.png" alt="Battery display prototype with interface" loading="lazy" />
<img className="detail-photo " src="assets/projects/23e08.png" alt="PCB routing and component layout in KiCad" loading="lazy" />
</div>
<section>
        <h3 className="eyebrow">
          THE INTEGRATION
        </h3>
        <ul>
          <li>
            <span>{`Completed initial testing of V2 of board for functionality. `}</span>
          </li>
          <li>
            <span>Initiated brainstorm and ideation of display user flow. Proposed user interface design options based on hardware product interface research.</span>
          </li>
          <li>
            <span>Communicated top 3 options with upper management for decisions.</span>
          </li>
          <li>
            <span>{`Programmed firmware of display board to interface with battery management system. `}</span>
          </li>
          <ul>
            <li>
              <span>{`Designed communication protocol via UART and interrupt service. `}</span>
            </li>
            <li>
              <span>{`Ensured low power operation implementing sleep mode of e-ink display. `}</span>
            </li>
          </ul>
          <li>
            <span>Troubleshooted slow update display issue and implemented flash method for faster updates.</span>
          </li>
        </ul>
      </section>
<figure className="battery-product"><img className="detail-photo " src="assets/projects/19b5e.png" alt="The Nexus construction IoT device" loading="lazy" /><figcaption>The Nexus!<br />(the display is on the left side)</figcaption></figure>
</div></div>
<footer className="rhythms-contact"><img src="assets/projects/5fca0.svg" alt="" /><h3>Let’s Connect!</h3>{contact}</footer></article>;
}
