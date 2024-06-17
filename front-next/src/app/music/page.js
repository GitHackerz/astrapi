import {getMusics} from "@/actions/music";
import MusicCard from "@/components/music-card";

export default async function Home() {
    const musics = await getMusics()
    return (
    <>
        {
            musics.map((music, index) => (
                <MusicCard key={index} title={music.title} author={music.author} link={music.link} createdAt={music.release_date} likes={music.likes} />
            ))
        }
    </>
  );
}
