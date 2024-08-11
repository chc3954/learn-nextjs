import { Metadata } from "next";
import { getMovies } from "@/app/utility";
import Movie from "@/components/movie";
import styles from "@/app/styles/home.module.css";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}{" "}
    </div>
  );
}
