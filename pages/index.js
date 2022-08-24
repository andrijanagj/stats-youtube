import Head from "next/head";
import { useState } from "react";
import Feed from "../components/Feed";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import axios from "axios";
import ChannelInfo from "../components/ChannelInfo";
import VideoCard from "../components/VideoCard";

const fetchVideo = async (channel, fun) => {
  const res = await axios.get(`/api/videos`, {
    params: { channel },
  });
  const { data } = res;

  fun(data.items);
};

export default function Home() {
  const { data: session } = useSession();
  const [search, setSearch] = useState(null);
  const [youtuber, setYoutuber] = useState(null);
  const [loading, setLoading] = useState(false);

  const [videos, setVideos] = useState(null);

  const fetchYoutuberData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/youtuber`, {
        params: { search },
      });

      const { data } = res;

      fetchVideo(data.items[0].id, setVideos);
      setYoutuber(data.items[0]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  console.log(videos);
  console.log("youtuber", youtuber);
  return (
    <div>
      <Head>
        <title>Youtuber Stats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between  bg-slate-50 ">
        <Header session={session} signIn={signIn} signOut={signOut} />
        <main className="container m-auto mt-4 px-4">
          <Feed
            fetchYoutuberData={fetchYoutuberData}
            setSearch={setSearch}
            youtuber={youtuber}
          ></Feed>
          <div className="min-h-96 ">
            {loading && <p>Loading...</p>}
            {youtuber && <ChannelInfo youtuber={youtuber} />}
            <div className="flex  items-center justify-center">
              <div className="grid grid-cols-12 gap-2 gap-y-2 max-w-7xl mb-5">
                {videos &&
                  videos.map((video) => (
                    <VideoCard video={video} key={video.id.videoId}></VideoCard>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
