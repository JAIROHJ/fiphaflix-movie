import React from 'react';
import styles from "@/app/styles/common.module.css"
import MovieCard from '../components/MovieCard';

const Movie = async() => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'de5a5bd6a5msh8e7c7fdb04914c6p1221abjsn86b8cfa087f2',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res  = await fetch(url,options);
const data = await res.json();
const main_data = data.titles;
console.log(data);
  return (
    <div> 
      <section className={styles.movieSection}>
        <div className={styles.container}>

     <h1>Movies and Series </h1> 
     <div className={styles.card_section}>

     {
       main_data.map((curElem)=>{
         return <MovieCard key={curElem.id} {...curElem}/>
        })
      }
      </div>
      </div>
      </section>
     </div>
  )
}

export default Movie