import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import imgDeFundo from '../../assets/wsbackground.png';
import wsLogo from '../../assets/logo-ws.png';

export default function Login() {
  const navigate = useNavigate();

  const initLoginClick = () => {
    navigate('/refund');
  };

  return (
    <>
      <main>
        <section className={styles.imageSection}>
          <img src={imgDeFundo} alt="Imagem de fundo" />
        </section>

        <section className={styles.loginSection}>
          <div className={styles.logo}>
            <img src={wsLogo} alt="Logo" />
          </div>
          <h1>Boas vindas ao Novo Portal SISPAR</h1>
          <p>Sistema de Emissão de Boletos e Parcelamento</p>

           <form className={styles.formLogin}>
          <fieldset className={styles.fieldsetLogin}>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputLogin}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className={styles.inputLogin}
              required
            />
             </fieldset>
            <a href="#" className={styles.esqueci}>
              Esqueci minha senha
            </a>

            <div className={styles.areaBtn}>
              <button
                type="button"
                className={styles.btnEntrar}
                onClick={initLoginClick}
              >
                Entrar
              </button>

              <button type="button" className={styles.btnCreate}>
                Criar conta
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
