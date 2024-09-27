import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import AboutSection from '@content/home/pt/AboutSection-JSON-Content.json';
import ContactSection from '@content/home/pt/ContactSection-JSON-Content.json';
import FooterSection from '@content/home/pt/Footer-JSON-Content.json';
import HeroSection from '@content/home/pt/HeroSection-JSON-Content.json';
import InvestmentPolicySection from '@content/home/pt/InvestmentPolicySection-JSON-Content.json';
import NavItems from '@content/home/pt/NavItems-JSON-Content.json';
import RegulatoryInformationSection from '@content/home/pt/RegulatoryInformationSection-JSON-Content.json';
import TeamSection from '@content/home/pt/TeamSection-JSON-Content.json';
import HeadquartersSection from '@content/home/pt/HeadquartersSection-JSON-Content.json';

import Home from '@templates/Home';
import { FooterProps } from '@templates/Home/components/Footer';

import HeadComponent from '@components/HeadComponent';
import Navigation from '@components/Layout/Navigation';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation data={NavItems} />
      <Home
        data={{
          heroSection: HeroSection,
          aboutSection: AboutSection,
          investmentPolicySection: InvestmentPolicySection,
          teamSection: TeamSection,
          regulatoryInformationSection: RegulatoryInformationSection,
          headquartersSection: HeadquartersSection,
          contactSection: ContactSection,
          footerSection: FooterSection as FooterProps['data']
        }}
      />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <HeadComponent />;
