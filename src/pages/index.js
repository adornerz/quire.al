import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Modal from 'components/modal';
import Banner from 'sections/banner';
import WorkFlow from 'sections/workflow';
import Pricing from 'sections/pricing';
import Products from 'sections/products';
import CtaThree from 'sections/cta-three';
import Contact from 'components/contact';

export default function IndexPage(props) {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
          <Layout>
            <SEO
              description="Përmirëso biznesin tënd me një website të ri!"
              title="Quire"
            />
            <Banner />
            <CtaThree />
            <Products />
            <WorkFlow />
            <Pricing />
            <Contact service={props.emailjsService} user={props.emailjsUser} template={props.emailjsTemplate} />
              <Modal />
          </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}


export async function getServerSideProps() {
  return {
      props: {
          emailjsService: process.env.EMAILJS_SERVICE_ID,
          emailjsUser: process.env.EMAILJS_USER_ID,
          emailjsTemplate: process.env.EMAILJS_TEMPLATE_ID
      }
  }
}