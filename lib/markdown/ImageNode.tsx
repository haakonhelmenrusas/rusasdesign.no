'use client';
import Image from 'next/image';
import React from 'react';

export interface ImageProps {
  alt?: string;
  src: string;
}

const ImageNode: React.FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt || 'Image'}
      unoptimized
      loading="lazy"
      sizes="(max-width: 800px) 100vw, 800px"
      width={800}
      height={450}
      {...props}
    />
  )
};

export default ImageNode;