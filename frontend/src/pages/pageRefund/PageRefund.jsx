import Refund from "../../components/refund/Refund";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from './PageRefund.module.scss'

export default function PageRefund (){
  return (
<>
<section className={styles.pageContent}>
<Sidebar />
<Refund />
</section>
</>
  )
}
