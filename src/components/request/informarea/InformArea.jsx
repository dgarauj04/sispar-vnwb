import React, { useState } from 'react';
import styles from './InformArea.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSolidFile } from 'react-icons/bi';
import MessageDelete from './messageDelete/MessageDelete';

export default function InformArea({ reembolsos, onRemoveReembolso, deleteMessage, onConfirm, onCancel }) {
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
                <td className={styles.Element}>{reembolso.empresa}</td>
                <td className={styles.Element}>{reembolso.prestacaoContas}</td>
                <td className={styles.Element}>{reembolso.data}</td>
                <td className={styles.ElementText}>
                  <BiSolidFile className={styles.iconText} aria-hidden="true" />
                </td>
                <td className={styles.Element}>{reembolso.tipoReembolso}</td>
                <td className={styles.Element}>{reembolso.controleCusto}</td>
                <td className={styles.Element}>{reembolso.ordInt}</td>
                <td className={styles.Element}>{reembolso.div}</td>
                <td className={styles.Element}>{reembolso.pep}</td>
                <td className={styles.Element}>{reembolso.moeda}</td>
                <td className={styles.Element}>{reembolso.distKm}</td>
                <td className={styles.Element}>{reembolso.valorKm}</td>
                <td className={styles.Element}>{reembolso.valorFaturado}</td>
                <td className={styles.Element}>{reembolso.despesa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {deleteMessage && (
        <MessageDelete
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </>
  );
}
