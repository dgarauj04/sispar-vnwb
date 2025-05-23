import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgDeFundo from '../../assets/wsbackground.png';
import wsLogo from '../../assets/logo-ws.png';
import styles from './Login.module.scss';
import api from '../../services/Api.jsx';


export default function Login() {

  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  const navigate = useNavigate();

  /*const initLoginClick = async () => {
   try {
    await api.post('/colaborador/login', {
      email: email,
      senha: senha,
    });
    
    navigate('/refund');
   }
   catch {
    alert('Email ou senha incorretos');
   } 
  };*/

  const initCreateAccountClick = () => {
    navigate('/create-account');
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className={styles.inputLogin}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
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
                /*onClick={initLoginClick}*/
              >
                Entrar
              </button>

              <button 
              type="button" 
              className={styles.btnCreate}
              onClick={initCreateAccountClick}
              >
                Criar conta
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
