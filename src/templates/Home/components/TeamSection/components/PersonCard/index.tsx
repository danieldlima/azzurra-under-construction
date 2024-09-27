import React, { UIEvent, useEffect, useMemo, useRef, useState } from 'react';

import useWindowSize from '@root/modules/hooks/useWindowSize';

import IcArrowDown from '@components/Icons/ArrowDown';
import { url } from 'inspector';

interface PersonCardProps {
  name: string;
  photo: string;
  bio: {
    fullName: string;
    text?: string;
  };
}

function PersonCard({ name, photo, bio }: PersonCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShadowBottom, setIsShadowBottom] = useState(false);
  const [isShadowTop, setIsShadowTop] = useState(false);
  const [hasContentOverflows, setHasContentOverflows] = useState(false);
  const [bioContent, setBioContent] = useState({
    name: { height: 40 },
    content: { height: 230 }
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const personNameRef = useRef<HTMLButtonElement>(null);
  const bioContentRef = useRef<HTMLParagraphElement>(null);
  const windowSize = useWindowSize();

  const cardHeight = useMemo(() => {
    const { height } =
      (cardRef.current?.getBoundingClientRect() as DOMRect) || {
        height: 0
      };
    const { height: titleHeight } =
      (personNameRef.current?.getBoundingClientRect() as DOMRect) || {
        height: 40
      };

    return height - titleHeight;

    // eslint-disable-next-line
  }, [windowSize.width]);

  useEffect(() => {
    const { height: titleHeight } =
      (personNameRef.current?.getBoundingClientRect() as DOMRect) || {
        height: 40
      };
    const { height: contentHeight } =
      (bioContentRef.current?.getBoundingClientRect() as DOMRect) || {
        height: 0
      };

    if (titleHeight > 0) {
      setBioContent((content) => ({
        ...content,
        name: { height: titleHeight }
      }));
    }

    if (contentHeight > cardHeight) {
      setHasContentOverflows(true);
    } else {
      setHasContentOverflows(false);
    }
  }, [cardHeight, isOpen]);

  const handleChange = (event: UIEvent<HTMLDivElement>) => {
    const { height: titleHeight } =
      (personNameRef.current?.getBoundingClientRect() as DOMRect) || {
        height: 40
      };
    const { height: contentHeight } =
      (bioContentRef.current?.getBoundingClientRect() as DOMRect) || {
        height: 0
      };

    const height =
      cardHeight + event.currentTarget.scrollTop + (titleHeight - 40);

    if (event.currentTarget.scrollTop > 10) {
      setIsShadowTop(true);
    } else {
      setIsShadowTop(false);
    }

    if (height <= contentHeight) {
      setIsShadowBottom(false);
    } else {
      setIsShadowBottom(true);
    }
  };

  const toggleDetails = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      ref={cardRef}
      className={
        'relative w-full min-h-[350px] sm:min-h-[350px] bg-azzurra-gray-70 ' +
        'bg-cover bg-90% bg-no-repeat bg-center rounded-lg p-4 overflow-hidden'
      }
      style={
        {backgroundImage: `url("${photo}")`, backgroundPosition: "top", backgroundSize: "cover" }
      }
    >
      <div className="w-full h-full flex justify-center"
      style={{alignItems: 'self-end'}}>
        <span
          className={
            'text-3xl block text-center font-bold text-white uppercase'
          }
        >
          {name}
        </span>
      </div>

      <button
        type="button"
        className={
          'w-11/12 absolute bottom-3 flex right-3 rotate-180 focus-visible:outline-0 ' +
          'focus-visible:rounded-lg focus-visible:border focus-visible:border-white'
        }
        onClick={toggleDetails}
      >
        <div
          className={
            'w-11 p-1.5 bg-opacity-0 hover:bg-azzurra-gold text-azzurra-gray-20 hover:text-azzurra-gray-20 ' +
            'hover:bg-azzurra-gold-linear rounded-lg transition-all cursor-pointer'
          }
        >
          <IcArrowDown className={'w-full h-full'} />
        </div>
      </button>

      <div
        className={
          'absolute h-full w-full px-4 pt-4 pb-6 bottom-0 right-0 left-0 text-white ' +
          'bg-azzurra-gold-linear transition-all bg-azzurra-gold-linear transition-all ' +
          ` ${isOpen ? 'top-0 bottom-0' : 'top-full'}`
        }
      >
        <div
          className="sticky w-full top-0 flex justify-end z-10"
          onClick={toggleDetails}
        >
          <button
            type="button"
            className={
              ' ' +
              'rotate-0 focus-visible:border-0 -mr-2 focus-visible:outline-0 focus-visible:border ' +
              'focus-visible:border-white focus-visible:rounded-lg'
            }
            onClick={(e) => {
              e.stopPropagation();
              toggleDetails();
            }}
          >
            <span
              className={
                'flex flex-end w-10 h-10 p-1.5 hover:bg-azzurra-gray-20 text-azzurra-gray-20 ' +
                'hover:text-azzurra-gold rounded-lg transition-all cursor-pointer'
              }
            >
              <IcArrowDown className={'w-full h-full'} />
            </span>
          </button>
        </div>

        <div className={'relative h-full -top-10'}>
          <div className={'relative h-full overflow-hidden'}>
            <button
              ref={personNameRef}
              className={
                'flex items-center min-h-[2.5rem] text-left sm:text-person-name block font-bold uppercase mb-3 pr-12 '
              }
            >
              <span className={'block'}>{bio.fullName || name}</span>
            </button>

            <div
              style={{ height: `calc(100% - ${bioContent.name.height}px)` }}
              className={
                'card-bio-content relative after:absolute after:-top-8 after:left-2/4 ' +
                'after:-translate-x-2/4 after:w-[150%] after:h-8 after:rounded-[50%] after:bg-scroll-t ' +
                'after:shadow-scroll-t overflow-hidden h-[12rem] pb-4 ' +
                `${isShadowTop ? 'after:opacity-100' : 'after:opacity-0'} `
              }
            >
              <div
                className={
                  'ui__PersonCard__bio-container overflow-y-scroll h-full before:absolute before:-bottom-[20px] before:left-2/4 ' +
                  'before:-translate-x-2/4 before:w-[100%] before:h-8 before:rounded-[50%] before:bg-scroll-b ' +
                  'before:shadow-scroll-b ' +
                  `${
                    !isShadowBottom && hasContentOverflows
                      ? 'before:opacity-100'
                      : 'before:opacity-0'
                  }`
                }
                onScroll={handleChange}
              >
                <p ref={bioContentRef} className={'text-person-bio pb-10'}>
                  {bio.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
