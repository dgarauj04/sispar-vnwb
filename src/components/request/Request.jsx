import React, { useState, useEffect } from 'react';
import styles from './Request.module.scss';
import InputArea from './inputarea/InputArea';
import InformArea from './informarea/InformArea';
import { GoHome } from 'react-icons/go';
import { MdCheck, MdClose } from 'react-icons/md';
import {
  getReembolsos,
  addReembolso,
  removeReembolso,
} from '../../../api-data/api';
import MessageCancel from './messageCancel/MessageCancel'
import { Link } from 'react-router-dom';


export default function Request() {
  const [reembolsos, setReembolsos] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [reembolsoToDelete, setReembolsoToDelete] = useState(null);
  const [showCancelMessage, setShowCancelMessage] = useState(false);

  useEffect(() => {
    setReembolsos(getReembolsos());
  }, []);

  const handleAddReembolso = (novoReembolso) => {
    addReembolso(novoReembolso);
    setReembolsos([...reembolsos, novoReembolso]);
  };

  const handleRemoveReembolso = (id) => {
    setReembolsoToDelete(id);
    setDeleteMessage(true);
  };

  const clickConfirmDelete = () => {
    removeReembolso(reembolsoToDelete);
    setReembolsos(reembolsos.filter((item) => item.id !== reembolsoToDelete));
    setDeleteMessage(false);
  };

  const clickCancelDelete = () => {
    setDeleteMessage(false);
  };

  const clickCancelRequest = () => {
    setShowCancelMessage(true); 
  };

  const actionConfirmCancel = () => {
    setShowCancelMessage(false); 
  };

  const actionCancelCancel = () => {
    setShowCancelMessage(false); 
  };

  return (
    <>
      <div className={styles.RequestContainer}>
      <header className={styles.headerNav}>
            <nav className={styles.navarea}>
                <Link to="/" className={styles.linkIcon}>
                    <GoHome />
                </Link>
                <span className={styles.separator}>&gt;</span>
                <Link to="/refund" className={styles.link}>
                    Reembolsos
                </Link>
                <span className={styles.separator}>&gt;</span>
                <Link to="/request" className={styles.link}>
                    Solicitação de Reembolso
                </Link>
            </nav>
        </header>

        <main className={styles.content}>
          <InputArea onAddReembolso={handleAddReembolso} />
          <InformArea
            reembolsos={reembolsos}
            onRemoveReembolso={handleRemoveReembolso}
            deleteMessage={deleteMessage}
            onConfirm={clickConfirmDelete}
            onCancel={clickCancelDelete}
          />
        </main>

        <footer className={styles.footerContainer}>
          <div className={styles.flexInput}>
            <div>
              <label className={styles.labelTotal}>Total Faturado</label>
              <input
                type="text"
                className={styles.inputTotal}
                value="0.00"
                readOnly
              />
            </div>

            <div>
              <label className={styles.labelTotal}>Total Despesa</label>
              <input
                type="text"
                className={styles.inputTotal}
                value="0.00"
                readOnly
              />
            </div>
          </div>

          <div className={styles.flexButton}>
            <button className={styles.sendButton}>
              <MdCheck className={styles.iconButton} /> Enviar para Análise
            </button>
            <button className={styles.cancelButton}  onClick={clickCancelRequest}>
              <MdClose className={styles.iconButton} /> Cancelar Solicitação
            </button>
          </div>
        </footer>
      </div>

      {showCancelMessage && (
        <MessageCancel
          onConfirm={actionConfirmCancel} 
          onCancel={actionCancelCancel} 
        />
      )}
    </>
  );
}
