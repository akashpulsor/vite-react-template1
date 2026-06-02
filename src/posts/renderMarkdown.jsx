import React from "react";

export function renderMarkdown(markdown) {
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);

  return blocks.map((block, index) => {
    if (block.startsWith("## ")) {
      return <h2 key={index}>{block.replace(/^## /, "")}</h2>;
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={index} className="plain-list">
          {block.split("\n").map((item) => (
            <li key={item}>{formatInline(item.replace(/^- /, ""))}</li>
          ))}
        </ul>
      );
    }
    return <p key={index}>{formatInline(block)}</p>;
  });
}

function formatInline(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
