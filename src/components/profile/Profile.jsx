import styles from './Profile.module.scss'
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Profile() {
  return (
    <>
      <main className={styles.areaPerfil}>
        <section className={styles.perfilText}>
          <p>
            Agradeço por dedicar seu tempo para conferir este projeto.E Agradeçoa a VaiNaWeb por proporcionar esta oportunidade de aprender com os grandes e melhores instrutores como a Kaka e o Samuca!!
          </p>
        </section>

        <section className={styles.perfilSection}>
          <figure>
            <img src="https://github.com/dgarauj04.png" alt="minha imagem" />
          </figure>
          <div className={styles.linksNav}>
            <a
              href="https://instagram.com/dgaraujoo_"
              target="_blank"
              className={styles.linkButtonInsta}
            >
              <FaInstagram />
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/douglas-araujo-dgprogdev"
              target="_blank"
              className={styles.linkButtonLinke}
            >
              <FaLinkedin />
              Linkedin
            </a>
            <a
              href="https://github.com/dgarauj04"
              target="_blank"
              className={styles.linkButtonGithu}
            >
              <FaGithub />
              Github
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
