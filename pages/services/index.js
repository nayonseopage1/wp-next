import React from 'react';
import Footer from '../../src/component/Footer';
import Service from '../../src/component/Home/Service';
import Layout from '../../src/component/Layout';
import footerData from '../../src/inc/footerData';
import getNavData from '../../src/inc/getNavData';
import homeData from '../../src/inc/homeData';


const services = ({headerMenu,homeOutput,footerOutput}) => {
    const hmOutput = homeOutput.data.HomePage.aboutSection;
    return (
        <Layout headerMenu={headerMenu}>
            <div>        
                <Service hmOutput={hmOutput}></Service>
                <Footer footerOutput={footerOutput} ></Footer>
            </div>
        </Layout>
    );
};

export async function getStaticProps(context) {
    return {
      props: {
        headerMenu : await getNavData(),
        homeOutput : await homeData(),
        footerOutput : await footerData()
      }
    }
  }

export default services;