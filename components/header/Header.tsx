import PortableText from '@/components/portableText/portable-text';

export default function Header(props: { title: string | null | undefined; description: any }) {
  const title = props.title;
  const description = props.description?.length
    && props.description;
  return (
    <header
      className="mt-16 mb-16 flex flex-col lg:mb-12">
      <h1 className="text-balance pb-3 text-4xl font-medium leading-tight tracking-tighter lg:pr-8 lg:text-6xl">
        {title || ''}
      </h1>
      <h2 className="text-lg">
        <PortableText
          className="prose-lg"
          value={description?.length ? description : ''}
        />
      </h2>
    </header>
  );
}