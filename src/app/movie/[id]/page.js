import styles from "@/app/styles/commong.module.css";
import Image from "next/image";

const MoviePage = async( {params}) => {
    
    const {id} = params;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST
    }
  };
  const response = await fetch(url, options);
  
  const data = await response.json()
  const detailData = data[0].details;

  return (
    <div className={styles.container}>
        <h2 className={styles.movie_title}> BingeWatch \ <span> {detailData.type} </span> </h2>
        <div className={styles.card_section}>
            <div>
            <Image src={detailData.backgroundImage.url} alt={detailData.title} width={600} height={300}/>
            </div>
        </div>
        <div>
            <h1>{detailData.title}</h1>
            <p>
                {detailData.synopsis}
            </p>
        </div>
    </div>
  )
}

export default MoviePage
