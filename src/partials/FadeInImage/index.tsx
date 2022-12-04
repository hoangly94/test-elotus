import React, { useRef, useState } from 'react';
import styles from './styles.module.css';

const defaultImageSrc = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

interface FadeInImageProps {
  src: string,
}

const FadeInImage = ({
  src
}: FadeInImageProps) => {
  const imageRef = useRef(null);
  const Image = useState(<img src={defaultImageSrc} />)

  return Image;
};

export default FadeInImage;
