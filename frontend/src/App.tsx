import {
  BookOpen,
  Calculator,
  Gamepad2,
  Heart,
  LockKeyhole,
  Star,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";
import "./App.css";

const ageGroups = [
  {
    age: "3–5 ans",
    title: "Je découvre",
    description: "Les premières lettres, les nombres et les couleurs.",
    icon: Sparkles,
    color: "lavender",
  },
  {
    age: "6–8 ans",
    title: "J'apprends",
    description: "Je développe mes connaissances en jouant.",
    icon: BookOpen,
    color: "turquoise",
  },
  {
    age: "9–12 ans",
    title: "Je progresse",
    description: "Je relève des défis et je gagne en autonomie.",
    icon: Trophy,
    color: "coral",
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <a className="brand" href="#" aria-label="Elf-ant accueil">
          <span className="brand-mark">E</span>
          <span>elf-ant<span className="brand-dot">.</span></span>
        </a>

        <nav className="navigation" aria-label="Navigation principale">
          <a href="#univers">Nos univers</a>
          <a href="#ages">Les parcours</a>
          <a href="#parents">Pour les parents</a>
        </nav>

        <a className="parent-button" href="#parents">
          <Users size={17} />
          Espace parents
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              <Sparkles size={15} /> APPRENDRE EN S'AMUSANT
            </span>

            <h1>
              Chaque jour,<br />
              une nouvelle <span>aventure !</span>
            </h1>

            <p className="hero-description">
              Bienvenue dans un monde où apprendre devient un jeu.
              Explore, découvre et progresse à ton rythme !
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#ages">
                Découvrir les parcours
                <span>→</span>
              </a>
              <a className="secondary-button" href="#univers">
                Explorer les jeux
              </a>
            </div>

            <div className="hero-trust">
              <span><Heart size={16} /> Pensé pour les enfants</span>
              <span><LockKeyhole size={16} /> Un espace sécurisé</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Univers éducatif Elf-ant">
            <div className="art-sun" />
            <div className="art-star star-one">✦</div>
            <div className="art-star star-two">✧</div>
            <div className="art-cloud cloud-one" />
            <div className="art-cloud cloud-two" />
            <div className="elephant">
              <div className="elephant-ear" />
              <div className="elephant-head">
                <div className="elephant-eye" />
                <div className="elephant-cheek" />
                <div className="elephant-trunk" />
              </div>
              <div className="elephant-body">
                <div className="elephant-leg leg-one" />
                <div className="elephant-leg leg-two" />
              </div>
              <div className="elephant-foot foot-one" />
              <div className="elephant-foot foot-two" />
            </div>
            <div className="art-caption">L'aventure commence ici !</div>
          </div>
        </section>

        <section className="age-section" id="ages">
          <div className="section-heading">
            <span className="eyebrow">TON AVENTURE, TON RYTHME</span>
            <h2>Choisis ton univers</h2>
            <p>Des activités adaptées à chaque étape de ta découverte.</p>
          </div>

          <div className="age-grid">
            {ageGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className={`age-card ${group.color}`} key={group.age}>
                  <div className="age-icon"><Icon size={28} /></div>
                  <span className="age-label">{group.age}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <a href="#univers" aria-label={`Découvrir le parcours ${group.age}`}>
                    Découvrir <span>→</span>
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="universe-section" id="univers">
          <div className="section-heading">
            <span className="eyebrow">JEUX ET APPRENTISSAGES</span>
            <h2>Apprendre en jouant</h2>
            <p>Des activités amusantes pour découvrir de nouvelles choses.</p>
          </div>

          <div className="universe-grid">
            <article className="universe-card math">
              <Calculator size={27} />
              <div>
                <h3>Les mathématiques</h3>
                <p>Compter, calculer et résoudre des défis.</p>
              </div>
            </article>

            <article className="universe-card words">
              <BookOpen size={27} />
              <div>
                <h3>Les mots et les lettres</h3>
                <p>Enrichir son vocabulaire et lire.</p>
              </div>
            </article>

            <article className="universe-card memory">
              <Gamepad2 size={27} />
              <div>
                <h3>Les jeux de mémoire</h3>
                <p>Observer, mémoriser et réfléchir.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="parent-section" id="parents">
          <div className="parent-icon"><LockKeyhole size={30} /></div>
          <div>
            <span className="eyebrow">UN ESPACE DÉDIÉ AUX PARENTS</span>
            <h2>Vous accompagnez ses progrès.</h2>
            <p>
              Gérez les profils de vos enfants, suivez leurs apprentissages
              et gardez le contrôle de leurs paramètres de confidentialité.
            </p>
          </div>
          <a href="#top" className="parent-link">Espace parents →</a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark">E</span>
          <span>elf-ant<span className="brand-dot">.</span></span>
        </a>
        <span>Grandir, découvrir et apprendre ensemble.</span>
        <span>© 2026 Elf-ant</span>
      </footer>
    </div>
  );
}

export default App;
