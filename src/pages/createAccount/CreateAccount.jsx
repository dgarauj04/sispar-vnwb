import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import wsLogo from '../../assets/logo-ws.png'
import styles from './CreateAccount.module.scss'
import { MdEmail, MdWork } from "react-icons/md";
import { IoMdLock, IoLogoUsd } from "react-icons/io";
import { HiIdentification, HiUser } from "react-icons/hi2";


export default function CreateAccount() {
const [efeito, setEfeito] = useState(false);

  useEffect(() => {
    const tempo = setTimeout(() => {
      setEfeito(true);
    }, 800);
    
    return () => clearTimeout(tempo);
  }, []);

  return (
    <main className={styles.container}>
        <section className={`${styles.createArea} ${efeito ? styles.open : ''}`}>
        <div className={styles.createLogo}>
            <img src={wsLogo} alt="Logo" />
            <h1>Criar Conta</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

         <form className={`${styles.formCreate} ${efeito ? styles.open : ''}`}>
                    <label htmlFor="nome">Nome*</label>
                    <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}><HiUser /></span>
                    <input
                      type="text"
                      placeholder="Nome"
                      className={styles.inputCreate}
                    />
                    </div>

                    <label htmlFor="email">Email*</label>
                    <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}><MdEmail /></span>
                      <input
                        type="email"
                        placeholder="Email"
                        className={styles.inputCreate}
                      />
                      </div>

                      <label htmlFor="senha">Senha*</label>
                      <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}><IoMdLock /></span>
                      <input
                        type="password"
                        placeholder="senha123"
                        className={styles.inputCreate}
                      />
                      </div>

                      <label htmlFor="cargo">Cargo*</label>
                      <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}><MdWork /></span>
                      <input
                        type="text"
                        placeholder="Desenvolvedor Full-Stack"
                        className={styles.inputCreate}
                      />
                      </div>

                      <label htmlFor="salario">Salário*</label>
                      <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}><IoLogoUsd /></span>
                      <input
                      type="number"
                      placeholder="R$ 0.00"
                      step="0.01"
                      className={styles.inputCreate}
                      />
                      </div>

                      <label htmlFor="cracha">Cracha*</label>
                      <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}><HiIdentification /></span>
                      <input
                      type="text"
                      placeholder="DG81192"
                      className={styles.inputCreate}
                      />
                      </div>

                      <div className={styles.buttonsCreate}>
                      <button className={styles.createBtn}>Criar Conta</button>
                      <button className={styles.resetBtn}>Limpar</button>
                      </div>
         </form>

           <div className={styles.createFooter}>
              <p> Ja possui uma conta? <Link className={styles.linkBack} to="/">Login</Link> </p>
           </div>
        </section>
    </main>
    
  )
}