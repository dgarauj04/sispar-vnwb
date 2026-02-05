import React from 'react';
import styles from './MessageDelete.module.scss';

export default function MessageDelete({ onConfirm, onCancel }) {
  return (
    <section className={styles.messageArea} role="dialog" aria-modal="true">
      <div className={styles.areaContainer}>
        <h1>Deseja realmente excluir os dados dessa linha?</h1>
        <div className={styles.areaBtns}>
          <button className={styles.continue} onClick={onCancel}>
            Continuar Editando
          </button>
          <button className={styles.limpar} onClick={onConfirm}>
            Sim, excluir
          </button>
        </div>
      </div>
    </section>
  );
}
