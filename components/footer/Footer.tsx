export default function Footer() {
  return (
    <footer className="grow max-w-[420] lg:max-w-(--breakpoint-lg) mx-auto bg-gray-200 dark:text-gray-50 dark:bg-gray-800 border-accent-2 p-8">
        <p className="text-m font-medium">
          &copy; 2025 Rusås Design
        </p>
      <div className="flex items-center justify-center gap-4 w-full">
        <a aria-label="LinkedIn link" href="https://www.linkedin.com/in/haakon-helmen-rusas/" target="_blank"
           rel="noreferrer noopener">
          LinkedIn
        </a>
        <a aria-label="Github link" href="https://github.com/haakonhelmenrusas" target="_blank"
           rel="noreferrer noopener">
          Github
        </a>
      </div>
    </footer>
  );
}