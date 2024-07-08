import React from 'react';

import Container from '@components/Layout/Container';
import SectionMask from '@components/SectionMask';
import Title from '@components/Title';

import PersonCard from './components/PersonCard';

export interface TeamCard {
  id: number;
  name: string;
  photo: string;
  bio: {
    fullName: string;
    text: string;
  };
}

export interface TeamSectionProps {
  data: {
    title: string[];
    cards: TeamCard[];
  };
}

function TeamSection({ data }: TeamSectionProps) {
  if (!data) return null;

  return (
    <section id="team" className="relative">
      <SectionMask position="top" />

      <div className="px-16 mobile-landscape:px-20 md:px-52 lg:px-20 pt-20 sm:pt-44 pb-36 bg-team-section">
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
              'grid row-auto mobile-landscape:grid-cols-2 lg:grid-cols-5 gap-4'
            }
          >
            {data.cards.map((card) => {
              //Hide Leandro Alves as requested 2024-07-08
              //Remove when needed to show again.
              if(card.id != 1){
                return (
                  <PersonCard key={card.id} photo={card.photo} name={card.name} bio={card.bio} />
                );
              }
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
export default TeamSection;
