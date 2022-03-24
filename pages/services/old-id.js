import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../../src/component/Footer';
import Service from '../../src/component/Home/Service';
import Layout from '../../src/component/Layout';
import footerData from '../../src/inc/footerData';
import getNavData from '../../src/inc/getNavData';
import homeData from '../../src/inc/homeData';


const ServiceDetail = ({headerMenu,footerOutput}) => {
   
    const router = useRouter();
    const { id } = router.query;
    

    return (
        <Layout headerMenu={headerMenu}>
            <div className='service-Item'>
              <h2>service page detail</h2>
                <h1>Url : { id}</h1> 
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