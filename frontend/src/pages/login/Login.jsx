import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import imgDeFundo from '../../assets/wsbackground.png';
import wsLogo from '../../assets/logo-ws.png';
import styles from './Login.module.scss';
import api from '../../services/Api.jsx';


export default function Login() {

  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initLoginClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await api.post('/colaborador/login', {
        email,
        senha
      });

      if (response.status === 200) {
         const colaborador = response.data;
         const { senha, ...dadosSemSenha } = colaborador;
         localStorage.setItem('colaborador', JSON.stringify(dadosSemSenha));

         toast.success('Login realizado com sucesso!', { autoClose: 3000,
          position: 'top-center'});

         navigate('/refund'); 
      }
    } catch (error) {
      let errorMessage = 'Erro ao realizar login';

      if (error.response) {
        console.error('Erro ao realizar login:', error);
        console.log(error.response);
        errorMessage = error.response.data.mensagem || errorMessage;
        
        if (error.response.status === 404) {
          errorMessage = 'Usuário não encontrado';
        } else if (error.response.status === 401) {
          errorMessage = 'Email ou senha inválidos';
        }
      }
      
      toast.error(errorMessage, { autoClose: 4000,
        position: 'top-center'
       });
    } finally {
      setLoading(false);
    }
  };

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

           <form className={styles.formLogin} onSubmit={initLoginClick}>
          <fieldset className={styles.fieldsetLogin}>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputLogin}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Senha"
              className={styles.inputLogin}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              disabled={loading}
            />
             </fieldset>

            <a href="#" className={styles.esqueci}>
              Esqueci minha senha
            </a>

            <div className={styles.areaBtn}>
              <button
                type="submit"
                className={styles.btnEntrar}
                disabled={loading}
              >
               {loading ? 'Carregando...' : 'Entrar'}
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
