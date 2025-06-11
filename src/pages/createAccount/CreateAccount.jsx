import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import wsLogo from '../../assets/logo-ws.png';
import styles from './CreateAccount.module.scss';
import { MdEmail, MdWork } from "react-icons/md";
import { IoMdLock, IoLogoUsd } from "react-icons/io";
import { HiIdentification, HiUser } from "react-icons/hi2";
import api from '../../services/Api.jsx';

export default function CreateAccount() {
const [efeito, setEfeito] = useState(false);
const navigate = useNavigate();
const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tempo = setTimeout(() => {
      setEfeito(true);
    }, 800);
    
    return () => clearTimeout(tempo);
  }, []);

 const [formCreate, setFormCreate] = useState({
    nome: '',
    email: '',
    senha: '',
    cargo: '',
    salario: '',
    cracha: ''
  });
  const createChange = (e) => {
    const { name, value } = e.target;
    setFormCreate(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const createSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/colaborador/cadastrar', {
        nome: formCreate.nome,
        email: formCreate.email,
        senha: formCreate.senha,
        cargo: formCreate.cargo,
        salario: Number(formCreate.salario),
        cracha: formCreate.cracha
      });

      if (response.status === 201) {
        toast.success('Conta criada com sucesso!', { autoClose: 3000, position: 'top-center' });
        submitReset();
        navigate('/');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      console.log(error.response);
      toast.error(error.response?.data?.mensagem || 'Erro ao criar conta', { autoClose: 4000, position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  const submitReset = () => {
    setFormCreate({
      nome: '',
      email: '',
      senha: '',
      cargo: '',
      salario: '',
      cracha: ''
    });
  };

  return (
    <main className={styles.container}>
        <section className={`${styles.createArea} ${efeito ? styles.open : ''}`}>
        <div className={styles.createLogo}>
            <img src={wsLogo} alt="Logo" />
            <h1>Criar Conta</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

         <form className={`${styles.formCreate} ${efeito ? styles.open : ''}`} onSubmit={createSubmit}>
                    <label htmlFor="nome">Nome*</label>
                    <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}><HiUser /></span>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome"
                      className={styles.inputCreate}
                      value={formCreate.nome}
                      onChange={createChange}
                      required
                      disabled={loading}
                    />
                    </div>

                    <label htmlFor="email">Email*</label>
                    <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}><MdEmail /></span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={styles.inputCreate}
                        value={formCreate.email}
                        onChange={createChange}
                        required
                        disabled={loading}
                      />
                      </div>

                      <label htmlFor="senha">Senha*</label>
                      <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}><IoMdLock /></span>
                      <input
                        type="password"
                        name="senha"
                        placeholder="senha123"
                        className={styles.inputCreate}
                        value={formCreate.senha}
                        onChange={createChange}
                        required
                        disabled={loading}
                      />
                      </div>

                      <label htmlFor="cargo">Cargo*</label>
                      <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}><MdWork /></span>
                      <input
                        type="text"
                        name="cargo"
                        placeholder="Desenvolvedor Full-Stack"
                        className={styles.inputCreate}
                        value={formCreate.cargo}
                        onChange={createChange}
                        required
                        disabled={loading}
                      />
                      </div>

                      <label htmlFor="salario">Salário*</label>
                      <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}><IoLogoUsd /></span>
                      <input
                      type="number"
                      name="salario"
                      placeholder="R$ 0.00"
                      step="0.01"
                      className={styles.inputCreate}
                      value={formCreate.salario}
                      onChange={createChange}
                      required
                      disabled={loading}
                      />
                      </div>

                      <label htmlFor="cracha">Cracha*</label>
                      <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}><HiIdentification /></span>
                      <input
                      type="text"
                      name="cracha"
                      placeholder="DG81192"
                      className={styles.inputCreate}
                      value={formCreate.cracha}
                      onChange={createChange}
                      required
                      disabled={loading}
                      />
                      </div>

                      <div className={styles.buttonsCreate}>
                      <button 
                      type="submit" 
                      className={styles.createBtn}
                      disabled={loading}
                      >
                        {loading ? 'Carregando...' : 'Criar Conta'}
                      </button>
                      <button type='reset' onClick={submitReset} className={styles.resetBtn}>Limpar</button>
                      </div>
         </form>

           <div className={styles.createFooter}>
              <p> Ja possui uma conta? <Link className={styles.linkBack} to="/">Login</Link> </p>
           </div>
        </section>
    </main>
    
  )
}