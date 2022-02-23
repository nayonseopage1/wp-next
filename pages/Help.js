import AboutPage from '../src/component/AboutPage';
import Layout from '../src/component/Layout';
import getNavData from '../src/inc/getNavData';
import Footer from '../src/component/Footer';
import footerData from '../src/inc/footerData';
import helpData from '../src/inc/helpData';
import Help from '../src/component/Help';

const About = ({headerMenu,helpData,footerOutput}) => {
    const helpPageData = helpData.data.HelpPage.HelpPage;
    return (

        <Layout headerMenu={headerMenu}>      
                <Help helpPageData={helpPageData}></Help>
                <Footer footerOutput={footerOutput} ></Footer>
        </Layout>

    );
};

export async function getStaticProps(context) {
    return {
      props: {
        headerMenu : await getNavData(),
        helpData : await helpData(),
        footerOutput : await footerData()
      }
    }
}

export default About;


