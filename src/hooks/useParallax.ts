import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function useParallax() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateGSAP = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGSAP);
    gsap.ticker.lagSmoothing(0);

    // Setup Parallax Effects
    const ctx = gsap.context(() => {
      // 1. Hero Background Parallax Effect
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBgImg = heroSection.querySelector('img');
        if (heroBgImg) {
          gsap.to(heroBgImg, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        const heroContent = heroSection.querySelector('.grid');
        if (heroContent) {
          gsap.to(heroContent, {
            yPercent: -10,
            opacity: 0.8,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }

      // 2. Section ambient background parallax glows & cards
      const sections = document.querySelectorAll('section');
      sections.forEach((sec) => {
        if (sec.id === 'hero') return;

        // Parallax ambient glow spheres inside sections
        const glows = sec.querySelectorAll('.blur-\\[120px\\], .blur-\\[140px\\], .blur-\\[160px\\], .blur-3xl');
        glows.forEach((glow, idx) => {
          gsap.to(glow, {
            y: (idx + 1) * -40,
            ease: 'none',
            scrollTrigger: {
              trigger: sec,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });

        // Subtle stagger parallax depth for cards / items inside sections
        const parallaxCards = sec.querySelectorAll('.group, .rounded-2xl, .rounded-3xl');
        if (parallaxCards.length > 0) {
          gsap.fromTo(
            parallaxCards,
            { y: 35 },
            {
              y: 0,
              duration: 1,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sec,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(updateGSAP);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);
}
