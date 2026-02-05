import Analysis from "../../components/analysis/Analysis";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from './PageAnalysis.module.scss';

export default function PageAnalysis() {
    return (
        <>
        <section className={styles.pageContent}>
        <Sidebar />
        <Analysis />
        </section>
        </>
    )
}