import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  LayoutGroup,
} from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Spring config shared across all layout transitions
const SPRING = {
  type: 'spring',
  stiffness: 180,
  damping: 26,
  mass: 0.7,
};

const menuItems = [
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'experience', label: 'Experience' },
  { id: 'project',    label: 'Projects'   },
  { id: 'education',  label: 'Education'  },
  { id: 'contact',    label: 'Contact'    },
];

const Navbar = () => {
  const [isOpen,         setIsOpen        ] = useState(false);
  const [activeSection,  setActiveSection ] = useState('');
  const [isHovered,      setIsHovered     ] = useState(false);
  const [isScrolled,     setIsScrolled    ] = useState(false);

  const hoverTimeout = useRef(null);
  const { scrollY }  = useScroll();

  // ── scroll state ──────────────────────────────────────────
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 60);
  });

  // ── hover with debounce ───────────────────────────────────
  const handleHoverStart = () => {
    clearTimeout(hoverTimeout.current);
    setIsHovered(true);
  };
  const handleHoverEnd = () => {
    hoverTimeout.current = setTimeout(() => setIsHovered(false), 80);
  };

  // ── active section detection ──────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const { id } of menuItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) { current = id; break; }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    setIsOpen(false);
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // ── derived state ─────────────────────────────────────────
  const isCompact = isScrolled && !isHovered && !isOpen;

  // label shown in compact pill – falls back gracefully
  const activeLabel = menuItems.find(m => m.id === activeSection)?.label ?? '';

  return (
    // LayoutGroup scopes all layoutId values to this tree
    <LayoutGroup id="navbar">
      <div className="fixed left-0 z-50 flex justify-center w-full px-4 pointer-events-none top-4">

        <motion.nav
          layout
          transition={{ layout: SPRING }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          animate={{ scale: isCompact ? 0.96 : 1 }}
          className={[
            'relative flex flex-col overflow-hidden',
            'border border-white/20 shadow-lg shadow-black/30',
            'backdrop-blur-2xl bg-white/5',
            'pointer-events-auto group',
          ].join(' ')}
          style={{
            borderRadius: isCompact ? '999px' : '28px',
            padding:      isCompact ? '8px 16px' : '12px 20px',
            width:        'fit-content',
            maxWidth:     '95vw',
            transition:   'border-radius 0.35s cubic-bezier(0.25,0.8,0.25,1), padding 0.35s cubic-bezier(0.25,0.8,0.25,1)',
          }}
        >
          {/* hover glow */}
          <div className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* ── main row ─────────────────────────────────── */}
          <div className="relative z-10 flex items-center gap-4 text-white">

            {/* LOGO
                ─────────────────────────────────────────────
                The logo text is a layout element so it slides
                naturally as the nav resizes – no AnimatePresence
                so it never leaves the DOM and causes discontinuity.
            */}
            <motion.div
              layout="position"
              onClick={() => handleClick('home')}
              className="flex items-center cursor-pointer select-none whitespace-nowrap"
            >
              {isCompact ? (
                // Compact: "P" monogram  +  active label using SHARED layoutId
                <div className="flex items-center gap-2">
                  <motion.span
                    layout="position"
                    className="text-lg font-bold leading-none"
                  >
                    P
                  </motion.span>

                  {/* ★ SHARED LABEL – compact side ★
                      layoutId matches the expanded menu item label below.
                      Because the element stays mounted in ONE of the two
                      positions at a time, Framer Motion performs a true
                      positional morph without opacity/width hacks.        */}
                  {activeLabel && (
                    <motion.span
                      layoutId={`section-label-${activeSection}`}
                      layout
                      transition={SPRING}
                      className="text-sm leading-none text-white/70"
                    >
                      {activeLabel}
                    </motion.span>
                  )}
                </div>
              ) : (
                // Expanded: full name
                <motion.div
                  layout="position"
                  className="text-lg font-semibold leading-none"
                >
                  <span className="text-[#8245ec]">&lt;</span>
                  Prayas<span className="text-[#8245ec]">/</span>Pandey
                  <span className="text-[#8245ec]">&gt;</span>
                </motion.div>
              )}
            </motion.div>

            {/* DESKTOP MENU
                ─────────────────────────────────────────────
                Rendered when expanded. Each active label uses
                the SAME layoutId as the compact label above,
                so Framer morphs position between them.
                The menu itself fades/slides, but the active
                label text does a pure layout morph.
            */}
            {!isCompact && (
              <motion.ul
                layout
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={SPRING}
                className="items-center hidden gap-1 md:flex"
              >
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id} className="relative">
                      <button
                        onClick={() => handleClick(item.id)}
                        className={[
                          'relative z-10 px-3 py-2 text-sm rounded-full transition-colors duration-150',
                          isActive ? 'text-white' : 'text-white/65 hover:text-white',
                        ].join(' ')}
                      >
                        {/* ★ SHARED LABEL – expanded side ★
                            Only the ACTIVE item renders this span with a
                            layoutId. Non-active items are plain text.
                            This guarantees exactly one copy of the
                            layoutId exists at any moment.               */}
                        {isActive ? (
                          <motion.span
                            layoutId={`section-label-${item.id}`}
                            layout
                            transition={SPRING}
                            className="relative z-10"
                          >
                            {item.label}
                          </motion.span>
                        ) : (
                          <span>{item.label}</span>
                        )}
                      </button>

                      {/* sliding pill background */}
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          transition={SPRING}
                          className="absolute inset-0 bg-[#8245ec]/20 border border-[#8245ec]/40 rounded-full -z-0"
                        />
                      )}
                    </li>
                  );
                })}
              </motion.ul>
            )}

            {/* SOCIAL ICONS */}
            {!isCompact && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={SPRING}
                className="items-center hidden gap-3 md:flex"
              >
                <a
                  href="https://github.com/Prayas-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#8245ec] transition-colors duration-150"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prayas-pandey-8565a2256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#8245ec] transition-colors duration-150"
                >
                  <FaLinkedin size={16} />
                </a>
              </motion.div>
            )}

            {/* MOBILE HAMBURGER */}
            {!isCompact && (
              <button
                className="p-2 transition rounded-full md:hidden bg-white/10 hover:bg-white/20"
                onClick={() => setIsOpen(prev => !prev)}
              >
                {isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
              </button>
            )}
          </div>

          {/* MOBILE DROPDOWN */}
          {isOpen && !isCompact && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0.8, 0.25, 1] }}
              className="pt-3 mt-3 overflow-hidden border-t md:hidden border-white/10"
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={[
                    'block w-full px-3 py-2 text-left text-sm rounded-lg transition-colors duration-150',
                    activeSection === item.id
                      ? 'text-white bg-[#8245ec]/20'
                      : 'text-white/65 hover:text-white hover:bg-white/5',
                  ].join(' ')}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </motion.nav>

      </div>
    </LayoutGroup>
  );
};

export default Navbar;