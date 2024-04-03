
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Job Search Mobile Application"
        description="This is a React Native Expo app designed to help users find jobs quickly and efficiently. It leverages the Rapid API service JSearch for fetching job listings."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Simple Interface"
        description="Clean and intuitive user interface for easy navigation. Easily search for jobs based on keywords."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Rajalakshmi</span>
        </p>
      </div>
    </>
  );
}

export default App;
