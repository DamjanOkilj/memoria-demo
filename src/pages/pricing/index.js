import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Pricing = () => {
  const [isDark, setIsDark] = useState(false);

  const detectTheme = () => {
    // 1) check explicit attribute set by Themetoggle (documentElement data-theme)
    const attrRaw = document.documentElement.getAttribute("data-theme");
    const attr = typeof attrRaw === "string" ? attrRaw.trim().toLowerCase() : null;
    if (attr === "dark") return true;
    if (attr === "light") return false;
    
    // 2) check localStorage (Themetoggle writes here) - normalize values
    try {
      const lsRaw = localStorage.getItem("theme");
      const ls = typeof lsRaw === "string" ? lsRaw.trim().toLowerCase() : null;
      if (ls === "dark") return true;
      if (ls === "light") return false;
    } catch (e) {
      // ignore storage errors (privacy mode)
    }

    // 3) fallback to OS preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const apply = () => {
      const nowDark = detectTheme();
      setIsDark(nowDark);
      // ensure page-level classes so CSS variables switch reliably
      document.documentElement.classList.toggle("dark", nowDark);
      document.documentElement.classList.toggle("light", !nowDark);
    };

    apply();

    // observe changes to data-theme on <html> (Themetoggle uses setAttribute)
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-theme") {
          apply();
          break;
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    // listen for localStorage changes (other tabs / toggles)
    const onStorage = (e) => {
      if (!e.key) return;
      if (e.key.toLowerCase().includes("theme")) apply();
    };
    window.addEventListener("storage", onStorage);

    // listen for OS preference changes
    const mql = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const onMql = () => apply();
    if (mql && mql.addEventListener) mql.addEventListener("change", onMql);
    else if (mql && mql.addListener) mql.addListener(onMql);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", onStorage);
      if (mql && mql.removeEventListener) mql.removeEventListener("change", onMql);
      else if (mql && mql.removeListener) mql.removeListener(onMql);
    };
  }, []);

  return (
    <main className={`main ${isDark ? "dark" : "light"}`}>
      <h1 className="title">Prijzen &amp; Informatie</h1>

      <section className="infoSection">
        <div className="infoBlock">
          <h2>Locatie</h2>
          <p>
            De locatie is natuurlijk bespreekbaar en is afhankelijk van het thema en de stijl van de foto's die je wil. Ik werk
            voornamelijk in regio Turnhout, Antwerpen en omgeving. Voor alle locaties in een straal van 10 km rond Turnhout, vraag ik
            geen kilometervergoeding. Verder dan dat wel, dat is logisch.
          </p>
        </div>

        <div className="infoBlock">
          <h2>Duur van de fotoshoot</h2>
          <p>
            Een fotoshoot duurt normaal gezien ca. 2 uur. Je kan in die tijd ook wisselen van outfit. We zorgen er natuurlijk voor dat
            het lijkt alsof je evenveel fotoshoots deed. Geen identieke achtergronden met enkel de pose die verschilt dus.
          </p>
        </div>

        <div className="infoBlock">
          <h2>Wanneer heb je je foto's?</h2>
          <p>
            De avond van de shoot krijg je van mij alle foto's die we die dag namen via WeTransfer. Je krijgt ze in hoge resolutie en zonder
            watermerk of logo erop, zonder mijn bewerkingen. Uit de grote reeks foto's, kies ik er een aantal om te bewerken én jij mag er ook
            nog eens 30 kiezen. Geef je keuze via mail aan me door en ik bezorg je binnen de drie werkdagen de bewerkte foto's. Geen lange wachttijden dus!
          </p>
        </div>

        <div className="infoBlock">
          <h2>Wat bij slecht weer?</h2>
          <p>
            Indien de fotoshoot op een buitenlocatie zou doorgaan en het blijkt dat op het afgesproken tijdstip het weer echt niet meezit, dan
            verplaatsen we onze afspraak. Ik kijk drie dagen voor de afgesproken datum sowieso naar het weerbericht. Dan beslis ik of het door kan
            gaan of niet. Uiteraard zijn er ook overdekte opties.
          </p>
        </div>

        <div className="infoBlock">
          <h2>Is ervaring in fotoshoots nodig?</h2>
          <p>Natuurlijk moet dat niet. Ik begeleid je van a tot z!</p>
        </div>
      </section>

      <section className="pricingSection">
        <h2>Prijzen</h2>
        <div className="priceCards">
          <div className="priceCard">
            <h3>Portret Fotografie</h3>
            <p className="price">€380</p>
            <p className="duration">2 uur</p>
          </div>

          <div className="priceCard">
            <h3>Koppels of Vrienden</h3>
            <p className="price">€380</p>
            <p className="duration">2 uur</p>
          </div>

          <div className="priceCard">
            <h3>Bruiloft</h3>
            <p className="price">vanaf €1000</p>
          </div>

          <div className="priceCard">
            <h3>Zakelijke Shoot</h3>
            <p className="contactPrice">Contacteer via email</p>
          </div>
        </div>
      </section>

      <div className="cta">
        <Link to="/contact" className="ctaButton">
          Boek uw fotoshoot
        </Link>
      </div>
    </main>
  );
};