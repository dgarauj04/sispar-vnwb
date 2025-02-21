import styles from './Profile.module.scss';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const initLogout = () => {
    navigate('/');
  };

  return (
    <>
      <main className={styles.areaPerfil}>
        <section className={styles.btnLogoutProfile}>
          <button className={styles.logoutBtnProfile} onClick={initLogout}>
            <IoIosLogOut />
          </button>
        </section>

        <section className={styles.perfilText}>
          <h1>
            Agradeço por dedicar seu tempo para conferir este projeto, e
            agradeço a VaiNaWeb por proporcionar esta oportunidade de aprender
            com os grandes e melhores instrutores como a Kaka e o Samuca!!
          </h1>
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
