import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { projects } from "./projects.js";
import RhythmsDetails from "./RhythmsDetails.jsx";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const opener = useRef(null);

  function openProject(project, event) {
    opener.current = event.currentTarget;
    setActiveProject(project);
  }

  function closeProject() {
    setActiveProject(null);
    opener.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <div className="site">
        <div className="top-decoration" aria-hidden="true">
          <img className="wash top-wash" src="assets/fd629.svg" alt="" />
          <img className="wash intro-wash" src="assets/fd629.svg" alt="" />
          <img className="flower left-flower" src="assets/3c802.png" alt="" />
          <img className="petal peach-left" src="assets/310bb.svg" alt="" />
          <img className="flower top-flower" src="assets/3c802.png" alt="" />
          <img className="flower middle-flower" src="assets/3c802.png" alt="" />
          <img className="flower edge-flower" src="assets/3c802.png" alt="" />
          <img className="petal peach-top" src="assets/310bb.svg" alt="" />
          <img className="petal blue-top" src="assets/6c6a3.svg" alt="" />
        </div>
        <header className="masthead">
          <a href="#top">maggie wang</a>
          <span title="Résumé link pending">resume</span>
        </header>
        <main>
          <Greeting />
          <section className="projects" aria-labelledby="projects-title">
            <div className="project-decoration" aria-hidden="true">
              <img className="wash side-wash" src="assets/c2daa.svg" alt="" />
              <div className="circuit side-circuit">
                <img className="traces" src="assets/1badd.svg" alt="" />
                <img className="rings" src="assets/af65e.svg" alt="" />
                <img className="pale" src="assets/01ca5.svg" alt="" />
                <img className="centers" src="assets/4efb6.svg" alt="" />
                <img className="pads" src="assets/8cf2a.svg" alt="" />
              </div>
            </div>
            <h2 className="wrap" id="projects-title">Welcome to my gallery!</h2>
            <ProjectCarousel onOpen={openProject} />
          </section>
          <section className="gallery" aria-label="Photo gallery">
            <img className="wash gallery-wash" src="assets/fc0aa.svg" alt="" />
            <img className="flower gallery-flower" src="assets/3c802.png" alt="" />
            <img className="flower gallery-edge" src="assets/3c802.png" alt="" />
            <img className="petal peach-gallery" src="assets/310bb.svg" alt="" />
            <div className="wrap gallery-content">
              <div className="portrait">
                <img src="assets/5a60e.png" alt="Maggie Wang on a city street" />
              </div>
              <img className="petal blue-gallery" src="assets/6c6a3.svg" alt="" />
              <div className="gallery-copy">
                <h2>Thanks for stopping by 👋</h2>
                <p>I’m a final year engineering student @ University of Waterloo currently looking for <strong>full time</strong> hardware and electrical opportunities!</p>
              </div>
            </div>
          </section>
          <PhotoStrip />
        </main>
        <footer className="site-footer" aria-labelledby="connect-title">
          <h2 id="connect-title">Let’s Connect!</h2>
          <SocialLinks />
        </footer>
      </div>
      <ProjectDialog project={activeProject} onClose={closeProject} />
    </>
  );
}

function SocialLinks({ linkedInGlyph = "assets/2199c.svg" }) {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/maggie04/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <img src="assets/da6d3.svg" alt="" />
        <img className="social-glyph" src={linkedInGlyph} alt="" />
      </a>
      <a className="email-icon" href="https://outlook.office.com/mail/deeplink/compose?to=m35wang%40uwaterloo.ca" aria-label="Email Maggie in Outlook" target="_blank" rel="noopener noreferrer">
        <img src="assets/d9072.svg" alt="" />
        <img className="social-glyph" src="assets/b83eb.svg" alt="" />
      </a>
      <span className="resume-icon" role="img" aria-label="Résumé" title="Résumé link pending">
        <img src="assets/d9040.svg" alt="" />
        <img className="social-glyph" src="assets/f86b1.svg" alt="" />
      </span>
    </div>
  );
}

const galleryPhotos = [
  ["d1507.png", "A 3D printer at work", "center bottom"],
  ["6c0f5.png", "A workbench setup with circuit boards and jumper wires"],
  ["12295.png", "A croissant and a sketch"],
  ["4ee2e.png", "A circuit prototype with glowing LEDs", "right center"],
  ["dc4bc.png", "A hiker looking out over snowy mountains"],
  ["df6d8.png", "A laptop and art supplies on a table"],
  ["fbc33.png", "A handheld electronics assembly", "center 82%"],
  ["27fbc.png", "A table filled with shared dishes"],
  ["be894.png", "Mountain ridges at sunset", "center bottom"],
  ["f716e.png", "Two people smiling outdoors", "center bottom"]
];

function PhotoStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="photo-strip wrap" aria-labelledby="photo-strip-title">
      <h2 id="photo-strip-title">Are pictures worth a thousand words?</h2>
      <div className="photo-strip-window" id="photo-strip-window" tabIndex={0} aria-label="Photo strip">
        <div className="photo-strip-track" data-paused={paused}>
          {[false, true].map(duplicate => (
            <ul className={duplicate ? "photo-strip-copy duplicate" : "photo-strip-copy"} key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {galleryPhotos.map(([file, alt, position]) => (
                <li key={file}>
                  <img src={"assets/photo-strip/" + file} alt={duplicate ? "" : alt} style={position ? { objectPosition: position } : undefined} decoding="async" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button className="photo-strip-toggle" type="button" aria-controls="photo-strip-window" onClick={() => setPaused(value => !value)}>
        {paused ? "Play photo slideshow" : "Pause photo slideshow"}
      </button>
    </section>
  );
}

function Tags({ project, className = "" }) {
  const classes = ["tags", project.peach && "peach", className].filter(Boolean).join(" ");
  return (
    <ul className={classes} aria-label="Technologies">
      {project.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  );
}

const greetingPrefix = "Hello I’m";
const greetingEndings = ["Maggie", "a builder", "a foodie", "a hardware tinkerer", "an adventurer", "a creative", "a runner"];

const greetingCycleMs = 2000;
const eraseCharacterMs = 34;
const typeCharacterMs = 62;

function Greeting() {
  const [typing, setTyping] = useState({ index: 0, length: greetingEndings[0].length, deleting: false });
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const ending = greetingEndings[typing.index];

  useEffect(() => {
    if (paused) return;

    const { index, length, deleting } = typing;
    const complete = length === ending.length;
    const nextIndex = (index + 1) % greetingEndings.length;
    const transitionMs = ending.length * eraseCharacterMs + greetingEndings[nextIndex].length * typeCharacterMs;
    const holdMs = Math.max(0, greetingCycleMs - transitionMs);
    const delay = deleting ? eraseCharacterMs : complete ? holdMs : typeCharacterMs;
    const timer = window.setTimeout(() => {
      if (deleting && length === 0) {
        setTyping({ index: nextIndex, length: 0, deleting: false });
      } else if (deleting || complete) {
        setTyping({ index, length: length - 1, deleting: true });
      } else {
        setTyping({ index, length: length + 1, deleting: false });
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [ending, paused, typing]);

  return (
    <section className="intro wrap" aria-labelledby="intro-title">
      <h1 id="intro-title" aria-label={`${greetingPrefix} ${greetingEndings[0]}`}>
        <span className="greeting-prefix" aria-hidden="true">{greetingPrefix}</span>
        <span className="greeting-ending" aria-hidden="true">
          <span className={paused ? undefined : "typing-caret"}>{ending.slice(0, typing.length)}</span>
        </span>
      </h1>
      <button className="greeting-toggle" type="button" onClick={() => setPaused(paused => !paused)}>
        {paused ? "Play greeting rotation" : "Pause greeting rotation"}
      </button>
    </section>
  );
}

function ProjectCarousel({ onOpen }) {
  const [{ current, previous, direction }, setSlide] = useState({ current: 0, previous: null, direction: "next" });
  const project = projects[current];
  const previousImage = projects[previous]?.image;
  const title = project.title;
  const before = projects[(current + projects.length - 1) % projects.length];
  const after = projects[(current + 1) % projects.length];
  const open = event => onOpen(project, event);

  function move(offset) {
    setSlide(({ current }) => ({
      current: (current + offset + projects.length) % projects.length,
      previous: current,
      direction: offset > 0 ? "next" : "previous"
    }));
  }

  return (
    <div className="project-carousel" aria-label="Selected projects">
      <button className="project-preview preview-before" type="button" aria-label="Previous project preview" onClick={() => move(-1)}><img src={before.image.src} alt="" /></button>
      <button className="project-preview preview-after" type="button" aria-label="Next project preview" onClick={() => move(1)}><img src={after.image.src} alt="" /></button>
      <img className="flower projects-flower" src="assets/3c802.png" alt="" />
      <button className="carousel-arrow previous" type="button" aria-label="Previous project" onClick={() => move(-1)}><CarouselArrow /></button>
      <button className="carousel-arrow next" type="button" aria-label="Next project" onClick={() => move(1)}><CarouselArrow /></button>
      <article className="carousel-card" aria-label={title}>
        <button className="project-image" type="button" onClick={open} aria-label={`View ${title}`} aria-haspopup="dialog">
          <span key={current} className="project-image-slides" data-direction={direction} data-transition={previous !== null} aria-hidden="true">
            {previous !== null && (
              <span className="project-image-layer outgoing">
                {previousImage && <img src={previousImage.src} alt="" />}
              </span>
            )}
            <span className="project-image-layer incoming">
              {project.image && <img src={project.image.src} alt="" />}
            </span>
          </span>
        </button>
        <h3 aria-live="polite"><button type="button" onClick={open} aria-haspopup="dialog">{title}</button></h3>
        {project.description && <p className="description">{project.description}</p>}
        <Tags project={project} />
      </article>
    </div>
  );
}

function CarouselArrow() {
  return (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  const content = useRef(null);

  useLayoutEffect(() => {
    if (!project) return;
    const element = dialog.current;
    if (!element.open) element.showModal();
    content.current.scrollTop = 0;
  }, [project]);

  return (
    <dialog
      ref={dialog}
      id="project-dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      {project && (
        <div className="dialog-panel">
          <header className="dialog-heading">
            <div className="dialog-title-row">
              <h2 id="dialog-title">{project.title}</h2>
              <form method="dialog">
                <button className="close" aria-label="Close project">×</button>
              </form>
            </div>
            <Tags project={project} />
          </header>
          <div ref={content} className="dialog-scroll" tabIndex={0} role="region" aria-label="Project details">
            {project.id === 1 ? <RhythmsDetails contact={<SocialLinks linkedInGlyph="assets/projects/0d46e.svg" />} /> : (
              <div className="dialog-coming-soon">
                <p>Thanks for clicking in :)</p>
                <p>More details coming soon!</p>
                <SocialLinks />
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
