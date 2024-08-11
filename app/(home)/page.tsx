import { Metadata } from "next";
import { getMovies } from "@/app/utility";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie: any) => (
        <li key={movie.id}>
          <Link prefetch href={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}{" "}
    </div>
  );
}
