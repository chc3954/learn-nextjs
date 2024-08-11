import { Metadata } from "next";
import MovieVideos from "@/components/movie-videos";
import MovieInfo from "@/components/movie-info";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Movie",
};

interface IParams {
  params: {
    id: string;
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
