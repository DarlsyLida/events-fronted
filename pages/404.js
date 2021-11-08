import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/404.module.css"

export default function NotFoundPage() {
    return (
        <div className={styles.error}>
            <Layout title="Page not found">
                <div>
                    <h1>404</h1>
                    <h3>
                        Sorry, There is Nothing here.
                    </h3>
                    link to <Link href="/">Go to Home Page</Link>
                </div>
            </Layout>
            
        </div>
    )
}
