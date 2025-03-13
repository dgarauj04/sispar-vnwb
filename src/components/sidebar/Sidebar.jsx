import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { MdMenuOpen, MdContentPasteSearch } from 'react-icons/md';
import { IoMdMenu, IoIosLogOut } from 'react-icons/io';
import { GoHome } from 'react-icons/go';
import { HiOutlineDocumentCurrencyDollar } from 'react-icons/hi2';
import { LuHistory } from 'react-icons/lu';
import imgProfile from "../../assets/image.png"

export default function Sidebar() {
  const navigate = useNavigate();

  const goToRefundPage = () => {
    navigate('/refund');
  };
  const goToRequestPage = () => {
    navigate('/request');
  };
  const initLogout = () => {
    navigate('/');
  };

  const goToProfilePage = () => {
    navigate('/profile');
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
            <h2>Douglas Araujo</h2>
            <p>Dev Front-end jr.</p>
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

        <button className={styles.buttonOption}>
          <MdContentPasteSearch className={styles.icon} />
          <p className={styles.nameOption}>Análises</p>
        </button>

        <button className={styles.buttonOption} onClick={goToProfilePage}>
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
