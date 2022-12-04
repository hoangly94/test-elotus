import classNames from 'classnames';
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

interface FadeInImageProps {
  src: string,
}

const FadeInImage = ({
  src
}: FadeInImageProps) => {
  const [isLoading, setLoading] = useState(true);
  const imageRef: any = useRef(null);

  const defaultImageSrc = process.env.DEFAULT_IMAGE_URL;

  const loadImage = (src: string) => {
    return new Promise((resolve, reject) => {
      const loadImg = new Image()
      loadImg.src = src
      // wait 2 seconds to simulate loading time
      loadImg.onload = () => {
          setLoading(false);
          imageRef.current.src = src;
          resolve(src)
      }
      loadImg.onerror = err => reject(err)
    })
  }

  useEffect(() => {
    loadImage(src);
  }, [])

  return <img ref={imageRef} src={defaultImageSrc} className={classNames(!isLoading && 'fade-in-image')} />
};


export default FadeInImage;
