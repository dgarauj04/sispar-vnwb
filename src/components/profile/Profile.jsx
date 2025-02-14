import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Profile() {
  return (
    <>
      <main className={styles.areaPerfil}>
        <section className={styles.perfilText}>
          <p>
            Agradeço por dedicar seu tempo para conferir este projeto. E não se
            preocupe, em breve irei criar meu próprio app de música e irei
            compartilhar com vocês. Fique de olho!
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
              className="linkButton insta"
            >
              <FaInstagram />
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/douglas-araujo-dgprogdev"
              target="_blank"
              className="linkButton linke"
            >
              <FaLinkedin />
              Linkedin
            </a>
            <a
              href="https://github.com/dgarauj04"
              target="_blank"
              className="linkButton githu"
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
