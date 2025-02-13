import type { BundledLanguage, BundledTheme } from 'shiki';
import { codeToHtml } from 'shiki';

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  fileName?: string;
};

export default async function Code({ code, lang = 'typescript', theme = 'nord', fileName }: Props) {
  const html = await codeToHtml(code, { lang, theme });

  return (
    <div>
      <div className="bg-neutral-800">
        {fileName && (
          <div className="bg-neutral-900 text-sm inline-flex py-2 px-4">
            {fileName}
          </div>
        )}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}