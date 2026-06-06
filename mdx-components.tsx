import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // pre: (props) => <pre {...props} className="rounded-2xl p-5" />,
  h1: ({ children }) => <h1 className="font-bold text-5xl ">{children}</h1>,
  h2: ({ children }) => <h2 className="font-semibold text-3xl ">{children}</h2>,
  h3: ({ children }) => <h3 className="font-semibold text-2xl ">{children}</h3>,
  blockquote: ({ children }) => (
    <blockquote className="text-muted-foreground p-1 border-l-4 pl-3">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="border border-border bg-background text-muted-foreground shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 p-1 rounded-md">
      {children}
    </code>
  ),
  li: ({ children }) => <li className="list-disc">{children}</li>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
