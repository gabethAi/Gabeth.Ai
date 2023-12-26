import React from "react";
import CodeBlock from "./CodeBlock"; // Import CodeBlock from its location
import { Table } from "@mantine/core";

type ExtraProps = {
  node: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type Components = Partial<{
  [TagName in keyof JSX.IntrinsicElements]:  // Class component:
    | (new (
        props: JSX.IntrinsicElements[TagName] & ExtraProps
      ) => JSX.ElementClass)
    // Function component:
    | ((
        props: JSX.IntrinsicElements[TagName] & ExtraProps
      ) => JSX.Element | string | null | undefined)
    // Tag name:
    | keyof JSX.IntrinsicElements;
}>;

const MarkdownComponents: Components = {
  p({ children }) {
    return <p className='mb-2 last:mb-0 leading-loose'>{children}</p>;
  },
  code({ node, inline, className, children, ...props }: any) {
    if (typeof children === "string") {
      if (children.startsWith("▍")) {
        return <span className='mt-1 cursor-default animate-pulse'>▍</span>;
      }

      children = children.replace("`▍`", "▍");
    }

    const match = /language-(\w+)/.exec(className || "");

    if (inline) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <div className='py-3'>
        <CodeBlock
          language={(match && match[1]) || ""}
          code={String(children).replace(/\n$/, "")}
          {...props}
        />
      </div>
    );
  },
  ol({ children }) {
    return <ol className='mb-3'>{children}</ol>;
  },
  li({ children }) {
    return <li className='mb-2 last:mb-0 list-decimal'>{children}</li>;
  },
  link({ children, href }) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline'>
        {children}
      </a>
    );
  },
  table({ children }) {
    return (
      <Table
        stickyHeader
        highlightOnHover
        withTableBorder
        withColumnBorders
        verticalSpacing={"md"}>
        {children}
      </Table>
    );
  },
  td({ children }) {
    return <Table.Td>{children}</Table.Td>;
  },
  th({ children }) {
    return <Table.Th align='center'>{children}</Table.Th>;
  },
  tr({ children }) {
    return <Table.Tr>{children}</Table.Tr>;
  },
  thead({ children }) {
    return <thead className='bg-slate-200 dark:bg-black'>{children}</thead>;
  },
  tbody({ children }) {
    return <Table.Tbody>{children}</Table.Tbody>;
  },
};

export default MarkdownComponents;
