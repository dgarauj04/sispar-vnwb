import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InformArea.module.scss';
import { RiDeleteBin6Line, RiCloseCircleFill } from 'react-icons/ri';
import { BiSolidFile } from 'react-icons/bi';
import MessageDelete from './messageDelete/MessageDelete';


export default function InformArea({ 
  reembolsos, 
  onRemoveReembolso, 
  deleteMessage, 
  onConfirm, 
  onCancel 
}) {
 InformArea.propTypes = {
  reembolsos: PropTypes.array.isRequired,
  onRemoveReembolso: PropTypes.func.isRequired,
  deleteMessage: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}; 

const [motivoAtivo, setMotivoAtivo] = useState(null);
  const openMotivo = (motivo) => {
    setMotivoAtivo(motivo);
  };
  const closeMotivo = () => {
    setMotivoAtivo(null);
  };

  const deleteClick = (id) => {
    onRemoveReembolso(id);
  };
  

  return (
    <>
      <section className={styles.overflowXAuto}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerElement}></th>
              <th className={styles.headerElement}>Colaborador(a)</th>
              <th className={styles.headerElement}>Empresa</th>
              <th className={styles.headerElement}>Nº Prest.</th>
              <th className={styles.headerElement}>Data</th>
              <th className={styles.headerElement}>Motivo</th>
              <th className={styles.headerElement}>Tipo Reemb.</th>
              <th className={styles.headerElement}>Ctr. Custo</th>
              <th className={styles.headerElement}>Ord. Int.</th>
              <th className={styles.headerElement}>Div.</th>
              <th className={styles.headerElement}>PEP</th>
              <th className={styles.headerElement}>Moeda</th>
              <th className={styles.headerElement}>Dist. Km</th>
              <th className={styles.headerElement}>Val. Km</th>
              <th className={styles.headerElement}>Val. Faturado</th>
              <th className={styles.headerElement}>Despesa</th>
            </tr>
          </thead>

          <tbody>
            {reembolsos.map((reembolso) => (
              <tr key={reembolso.id}>
                <td className={styles.ElementButton}>
                  <button
                    className={styles.deleteButton}
                    aria-label="Deletar"
                    onClick={() => deleteClick(reembolso.id)}
                  >
                    <RiDeleteBin6Line
                      className={styles.iconDelete}
                      aria-hidden="true"
                    />
                  </button>
                </td>
                <td className={styles.Element}>{reembolso.colaborador}</td>
                <td className={styles.Element} style={{ textTransform: 'uppercase'}}>{reembolso.empresa}</td>
                <td className={styles.Element}>{reembolso.prestacaoContas}</td>
                <td className={styles.Element}>{reembolso.data}</td>
                <td className={styles.ElementText}>
                  <button className={styles.openMotivoBtn} onClick={() => openMotivo(reembolso.motivo)} aria-label='Ver Motivo'>
                    <BiSolidFile className={styles.iconText}/>
                  </button>
                </td>
                <td className={styles.Element}>{reembolso.tipoReembolso}</td>
                <td className={styles.Element}>{reembolso.controleCusto}</td>
                <td className={styles.Element}>{reembolso.ordInt}</td>
                <td className={styles.Element}>{reembolso.div}</td>
                <td className={styles.Element}>{reembolso.pep}</td>
                <td className={styles.Element} style={{ textTransform: 'uppercase'}}>{reembolso.moeda}</td>
                <td className={styles.Element}>{reembolso.distKm}Km</td>
                <td className={styles.Element}>{reembolso.valorKm}</td>
                <td className={styles.Element}>{reembolso.valorFaturado}</td>
                <td className={styles.Element}>{reembolso.despesa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

       {motivoAtivo && (
        <section className={styles.motivoAtivo}>
          <div className={styles.motivoButton}> 
            <button className={styles.closeMotivoBtn} onClick={closeMotivo}>
              <RiCloseCircleFill />
            </button>
          </div>

          <div className={styles.motivoContent}>
          <p>{motivoAtivo}</p>
        </div>
        </section>
      )}

      {deleteMessage && (
        <MessageDelete
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </>
  );
}
