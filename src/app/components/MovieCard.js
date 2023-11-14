import styles from "@/app/styles/commong.module.css";
import Image from "next/image";
import Link from "next/link";


const MovieCard = (curEle) => {
    const {id, type, title, synopsis} = curEle.jawSummary;
  return (
    <>
      <div className={styles.card} key={id}>
        <div className={styles.card_image}>
            <Image src={curEle.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>
        </div>
        <div className={styles.card_data}>
            <h2>{title.substring(0,18)}..</h2>
            <p>
                {`${synopsis.substring(0,66)}...`}
            </p>
            <Link href={ `/movie/${id}`}>
                <button>
                Read More
                    </button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default MovieCard
