import React, { UIEvent, useEffect, useMemo, useRef, useState } from 'react';
import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

const smallItemStyles: React.CSSProperties = {
  cursor: 'pointer',
  objectFit: 'cover',
  width: '100%',
  maxHeight: '100%',
  minHeight: '100%',
}

const PhotoLight = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
    minHeight: '100%',
  }

  const smallItemStylesPlus: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    gridColumn: '2',
  }

  return (
    <Gallery>
      <div
        style={{
          display: 'contents',
          //gridTemplateColumns: '240px 171px 171px',
          //gridTemplateRows: '114px 114px',
          gridGap: 12,
        }}

        className={
        'grid grid-cols-2 grid-rows-4 mobile-landscape:grid-rows-2 mobile-landscape:grid-cols-4 xl:grid-cols-3 xl:grid-rows-3 justify-center lg:justify-start gap-4'
      }
      >
        <Item
          original="../images/photos/headquarters_1.jpg"
          thumbnail="../images/photos/headquarters_1.jpg"
          width="1600"
          height="1600"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <img            
              style={smallItemStyles}
              src="../images/photos/thumbnails/headquarters_1.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="../images/photos/headquarters_2.jpg"
          thumbnail="../images/photos/headquarters_2.jpg"
          width="1600"
          height="1600"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <img            
              style={smallItemStyles}
              src="../images/photos/thumbnails/headquarters_2.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="../images/photos/headquarters_3.jpg"
          thumbnail="../images/photos/headquarters_3.jpg"
          width="1600"
          height="1068"
          alt="Photo of mountain lake by Samuel Rohl"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="../images/photos/thumbnails/headquarters_3.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="../images/photos/headquarters_4.jpg"
          thumbnail="../images/photos/headquarters_4.jpg"
          width="1600"
          height="1066"
          alt="Photo of fog in the village by Ales Krivec"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="../images/photos/thumbnails/headquarters_4.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="../images/photos/headquarters_5.jpg"
          thumbnail="../images/photos/headquarters_5.jpg"
          width="1600"
          height="1066"
          alt="Photo of river sunset by Michael Hull"
        >
          {({ ref, open }) => (
            <img
              //style={{ ...smallItemStyles, gridColumnStart: 2 }}
              style={smallItemStyles}
              src="../images/photos/thumbnails/headquarters_5.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="../images/photos/headquarters_6.jpg"
          thumbnail="../images/photos/headquarters_6.jpg"
          width="1600"
          height="1066"
          alt="Photo of bear by Thomas Lefebvre"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStylesPlus}
              src="../images/photos/thumbnails/headquarters_6.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="../images/photos/headquarters_7.jpg"
          thumbnail="../images/photos/headquarters_7.jpg"
          width="1600"
          height="1066"
          alt="Photo of bear by Thomas Lefebvre"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="../images/photos/thumbnails/headquarters_7.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="../images/photos/headquarters_8.jpg"
          thumbnail="../images/photos/headquarters_8.jpg"
          width="1600"
          height="1066"
          alt="Photo of bear by Thomas Lefebvre"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="../images/photos/thumbnails/headquarters_8.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
      </div>
    </Gallery>
  )
}
export default PhotoLight