import { getVideos } from "@/app/utility";

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <div>{JSON.stringify(videos)}</div>;
}
