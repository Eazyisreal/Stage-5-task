import Details from '../components/VideoDetails/Details'
import Header from "../components/Video/Header";
import Hero from "../components/VideoDetails/Hero";
import Share from "../components/VideoDetails/Share";

export default function VideoDetails() {
  return (
    <section>
      <Header />
      <Hero />
      <Details />
      <Share />
    </section>
  );
}
