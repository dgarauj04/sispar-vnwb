import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './Analysis.module.scss';
import { GoHome } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { BiSolidFile } from "react-icons/bi";
import { RiCloseCircleFill } from 'react-icons/ri';

export default function Analysis() {
  const [numeroPrestacao, setNumeroPrestacao] = useState('');
  const [resultado, setResultado] = useState([]);
  const [motivoAtivo, setMotivoAtivo] = useState(null);


 const buscarReembolso = async () => {
  if (!numeroPrestacao) {
    toast.warn('Por favor, digite um número de prestação.', { autoClose: 4000, position: 'top-center' });
    return;
  }

  try {
   const response = await fetch(`https://back-sispar.onrender.com/refunds/get-refunds/${numeroPrestacao}`);
   const data = await response.json();
   console.log(data);

    if (!response.ok) {
    toast.error(data.mensagem || 'Erro ao buscar reembolso.', { autoClose: 4000, position: 'top-center' });
    setResultado([]);
    return;
    }
    const reembolsos = data.filter(item => item.id);
    setResultado(reembolsos);

    toast.success('Reembolso encontrado!', { autoClose: 3000, position: 'top-center' });
    setNumeroPrestacao('');
  } catch (error) {
    toast.error('Erro de conexão com o servidor.', { autoClose: 4000, position: 'top-center' });
  }
};

  const openMotivo = (descricao) => {
    setMotivoAtivo(descricao);
  };
  const closeMotivo = () => {
    setMotivoAtivo(null);
  };

  const limparTabela = () => {
    setResultado([]);
  };

    return (
        <div className={styles.analysisContainer}>
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
            <span className={styles.separator}>&gt;</span>
            <Link to="/analysis" className={styles.link}>
              Verificar Analises
            </Link>
          </nav>
        </header>

        <main className={styles.searchContainer}>
          <section className={styles.sectionText}>
            <h1 className={styles.title}>Verifique a situação dos reembolsos</h1>
            <p className={styles.subtitle}>
               Pesquise por um pelo número da prestação do reembolso
            </p>
          </section>

           <section className={styles.areaSearch}>
          <div className={styles.inputSearch}>
            <input
              type="number"
              placeholder="Digite o número da prestação"
              className={styles.input}
              value={numeroPrestacao}
              onChange={(e) => setNumeroPrestacao(e.target.value)}
            />
            <button className={styles.searchBtn} onClick={buscarReembolso}>
              <FaSearch />
            </button>
          </div>
           </section>

         
          <section className={styles.overflowXAuto}>
                  <table className={styles.table}>
                    <thead>
                      <tr className={styles.headerRow}>
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
                        <th className={styles.headerElement}>Status</th>
                      </tr>
                    </thead>
                {resultado.length > 0 && (
                    <tbody>
                        {resultado.map((item) => (
                        <tr key={item.id}>
                          <td className={styles.Element}>{item.colaborador}
                          </td>

                          <td className={styles.Element} style={{ textTransform: 'uppercase'}}>
                            {item.empresa}
                            </td>

                          <td className={styles.Element}>{item.num_prestacao}
                          </td>

                          <td className={styles.ElementText}>
                            <button className={styles.openMotivoBtn} onClick={() => { console.log(item.descricao); openMotivo(item.descricao)}} aria-label='Ver Motivo'>
                              <BiSolidFile className={styles.iconText}/>
                            </button>
                          </td>

                          <td className={styles.Element}>{item.data}</td>

                          <td className={styles.Element}>{item.tipo_reembolso}</td>

                          <td className={styles.Element}>{item.centro_custo}</td>

                          <td className={styles.Element}>{item.ordem_interna}</td>

                          <td className={styles.Element}>{item.divisao}</td>

                          <td className={styles.Element}>{item.pep}</td>

                          <td className={styles.Element} style={{ textTransform: 'uppercase'}}>{item.moeda}</td>

                          <td className={styles.Element}>{item.distancia_km}</td>

                          <td className={styles.Element}>{item.valor_km}Km</td>

                          <td className={styles.Element}>{item.valor_faturado}</td>

                          <td className={styles.Element}>{item.despesa}</td>

                          <td className={styles.Element}>{item.status}</td>
                        </tr>
                        ))}
                    </tbody> 
                )}
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
           
        </main>

        <footer className={styles.footerAnalysis}>
          <button className={styles.clearBtn} onClick={limparTabela}>
            Limpar Tabela
          </button>
        </footer>
      </div>
    );
}