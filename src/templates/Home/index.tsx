import * as React from 'react';

import { HomeProvider } from '@root/modules/providers';

import AboutSection, {
  AboutSectionProps
} from '@templates/Home/components/AboutSection';
import ContactSection, {
  ContactSectionProps
} from '@templates/Home/components/ContactSection';
import Footer, { FooterProps } from '@templates/Home/components/Footer';
import HeroBanner, {
  HeroBannerProps
} from '@templates/Home/components/HeroBanner';
import InvestmentPolicySection, {
  InvestmentPolicySectionProps
} from '@templates/Home/components/InvestmentPolicySection';
import RegulatoryInformationSection, {
  RegulatoryInformationSectionProps
} from '@templates/Home/components/RegulatoryInformationSection';
import TeamSection, {
  TeamSectionProps
} from '@templates/Home/components/TeamSection';
import HeadquartersSection, {
  HeadquartersSectionProps
} from '@templates/Home/components/HeadquartersSection';

interface HomeProps {
  data: {
    heroSection: HeroBannerProps['data'];
    aboutSection: AboutSectionProps['data'];
    investmentPolicySection: InvestmentPolicySectionProps['data'];
    teamSection: TeamSectionProps['data'];
    regulatoryInformationSection: RegulatoryInformationSectionProps['data'];
    headquartersSection: HeadquartersSectionProps['data'];
    contactSection: ContactSectionProps['data'];
    footerSection: FooterProps['data'];
  };
}

const Home = ({ data }: HomeProps) => {
  if (!data) return null;

  return (
    <HomeProvider>
      <HeroBanner data={data.heroSection} />
      <main>
        <AboutSection data={data.aboutSection} />
        <TeamSection data={data.teamSection} />
        <section id="investment">
          <InvestmentPolicySection data={data.investmentPolicySection} />
          <RegulatoryInformationSection
            data={data.regulatoryInformationSection}
          />
        </section>
        <HeadquartersSection data={data.headquartersSection} />
        <ContactSection data={data.contactSection} />
      </main>
      <Footer data={data.footerSection} />
    </HomeProvider>
  );
};

export default Home;
