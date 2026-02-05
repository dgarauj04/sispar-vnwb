import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './Request.module.scss';
import InputArea from './inputarea/InputArea';
import InformArea from './informarea/InformArea';
import { GoHome } from 'react-icons/go';
import { MdCheck, MdClose } from 'react-icons/md';
import MessageCancel from './messageCancel/MessageCancel';
import { Link } from 'react-router-dom';

export default function Request() {
  const [reembolsos, setReembolsos] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [reembolsoToDelete, setReembolsoToDelete] = useState(null);
  const [showCancelMessage, setShowCancelMessage] = useState(false);
  const [totalFaturado, setTotalFaturado] = useState(0);
  const [totalDespesa, setTotalDespesa] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAddReembolso = (novoReembolso) => {
    setReembolsos([...reembolsos, novoReembolso]);
  };

  const handleRemoveReembolso = (id) => {
    setReembolsoToDelete(id);
    setDeleteMessage(true);
  };

  const clickConfirmDelete = () => {
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
    setReembolsos([]);
    setShowCancelMessage(false);
  };

  const actionCancelCancel = () => {
    setShowCancelMessage(false);
  };

  useEffect(() => {
  const totalFaturadoCalc = reembolsos.reduce((acc, item) => {
    const valor = parseFloat(item.valorFaturado) || 0;
    return acc + valor;
  }, 0);

  const totalDespesaCalc = reembolsos.reduce((acc, item) => {
    const valor = parseFloat(item.despesa) || 0;
    return acc + valor;
  }, 0);

  setTotalFaturado(totalFaturadoCalc);
  setTotalDespesa(totalDespesaCalc);
}, [reembolsos]);

const submitRequest = async () => {
  setLoading(true);

  if (reembolsos.length === 0) {
    toast.warn("Adicione pelo menos um reembolso antes de enviar.", { autoClose: 4000, position: "top-center" });
    return;
  }

  try {
    for (const reembolso of reembolsos) {
      const response = await fetch('https://back-sispar.onrender.com/refunds/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          colaborador: reembolso.colaborador,
          empresa: reembolso.empresa,
          nPrestacao: reembolso.prestacaoContas,
          descricao: reembolso.motivo,
          data: reembolso.data,
          tipoReembolso: reembolso.tipoReembolso,
          centroCusto: reembolso.controleCusto,
          ordemInterna: reembolso.ordInt,
          divisao: reembolso.div,
          pep: reembolso.pep,
          moeda: reembolso.moeda,
          distanciaKm: reembolso.distKm,
          valorKm: reembolso.valorKm,
          valorFaturado: reembolso.valorFaturado,
          despesa: reembolso.despesa,
          status: 'Em analise'
        })
      });

      if (!response.ok) {
        const data = await response.json();
        console.error(data);
        toast.error("Erro ao enviar reembolso!", { autoClose: 4000, position: "top-center" });
        return;
      }
    }
   
    toast.success("Reembolsos enviados com sucesso!", { autoClose: 3000, position: "top-center" });
   setReembolsos([]);
   setLoading(false);
  } catch (error) {
    console.error(error);
    toast.error("Erro ao conectar com o servidor.", { autoClose: 4000, position: "top-center" });
  }
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
            deleteMessage={false}
            onConfirm={clickConfirmDelete}
            onCancel={clickCancelDelete}
          />
        </main>

        <footer className={styles.footerContainer}>
        <div className={styles.inputFooter}>
          <div className={styles.inputTotal}>
            <label className={styles.labelTotal}>Total Faturado</label>
            <input
              type="text"
              value={totalFaturado.toFixed(2)}
              readOnly
            />
          </div>

          <div className={styles.inputTotal}>
            <label className={styles.labelTotal}>Total Despesa</label>
            <input
              type="text"
              value={totalDespesa.toFixed(2)}
              readOnly
            />
          </div>

         <div className={styles.areabtn}>
            <button className={styles.sendButton} type='submit' onClick={submitRequest} disabled={loading}>
              <MdCheck className={styles.iconButton} /> {loading ? 'Enviando...' : 'Enviar para Análise'}
            </button>
            <button
              className={styles.cancelButton}
              onClick={clickCancelRequest}
            >
              <MdClose className={styles.iconButton} /> Cancelar Solicitação
            </button>
         </div>
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
