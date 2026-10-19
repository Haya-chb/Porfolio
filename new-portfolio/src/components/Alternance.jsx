import { useState, useRef, useEffect } from "react";
import "../styles/Alternance.css";

const TRIGGER_DISTANCE = 110; // distance à partir de laquelle le bouton fuit
const STEP = 80;              // amplitude du décalage
const MARGIN = 20;            // marge par rapport aux bords de la section

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// Limites du décalage pour que le bouton reste dans la section
function getLimits(section, button) {
  const w = button.offsetWidth;
  const h = button.offsetHeight;
  const baseLeft = button.offsetLeft;
  const baseTop = button.offsetTop;

  return {
    baseLeft,
    baseTop,
    w,
    h,
    minX: MARGIN - baseLeft,
    maxX: section.clientWidth - MARGIN - w - baseLeft,
    minY: MARGIN - baseTop,
    maxY: section.clientHeight - MARGIN - h - baseTop,
  };
}

function Alternance() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  // Quand la section change de taille, on recadre le bouton
  useEffect(() => {
    const section = sectionRef.current;
    const button = buttonRef.current;
    if (!section || !button) return;

    const observer = new ResizeObserver(() => {
      const { minX, maxX, minY, maxY } = getLimits(section, button);

      setOffset((prev) => {
        const x = clamp(prev.x, minX, maxX);
        const y = clamp(prev.y, minY, maxY);
        return x === prev.x && y === prev.y ? prev : { x, y };
      });
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function handleMouseMove(e) {
    const section = sectionRef.current;
    const button = buttonRef.current;
    if (!section || !button) return;

    const secRect = section.getBoundingClientRect();
    const { baseLeft, baseTop, w, h, minX, maxX, minY, maxY } = getLimits(
      section,
      button
    );

    // Centre du bouton à sa position CIBLE (pas celle de l'animation en cours)
    const cx = secRect.left + section.clientLeft + baseLeft + offset.x + w / 2;
    const cy = secRect.top + section.clientTop + baseTop + offset.y + h / 2;

    const dx = cx - e.clientX;
    const dy = cy - e.clientY;
    const dist = Math.hypot(dx, dy);

    if (dist > TRIGGER_DISTANCE) return;

    // Direction opposée à la souris
    const ux = dist === 0 ? 1 : dx / dist;
    const uy = dist === 0 ? 0 : dy / dist;

    const tryMove = (vx, vy) => ({
      x: clamp(offset.x + vx * STEP, minX, maxX),
      y: clamp(offset.y + vy * STEP, minY, maxY),
    });

    const moved = (p) => Math.hypot(p.x - offset.x, p.y - offset.y);

    let next = tryMove(ux, uy);

    // Coincé contre un bord : il glisse sur le côté
    if (moved(next) < STEP / 2) {
      const a = tryMove(-uy, ux);
      const b = tryMove(uy, -ux);
      next = moved(a) > moved(b) ? a : b;
    }

    // Toujours coincé (coin) : il saute à l'opposé de la souris
    if (moved(next) < STEP / 2) {
      const mouseX = e.clientX - secRect.left - section.clientLeft;
      const mouseY = e.clientY - secRect.top - section.clientTop;
      next = {
        x: mouseX < section.clientWidth / 2 ? maxX : minX,
        y: mouseY < section.clientHeight / 2 ? maxY : minY,
      };
    }

    setOffset(next);
  }

  return (
    <section
      className="apprentiship__section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className="alternance__content">
        <h2 className="h2-white">Alternance</h2>
        <p className="alternance__texte">
          Souhaitez-vous me prendre en alternance ?
        </p>
      </div>

      <div className="alternance__button">
        <a href="/contact" className="button button-white button-big">
          Oui
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="button button-white button-big button-no"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          Non
        </button>
      </div>
    </section>
  );
}

export default Alternance;