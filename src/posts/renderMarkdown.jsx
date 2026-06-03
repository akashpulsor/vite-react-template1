import React from "react";

export function renderMarkdown(markdown) {
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);

  return blocks.map((block, index) => {
    if (block.startsWith("# ")) {
      return <h1 key={index}>{block.replace(/^# /, "")}</h1>;
    }
    if (block.startsWith("## ")) {
      return <h2 key={index}>{block.replace(/^## /, "")}</h2>;
    }
    if (block.startsWith("### ")) {
      return <h3 key={index}>{block.replace(/^### /, "")}</h3>;
    }
    if (/^!\[.*?\]\(.*?\)$/.test(block)) {
      const match = block.match(/^!\[(.*?)\]\((.*?)\)$/);
      return (
        <figure key={index} className="post-figure">
          <img src={match[2]} alt={match[1]} loading="lazy" />
          {match[1] && <figcaption>{match[1]}</figcaption>}
        </figure>
      );
    }
    if (isTable(block)) {
      return renderTable(block, index);
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

function isTable(block) {
  const lines = block.split("\n");
  return lines.length >= 2 && lines[0].includes("|") && /^\|?\s*:?-{3,}:?\s*\|/.test(lines[1]);
}

function renderTable(block, key) {
  const lines = block.split("\n").filter(Boolean);
  const headers = splitTableRow(lines[0]);
  const rows = lines.slice(2).map(splitTableRow);
  return (
    <div key={key} className="post-table-wrap">
      <table className="post-table">
        <thead>
          <tr>{headers.map((header) => <th key={header}>{formatInline(header)}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{formatInline(cell)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function splitTableRow(line) {
  return line.replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
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
