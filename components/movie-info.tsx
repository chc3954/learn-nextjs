import { getMovie } from "@/app/utility";
import styles from "@/app/styles/movie-info.module.css";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank" rel="noreferrer">
          Homepage →
        </a>
      </div>
    </div>
  );
}
