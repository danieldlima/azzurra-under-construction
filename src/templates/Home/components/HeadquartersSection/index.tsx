import React from 'react';

import Container from '@components/Layout/Container';
import SectionMask from '@components/SectionMask';
import Title from '@components/Title';

import PhotoLight from './components/PhotoLight';

export interface PhotoCard {
  id: number;
  text: string;
  photo: string;
}

export interface HeadquartersSectionProps {
  data: {
    title: string[];
    cards: PhotoCard[];
  };
}

function HeadquartersSection({ data }: HeadquartersSectionProps) {
  if (!data) return null;

  return (
    <section id="headquarters" className="relative">
      <SectionMask position="top" />

      <div className="px-16 mobile-landscape:px-20 md:px-52 lg:px-20 pt-20 sm:pt-44 pb-36 bg-headquarters-section">
        <Container>
          <div className={'mb-16'}>
            <Title
              color="white"
              label={data.title as never}
              isBlock={false}
              className={'text-center'}
            />
          </div>

          <div
            className={
              'grid row-auto mobile-landscape:grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-1 lg:grid-rows-2'
            }
            
          >
            <PhotoLight/>
          </div>
        </Container>
      </div>
    </section>
  );
}
export default HeadquartersSection;