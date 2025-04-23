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
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Ver Tutorial - 5min ⏱️
          </Link>
        </div>

        {/* Iconos tipo gamer/dev con URL */}
        <div className={styles.imagesWrapper}>
          <img
            className={styles.heroImage}
            src="https://img.icons8.com/fluency/96/source-code.png"
            alt="Code Icon"
          />
          <img
            className={styles.heroImage}
            src="https://img.icons8.com/color/96/console.png"
            alt="Console Icon"
          />
          <img
            className={styles.heroImage}
            src="https://img.icons8.com/fluency/96/laptop.png" 
            alt="Laptop Icon"
          />
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
        {/* Puedes dejar esto o poner otros componentes */}
      </main>
    </Layout>
  );
}
