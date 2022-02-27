import React, { useState } from 'react';
import { Box, Grid, Container } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title';
import PriceCard from '../components/price-card';

const pricingMonthlyData = [
  {
    header: 'PLAN I THJESHTË',
    priceWithUnit: '€100',
    name: 'Website me një faqe',
    description: 'Single page website',
    buttonText: 'Kontakto',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Website i pajisur me një faqe (si ky website në të cilin ndodheni tani)',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Design modern dhe sipas dëshirës.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Akses i plotë 24/7 i websites.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Suport i plotë në menaxhim dhe ndryshime.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ju sigurojmë adresën e webit sipas dëshirës.',
        isAvailable: true,
      },
    ],
  },
  {
    header: 'PLAN I AVANCUAR',
    name: 'Website me disa faqe',
    description: 'Multi page website',
    priceWithUnit: '€200',
    buttonText: 'Kontakto',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Website i pajisur me disa faqe (Faqe galerie, produktesh, staffi etj)',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Design modern dhe sipas dëshirës.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Akses i plotë 24/7 i websites.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Suport 24/7 në menaxhim dhe ndryshime.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ju sigurojmë adresën e webit sipas dëshirës.',
        isAvailable: true,
      },
    ],
  },
  {
    header: 'E-COMMERCE',
    name: 'Dyqan Online',
    description: 'Online Store',
    priceWithUnit: '€350',
    buttonText: 'Kontakto',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Website i pajisur me disa faqe.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Design modern dhe sipas dëshirës.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Akses i plotë 24/7 i websites.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Suport 24/7 në menaxhim dhe ndryshime.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ju sigurojmë adresën e webit sipas dëshirës.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Porosi produktesh online.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Pagesë online ose në dorë.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Panel për të shtuar produkte, kontrolluar porositë, transportet, pagesat etj.',
        isAvailable: true,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          sx={styles.pricing.blockTitle}
          tagline="Çmimet"
          heading="Zgjidhni shërbimin që ju përshtatet"
        />
        <Grid sx={styles.pricing.wrapper}>
          {plan === false
            ? pricingMonthlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  pricing: {
    paddingTop: 100,
    paddingBottom: 150,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60,
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)',
      },
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s',
    },
    blockTitle: {
      textAlign: 'center',
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px',
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block',
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px',
      },
    },
    wrapper: {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px'],
    },
  },
};
