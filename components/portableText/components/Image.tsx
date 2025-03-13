import { getImageDimensions } from '@sanity/asset-utils';
import { Image } from 'next-sanity/image';
import { urlForImage } from '@/sanity/lib/utils';

interface ImageComponentProps {
  value: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  isInline: boolean;
}

export default function ImageComponent({ value, isInline }: ImageComponentProps) {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      width={width}
      height={height}
      src={urlForImage(value)?.url() as string || ''}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',
        aspectRatio: width / height,
      }}
    />
  );
};