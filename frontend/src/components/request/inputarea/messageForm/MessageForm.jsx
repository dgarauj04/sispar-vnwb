import React from 'react'
import styles from './MessageForm.module.scss'

export default function MessageForm({ onConfirm, onCancel }) {
  return (
    <section className={styles.messageArea}>
      <div className={styles.areaContainer}>
        <h1>Deseja realmente limpar os campos preenchidos acima?</h1>
        <div className={styles.areaBtns}>
          <button className={styles.continue} onClick={onCancel}>
            Continuar Editando
          </button>
          <button className={styles.limpar} onClick={onConfirm}>
            Sim, limpar
          </button>
        </div>
      </div>
    </section>
  );
}