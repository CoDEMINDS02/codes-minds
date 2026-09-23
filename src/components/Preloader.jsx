import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./Preloader.css";

// Easy settings — change these to tune the loader.
const MIN_VISIBLE_MS = 1400; // shortest time the loader stays on screen
const MAX_VISIBLE_MS = 4000; // never keep visitors waiting longer than this
const FADE_MS = 500; // fade-out duration (keep in sync with Preloader.css)
const SHOW_ONCE_PER_SESSION = true; // false = show on every full page load
const STORAGE_KEY = "cm_preloader_seen";

function shouldShow() {
  if (typeof window === "undefined") return false;

  // never on the admin panel
  if (window.location.pathname.startsWith("/admin")) return false;

  // respect visitors who asked for less motion
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  if (SHOW_ONCE_PER_SESSION) {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return false;
    } catch {
      // storage blocked: just show the loader
    }
  }

  return true;
}

function Preloader() {
  const [phase, setPhase] = useState(() => (shouldShow() ? "show" : "done"));

  useEffect(() => {
    if (phase !== "show") return undefined;

    const root = document.documentElement;
    root.classList.add("preloader-lock");

    let minReached = false;
    let loaded = document.readyState === "complete";
    let finished = false;
    let fadeTimer;

    const finish = () => {
      if (finished) return;
      finished = true;
      setPhase("hide");

      fadeTimer = setTimeout(() => {
        root.classList.remove("preloader-lock");

        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // ignore
        }

        setPhase("done");
      }, FADE_MS);
    };

    const tryFinish = () => {
      if (minReached && loaded) finish();
    };

    const minTimer = setTimeout(() => {
      minReached = true;
      tryFinish();
    }, MIN_VISIBLE_MS);

    const maxTimer = setTimeout(finish, MAX_VISIBLE_MS);

    const onLoad = () => {
      loaded = true;
      tryFinish();
    };

    if (!loaded) window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      clearTimeout(fadeTimer);
      window.removeEventListener("load", onLoad);
      root.classList.remove("preloader-lock");
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`preloader ${phase === "hide" ? "preloader--hide" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading CØDES-MINDS"
    >
      <div className="preloader__logo">
        <img src={logo} alt="" />
      </div>

      <div
        className="preloader__bar"
        style={{ "--preloader-duration": `${MIN_VISIBLE_MS}ms` }}
      >
        <span />
      </div>
    </div>
  );
}

export default Preloader;
