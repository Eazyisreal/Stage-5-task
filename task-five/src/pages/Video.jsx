import Header from "../components/Video/Header";
import Hero from "../components/Video/Hero";
import RecentVideos from "../components/Video/RecentVideos";

export default function Video() {
  return (
    <section>
      <Header />
      <Hero />
      <hr className="bg-black bg-opacity-10 w-full " />
      <RecentVideos />
    </section>
  );
}
