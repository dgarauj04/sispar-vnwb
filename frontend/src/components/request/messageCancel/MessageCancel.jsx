import styles from './MessageCancel.module.scss'

export default function MessageCancel({ onConfirm, onCancel }) {
 
  return(
    <section className={styles.messageArea}>
      <div className={styles.areaContainer}>
        <h1>Tem certeza que deseja cancelar a solicitação?</h1>
        <div className={styles.areaBtns}>
    <button className={styles.continue} onClick={onCancel}>Continuar Editando</button>
    <button className={styles.limpar} onClick={onConfirm}>Sim, cancelar</button>
    </div>
    </div>
    </section>
  )
}