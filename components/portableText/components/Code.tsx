import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  value: {
    code: string
    language: string
  };
}

const CodeBlock = ({ value }: Props) => {
  const { code, language } = value;
  return (
    <SyntaxHighlighter
      language={language}
      style={solarizedDark}
      customStyle={{
        padding: '1em',
        marginBottom: '2em',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;