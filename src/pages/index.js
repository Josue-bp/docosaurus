import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link to="/docs/intro">
        <img
    src="https://i.pinimg.com/originals/de/30/21/de3021c5618a58faa9f39ba3df133f24.gif"
    alt="computadora"
    className={styles.robotGif}
  />
    </Link>
</div>

        {/* Iconos tipo gamer/dev con URL */}
        <div className={styles.imagesWrapper}>
          <Link to="/docs/tutorial-basics/elementos">
          <img
            className={styles.heroImage}
            src="https://img.icons8.com/fluency/96/source-code.png"
            alt="Code Icon"
          />
           </Link>
           <Link to="/docs/tutorial-basics/consola">
          <img
            className={styles.heroImage}
            src="https://img.icons8.com/color/96/console.png"
            alt="Console Icon"
          />
          </Link>
          <Link to="/docs/tutorial-basics/fuentes">
          <img
            className={styles.heroImage}
            src="https://img.icons8.com/fluency/96/laptop.png" 
            alt="Laptop Icon"
          />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenido a ${siteConfig.title}`}
      description="Plataforma para desarrolladores principiantes con estilo gamer/pro.">
<HomepageHeader />
<main>
  <section className={styles.featureSection}>
    <div className={styles.featureContainer}>
      <div className={styles.featureItem}>
      <Link to="/docs/tutorial-basics/lighthouse">
      <img src="https://img.icons8.com/fluency/96/idea.png" alt="Idea icon" />
      </Link>

      <h3>Fácil de Usar</h3>
        <p>Diseñado para desarrolladores principiantes y gamers con estilo pro.</p>
      </div>
      <div className={styles.featureItem}>
      <Link to="/docs/tutorial-basics/aplicacion">
        <img src="https://img.icons8.com/fluency/96/source-code.png" alt="Code icon" />
        </Link>

        <h3>Código Limpio</h3>
        <p>Estructura clara, mantenible y adaptable a cualquier proyecto.</p>
      </div>
      <div className={styles.featureItem}>
      <Link to="/docs/tutorial-basics/red">
        <img src="https://img.icons8.com/fluency/96/cloud.png" alt="Cloud icon" />
        </Link>

        <h3>Deploy Sencillo</h3>
        <p>Compatible con GitHub Pages, Vercel y Netlify en pocos clics.</p>
      </div>
    </div>
  </section>
</main>

    </Layout>
  );
}
