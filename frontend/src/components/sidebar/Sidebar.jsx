import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import { MdMenuOpen, MdContentPasteSearch } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import { GoHome } from 'react-icons/go';
import { HiOutlineDocumentCurrencyDollar } from 'react-icons/hi2';
import { LuHistory } from 'react-icons/lu';
import imgProfile from "../../assets/image.png"

export default function Sidebar() {
  const navigate = useNavigate();
  const [colaborador, setColaborador] = useState({ nome: '', cargo: '' }); 

 useEffect(() => {
  const colaboradorData = localStorage.getItem('colaborador');

  if (colaboradorData) {
    setColaborador(JSON.parse(colaboradorData));
  }
}, []);

  const goToRefundPage = () => {
    navigate('/refund');
  };
  const goToRequestPage = () => {
    navigate('/request');
  };

  const goToAnalysisPage = () => {
    navigate('/analysis');
  };

  const initLogout = () => {
    localStorage.removeItem('colaborador');
    navigate('/');
  };

  return (
    <header className={styles.sidebar}>

      <button className={styles.buttonOption}>
          <MdMenuOpen className={styles.icon} />
      </button>

      <div className={styles.perfil}>
        <img
          src={imgProfile}
          alt="Profile"
          className={styles.profileImg}
        />
            <h2>{colaborador.nome || 'Colaborador'}</h2>
            <p>{colaborador.cargo || 'Cargo'}</p>
      </div>

       <div className={styles.iconContainer}>
        <button className={styles.buttonOption} onClick={goToRefundPage}>
          <GoHome className={styles.icon} />
          <p className={styles.nameOption}>Início</p>
        </button>

        <button className={styles.buttonOption} onClick={goToRequestPage}>
          <HiOutlineDocumentCurrencyDollar className={styles.icon} />
          <p className={styles.nameOption}>Reembolsos</p>
        </button>

        <button className={styles.buttonOption} onClick={goToAnalysisPage}>
          <MdContentPasteSearch className={styles.icon} />
          <p className={styles.nameOption}>Análises</p>
        </button>

        <button className={styles.buttonOption}>
          <LuHistory className={styles.icon} />
          <p className={styles.nameOption}>Históricos</p>
        </button>
      </div>

      <button className={styles.logoutBtn} onClick={initLogout}>
        <IoIosLogOut className={styles.iconLogout} />
        <p className={styles.nameOption}>Sair</p>
      </button>
    </header>
  );
}
