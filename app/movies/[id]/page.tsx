import { Metadata } from "next";
import MovieVideos from "@/components/movie-videos";
import MovieInfo from "@/components/movie-info";
import { Suspense } from "react";
import { getMovie } from "@/app/utility";

interface IParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: IParams): Promise<Metadata> {
  const title = await getMovie(id).then((movie) => movie.title);
  return {
    title: title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<div>Loading movie info</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading movie videos</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
