import Request from "../../components/request/Request";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from './PageRequest.module.scss'

export default function PageRequest (){
  return (
<>
<section className={styles.pageContent}>
<Sidebar />
<Request />
</section>
</>
  )
}
