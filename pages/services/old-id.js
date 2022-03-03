import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../../src/component/Footer';
import Service from '../../src/component/Home/Service';
import Layout from '../../src/component/Layout';
import footerData from '../../src/inc/footerData';
import getNavData from '../../src/inc/getNavData';
import homeData from '../../src/inc/homeData';


const ServiceDetail = ({headerMenu,footerOutput,homeOutput}) => {
   
    const router = useRouter();
    const { id } = router.query;
    const serOutput = homeOutput.data.HomePage.aboutSection.bannerHome.serviceSec;
    console.log(serOutput);
    return (
        <Layout headerMenu={headerMenu}>
            <div className='service-Item'>
                <h3>{serOutput.serviceTitle}</h3>
                <p>{serOutput.serviceContent}</p>
            </div>
            <Footer footerOutput={footerOutput} ></Footer>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    return {
      props: {
        headerMenu : await getNavData(),
        homeOutput : await homeData(),
        footerOutput : await footerData()
      }
    }
  }

export default ServiceDetail;