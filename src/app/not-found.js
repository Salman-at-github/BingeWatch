import styles from "@/app/styles/commong.module.css"
import Link from "next/link";

const NotFound = () => {
    return (
        <section className={styles.container}>
            <div className={styles.notFoundMessage}>

                <h1>404</h1>
                <h2>Not Found</h2>
            </div>
            <div className={styles.error_page}>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default NotFound;