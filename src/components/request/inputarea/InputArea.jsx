import React, { useState } from 'react';
import styles from './InputArea.module.scss';
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import { FiPlus, FiDelete } from 'react-icons/fi';
import MessageForm from './messageForm/MessageForm';

export default function InputArea({ onAddReembolso }) {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    prestacaoContas: '',
    descricao: '',
    data: '',
    tipoDespesa: '',
    controleCusto: '',
    ordInt: '',
    pep: '',
    div: '',
    distKm: '',
    moeda: '',
    valorKm: '',
    valTaxa: '',
    valFaturado: '',
  });

  const [showResetMessage, setShowResetMessage] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoReembolso = {
      id: Date.now(),
      colaborador: formData.nome,
      empresa: formData.empresa,
      prestacaoContas: formData.prestacaoContas,
      data: formData.data,
      motivo: formData.descricao,
      tipoReembolso: formData.tipoDespesa,
      controleCusto: formData.controleCusto,
      ordInt: formData.ordInt,
      div: formData.div,
      pep: formData.pep,
      moeda: formData.moeda,
      distKm: formData.distKm,
      valorKm: formData.valorKm,
      valorFaturado: formData.valFaturado,
      despesa: formData.valTaxa,
    };
    onAddReembolso(novoReembolso);
    setFormData({
      nome: '',
      empresa: '',
      prestacaoContas: '',
      descricao: '',
      data: '',
      tipoDespesa: '',
      controleCusto: '',
      ordInt: '',
      pep: '',
      div: '',
      distKm: '',
      moeda: '',
      valorKm: '',
      valTaxa: '',
      valFaturado: '',
    });
  };

  const handleReset = () => {
    setShowResetMessage(true);
  };

  const handleConfirmReset = () => {
    setFormData({
      nome: '',
      empresa: '',
      prestacaoContas: '',
      descricao: '',
      data: '',
      tipoDespesa: '',
      controleCusto: '',
      ordInt: '',
      pep: '',
      div: '',
      distKm: '',
      moeda: '',
      valorKm: '',
      valTaxa: '',
      valFaturado: '',
    });
    setShowResetMessage(false);
  };

  const handleCancelReset = () => {
    setShowResetMessage(false);
  };

  return (
    <>
      <section className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset className={styles.areaForm}>
            <div className={styles.firstInputs}>
              <div className={styles.inputGroup}>
                <label htmlFor="nome" className={styles.label}>
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={styles.inputName}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="empresa" className={styles.label}>
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className={styles.inputEmpresa}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="prestacaoContas" className={styles.label}>
                  N° Prest. Contas
                </label>
                <input
                  type="text"
                  id="prestacaoContas"
                  name="prestacaoContas"
                  value={formData.prestacaoContas}
                  onChange={handleChange}
                  className={styles.inputConta}
                />
              </div>
            </div>

            <div className={styles.secondInputs}>
              <div className={styles.inputGroup}>
                <label htmlFor="descricao" className={styles.label}>
                  Descrição / Motivo do Reembolso
                </label>
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  className={styles.inputDescricao}
                ></input>
              </div>
            </div>
          </fieldset>

          <div className={styles.separatorLine}></div>

          <fieldset className={styles.areaForm}>
            <div className={styles.firstInputs}>
              <div className={styles.inputGroup}>
                <label htmlFor="data" className={styles.label}>
                  Data
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    className={styles.inputData}
                  />
                  <div className={styles.inputIcon}>
                    <FaCalendarAlt style={{ marginBottom: '10px' }} />
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="tipoDespesa" className={styles.label}>
                  Tipo de Despesa
                </label>
                <div className={styles.inputWrapper}>
                  <select
                    id="tipoDespesa"
                    name="tipoDespesa"
                    value={formData.tipoDespesa}
                    onChange={handleChange}
                    className={styles.selectDespesa}
                  >
                    <option value="" disabled selected>
                      Selecionar
                    </option>
                    <option value="alimentacao">Alimentação</option>
                    <option value="combustivel">Combustível</option>
                    <option value="conducao">Condução</option>
                    <option value="estacionamento">Estacionamento</option>
                    <option value="viagemAdmin">Viagem admin.</option>
                    <option value="viagemOperacional">
                      Viagem operacional
                    </option>
                    <option value="eventosRepresentacao">
                      Eventos de representação
                    </option>
                  </select>
                  <div className={styles.inputIconDespesa}>
                    <FaChevronDown />
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="controleCusto" className={styles.label}>
                  Controle de Custo
                </label>
                <div className={styles.inputWrapper}>
                  <select
                    id="controleCusto"
                    name="controleCusto"
                    value={formData.controleCusto}
                    onChange={handleChange}
                    className={styles.selectControl}
                  >
                    <option value="" disabled selected>
                      Selecionar
                    </option>
                    <option value="1100109002">
                      1100109002 - FIN CONTROLES INTERNOS MTZ
                    </option>
                    <option value="1100110002">
                      1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                    </option>
                    <option value="1100110102">
                      1100110102 - FIN CONTABILIDADE MTZ
                    </option>
                  </select>
                  <div className={styles.inputIconControle}>
                    <FaChevronDown />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.secondInputs}>
              <div className={styles.inputGroup}>
                <label htmlFor="ordInt" className={styles.label}>
                  Ord. Int.
                </label>
                <input
                  type="text"
                  id="ordInt"
                  name="ordInt"
                  value={formData.ordInt}
                  onChange={handleChange}
                  className={styles.inputOrd}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="pep" className={styles.label}>
                  PEP
                </label>
                <input
                  type="text"
                  id="pep"
                  name="pep"
                  value={formData.pep}
                  onChange={handleChange}
                  className={styles.inputPep}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="div" className={styles.label}>
                  Div.
                </label>
                <input
                  type="text"
                  id="div"
                  name="div"
                  value={formData.div}
                  onChange={handleChange}
                  className={styles.inputDiv}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="distKm" className={styles.label}>
                  Dist. / Km
                </label>
                <input
                  type="text"
                  id="distKm"
                  name="distKm"
                  value={formData.distKm}
                  onChange={handleChange}
                  className={styles.inputDist}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="moeda" className={styles.label}>
                  Moeda
                </label>
                <input
                  type="text"
                  id="moeda"
                  name="moeda"
                  value={formData.moeda}
                  onChange={handleChange}
                  className={styles.inputMoeda}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="valorKm" className={styles.label}>
                  Valor / Km
                </label>
                <input
                  type="text"
                  id="valorKm"
                  name="valorKm"
                  value={formData.valorKm}
                  onChange={handleChange}
                  className={styles.inputValorKm}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="valTaxa" className={styles.label}>
                  Val. Taxa
                </label>
                <input
                  type="text"
                  id="valTaxa"
                  name="valTaxa"
                  value={formData.valTaxa}
                  onChange={handleChange}
                  className={styles.inputTaxa}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="valFaturado" className={styles.label}>
                  Val. Faturado
                </label>
                <input
                  type="text"
                  id="valFaturado"
                  name="valFaturado"
                  value={formData.valFaturado}
                  onChange={handleChange}
                  className={styles.inputFaturado}
                />
              </div>

              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.buttonSave}>
                  <FiPlus className={styles.iconButton} /> Salvar
                </button>

                <button
                  type="reset"
                  className={styles.buttonClean}
                  onClick={handleReset}
                >
                  <FiDelete className={styles.iconButton} />
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>

      {showResetMessage && (
        <MessageForm
          onConfirm={handleConfirmReset}
          onCancel={handleCancelReset}
        />
      )}
    </>
  );
}
