import React, { useState } from 'react';
import { useInView } from "react-intersection-observer";

interface BlockProps {
  children: React.ReactNode;
  className: string;
  useArticle?: boolean; // Prop pour spécifier si on utilise un article ou une div
}

function Block({children, className, useArticle = false}: BlockProps) {
  const [toAnimate, setAnimated] = useState(false);
  const {ref} = useInView({
    threshold: 0, // Détecter si l'élément est visible à 20%
    onChange: (inView) => {
      if (inView) {
        handleVisible();
      }
    }
  });

  const handleVisible = () => {
    setAnimated(true);
  };

  const TagName = useArticle ? 'article' : 'div';

  return (
    <TagName ref={ref} className={'animate__animated ' + (toAnimate ? className : '')}>{toAnimate && children}</TagName>
  );
}

export default Block;