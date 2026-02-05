import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Refund.module.scss';
import { VscHistory } from 'react-icons/vsc';
import { IoIosList, IoMdTime, IoMdClose } from 'react-icons/io';
import { PiArrowBendUpLeftBold } from 'react-icons/pi';
import { MdDownloadDone } from 'react-icons/md';
import { IoCloudDoneOutline } from 'react-icons/io5';
import { GoHome } from 'react-icons/go';
import ClipBoard from '../../assets/ClipBoard';
import { Link } from 'react-router-dom';

export default function Refund() {
  const navigate = useNavigate();

  const goToRequestPage = () => {
    navigate('/request');
  };

   const goToAnalysisPage = () => {
    navigate('/analysis');
  };

  return (
    <>
      <div className={styles.content}>
        <header className={styles.headerNav}>
          <nav className={styles.navarea}>
            <Link to="/" className={styles.linkIcon}>
              <GoHome />
            </Link>
            <span className={styles.separator}>&gt;</span>
            <Link to="/refund" className={styles.link}>
              Reembolsos
            </Link>
          </nav>
        </header>

        <main className={styles.refoundContainer}>
          <section className={styles.sectionContent}>
            <h1 className={styles.title}>Sistema de Reembolso</h1>
            <p className={styles.subtitle}>
              Solicite novos pedidos de reembolso, visualize solicitações em
              análise e todo o histórico.
            </p>

            <div className={styles.cardsContainer}>
              <button className={styles.card} onClick={goToRequestPage}>
                <ClipBoard className={styles.cardIcon} />
                <h2>Solicitar Reembolso</h2>
              </button>

              <button className={styles.card} onClick={goToAnalysisPage}>
                <IoIosList className={styles.cardIcon} />
                <h2>Verificar Análise</h2>
              </button>

              <button className={styles.card}>
                <VscHistory className={styles.cardIcon} />
                <h2>Histórico</h2>
              </button>
            </div>

            <ul className={styles.infoContainer}>
              <li className={styles.infoItem}>
                <PiArrowBendUpLeftBold
                  className={`${styles.infoIcon} ${styles.iconSolic}`}
                />
                <h3>182</h3>
                <p>Solicitados</p>
              </li>

              <li className={styles.infoItem}>
                <IoMdTime
                  className={`${styles.infoIcon} ${styles.iconAnalit}`}
                />
                <h3>74</h3>
                <p>Em análise</p>
              </li>

              <li className={styles.infoItem}>
                <MdDownloadDone
                  className={`${styles.infoIcon} ${styles.iconAprove}`}
                />
                <h3>195</h3>
                <p>Aprovados</p>
              </li>

              <li className={styles.infoItem}>
                <IoMdClose
                  className={`${styles.infoIcon} ${styles.iconReject}`}
                />
                <h3>41</h3> <p>Rejeitados</p>
              </li>
            </ul>

            <p className={styles.updateText}>
              <IoCloudDoneOutline /> Sistema atualizado
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
