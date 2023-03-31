import styles from '../blah.module.css';
import JoelHiltonHeadshot from '../JoelHiltonHeadshot.jpg';

function HomePage() {
  return (
    <>
      <div className="row">
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>
            Welcome to Joel Hilton's movie collection!
          </h1>
        </div>
        <div className="text-center">
          <img src={JoelHiltonHeadshot} alt="JoelHilton" />
        </div>
        <div id="paragraph" className="col align-self-center text-start">
          <p className={styles.p}>
            Joel Hilton, the beloved brother of my professor, is a true movie
            enthusiast. With a passion for cinema that runs deep, Joel is
            well-versed in all genres of film and can often be found discussing
            the latest releases with friends and family. He has an eye for great
            cinematography and storytelling, and loves nothing more than getting
            lost in a good movie. Whether it's a classic film from the golden
            age of Hollywood or a contemporary blockbuster, Joel is always eager
            to share his insights and opinions with anyone who will listen. His
            knowledge and love of movies make him a valuable resource for anyone
            seeking recommendations or insights into the world of cinema. It is
            clear that Joel's passion for movies is a big part of who he is and
            brings him great joy in life. <br />- ChatGPT
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
