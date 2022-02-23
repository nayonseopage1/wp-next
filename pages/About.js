import AboutPage from '../src/component/AboutPage';
import Layout from '../src/component/Layout';
import aboutData from '../src/inc/aboutData';
import getNavData from '../src/inc/getNavData';
import Footer from '../src/component/Footer';
import footerData from '../src/inc/footerData';

const About = ({headerMenu,aboutData,footerOutput}) => {
  const AboutPageData = aboutData.data.AboutPage.aboutPage;
    return (

        <Layout headerMenu={headerMenu}>      
                <AboutPage AboutPageData={AboutPageData}></AboutPage>
                <Footer footerOutput={footerOutput} ></Footer>
        </Layout>

    );
};

export async function getStaticProps(context) {
    return {
      props: {
        headerMenu : await getNavData(),
        aboutData : await aboutData(),
        footerOutput : await footerData()
      }
    }
}

export default About;


