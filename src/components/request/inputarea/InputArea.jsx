import { useState } from 'react';
import PropTypes from 'prop-types';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   InputArea.propTypes = {
  onAddReembolso: PropTypes.func.isRequired,
};

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.firstInputs}>
              <div className={styles.inputName}>
                <label htmlFor="nome" className={styles.label}>
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="empresa" className={styles.label}>
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="prestacaoContas" className={styles.label}>
                  N° Prest.Contas
                </label>
                <input
                  type="number"
                  id="prestacaoContas"
                  name="prestacaoContas"
                  value={formData.prestacaoContas}
                  onChange={handleChange}
                />
              </div>
            
              <div className={styles.inputDescricao}>
                <label htmlFor="descricao" className={styles.label}>
                  Descrição / Motivo do Reembolso
                </label>
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

        <div className={styles.separatorLine}></div>

            <div className={styles.secondInputs}>
              <div className={styles.inputDate}>
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
                  />
                  <div className={styles.inputIcon}>
                    <FaCalendarAlt style={{ marginBottom: '10px' }} />
                  </div>
                </div>
              </div>

              <div className={styles.selectDespesa}>
                <label htmlFor="tipoDespesa" className={styles.label}>
                  Tipo de Despesa
                </label>
                <div className={styles.inputWrapper}>
                  <select
                    id="tipoDespesa"
                    name="tipoDespesa"
                    value={formData.tipoDespesa}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
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

              <div className={styles.selectControl}>
                <label htmlFor="controleCusto" className={styles.label}>
                  Controle de Custo
                </label>
                <div className={styles.inputWrapper}>
                  <select
                    id="controleCusto"
                    name="controleCusto"
                    value={formData.controleCusto}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
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

              <div className={styles.inputOrd}>
                <label htmlFor="ordInt" className={styles.label}>
                  Ord. Int.
                </label>
                <input
                  type="number"
                  id="ordInt"
                  name="ordInt"
                  placeholder='0000'
                  value={formData.ordInt}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputPep}>
                <label htmlFor="pep" className={styles.label}>
                  PEP
                </label>
                <input
                  type="number"
                  id="pep"
                  name="pep"
                  placeholder='000'
                  value={formData.pep}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="div" className={styles.label}>
                  Div.
                </label>
                <input
                  type="number"
                  id="div"
                  name="div"
                  placeholder='000'
                  value={formData.div}
                  onChange={handleChange}
                  className={styles.inputDiv}
                />
              </div>

              <div className={styles.inputDist}>
                <label htmlFor="distKm" className={styles.label}>
                  Dist. / Km
                </label>
                <input
                  type="number"
                  id="distKm"
                  name="distKm"
                  value={formData.distKm}
                  onChange={handleChange}
                  placeholder="0Km"
                />
              </div>

              <div className={styles.inputMoeda}>
                <label htmlFor="moeda" className={styles.label}>
                  Moeda
                </label>
                <input
                  type="text"
                  id="moeda"
                  name="moeda"
                  value={formData.moeda}
                  onChange={handleChange}
                  placeholder='BRL'
                  max={3}
                />
              </div>

              <div className={styles.inputValorKm}>
                <label htmlFor="valorKm" className={styles.label}>
                  Valor / Km
                </label>
                <input
                  type="number"
                  id="valorKm"
                  name="valorKm"
                  placeholder='$0.00'
                  value={formData.valorKm}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputTaxa}>
                <label htmlFor="valTaxa" className={styles.label}>
                  Val. Taxa
                </label>
                <input
                  type="number"
                  id="valTaxa"
                  name="valTaxa"
                  placeholder='0.0%'
                  value={formData.valTaxa}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputFaturado}>
                <label htmlFor="valFaturado" className={styles.label}>
                  Val. Faturado
                </label>
                <input
                  type="number"
                  id="valFaturado"
                  name="valFaturado"
                  placeholder='$0.00'
                  value={formData.valFaturado}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.buttonContainer}>
                <button 
                type="submit" 
                className={styles.buttonSave}
                >
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
          
        </form>

      {showResetMessage && (
        <MessageForm
          onConfirm={handleConfirmReset}
          onCancel={handleCancelReset}
        />
      )}
    </>
  );
}
