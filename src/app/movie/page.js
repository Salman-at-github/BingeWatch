import Link from "next/link"
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/commong.module.css"

const Movie = async() => {

  const url = process.env.MOVIE_URL;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  }
};
const response = await fetch(url, options);

const data = await response.json()
const dataTitle = data.titles

  return (

    <>
    <section className={styles.movieSection}>
      <div className={styles.container}>

      <h1>Movies List</h1>
      <div className={styles.card_section}>
      {
        dataTitle.map((curEle)=>{
          return <MovieCard key={curEle.id} {...curEle}/>
        })
      }
      </div>
      </div>
    </section>
    </>
  )
}

export default Movie
