import * as prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-go";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-haskell";
import "prismjs/components/prism-java";
import "prismjs/components/prism-js-extras";
import "prismjs/components/prism-json";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-perl";
import "prismjs/components/prism-php";
import "prismjs/components/prism-python";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-toml";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-zig";
import { useLayoutEffect, useRef, useState } from "react";

const initialLang = "javascript";
const initialCode = `\
const example = "hello world";

console.log(example);
`;

const languages = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  json: "JSON",
  svg: "SVG",
  xml: "XML",
  yaml: "YAML",
  toml: "TOML",
  sql: "SQL",
  graphql: "GraphQL",

  ruby: "Ruby",
  python: "Python",
  perl: "Perl",
  php: "PHP",
  lua: "Lua",
  elixir: "Elixir",
  shell: "Shell",

  c: "C",
  cpp: "C++",
  csharp: "C#",
  java: "Java",
  kotlin: "Kotlin",
  go: "Go",

  rust: "Rust",
  haskell: "Haskell",
  scala: "Scala",
  swift: "Swift",
  zig: "Zig",
};

type Theme = Record<string, ThemeObj>;
type ThemeObj = Record<string, string>;

const c0 = "hsl(270 80% 90%)";
const c1 = "hsl(190 20% 70%)";
const c2 = "hsl(30 80% 70%)";
const c3 = "hsl(190 95% 80%)";
const c4 = "hsl(100 70% 70%)";

const colors = {
  comment: { color: c0 },
  punctuation: { color: c1 },
  string: { color: c2 },
  property: { color: c2 },
  operator: { color: c2 },
  function: { color: c3 },
  keyword: { color: c4 },
} as const;

const themeBasic: Theme = {
  _root: {
    background: "hsl(200 20% 15%)",
    color: "hsl(200 10% 95%)",
    padding: "0.5rem",
    "border-radius": "0",
    "line-height": "1.5",
    "scrollbar-color": "hsl(200 10% 75%) hsl(200 20% 35%)",
    "overflow-x": "auto",
    "font-size": "14px",
    "margin-left": "-12px",
    "margin-right": "-12px",
  },

  comment: colors.comment,
  prolog: colors.comment,
  doctype: colors.comment,
  cdata: colors.comment,

  punctuation: colors.punctuation,

  selector: colors.string,
  "attr-name": colors.string,
  string: colors.string,
  char: colors.string,
  builtin: colors.string,
  inserted: colors.string,

  operator: colors.operator,
  entity: colors.operator,
  url: colors.operator,
  variable: colors.operator,

  atrule: colors.function,
  "attr-value": colors.function,
  function: colors.function,
  "class-name": colors.function,

  keyword: colors.keyword,

  property: colors.property,
  tag: colors.property,
  constant: colors.property,
  symbol: colors.property,
  deleted: colors.property,
  boolean: colors.property,
  number: colors.property,
  regex: colors.property,
  important: colors.property,
};

function* walk(root: Element): Generator<HTMLElement> {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let node: Node | null = walker.currentNode;
  while (node) {
    if (node instanceof HTMLElement) {
      yield node;
    }
    node = walker.nextNode();
  }
}

function inlineStyles(root: HTMLElement) {
  for (const elem of walk(root)) {
    for (const cls of elem.classList) {
      const themeObj = themeBasic[cls] || {};
      for (const [key, val] of Object.entries(themeObj)) {
        elem.style.setProperty(key, val);
      }
    }
    elem.removeAttribute("class");
  }
}

export function App(): JSX.Element {
  const preRef = useRef<HTMLPreElement>(null);
  const proseRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState(initialLang);
  const [code, setCode] = useState(initialCode);
  const [includeLink, setIncludeLink] = useState(true);

  useLayoutEffect(() => {
    if (!preRef.current) {
      return;
    }
    preRef.current.innerHTML = "";
    const codeElement = document.createElement("code");
    codeElement.className = `language-${lang}`;
    codeElement.textContent = code || " ";
    preRef.current.appendChild(codeElement);
    prism.highlightAllUnder(preRef.current);
    inlineStyles(preRef.current);
  });

  function loadFromFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = async () => {
      const [file] = input.files || [];
      if (!file) return;
      const text = await file.text();
      setCode(text);
    };
    input.click();
  }

  function copyAsHTML() {
    if (!proseRef.current) {
      alert("Failed to copy to clipboard");
      return;
    }
    navigator.clipboard.writeText(proseRef.current.innerHTML);
  }

  return (
    <main className="flex flex-column gap3">
      <div className="flex flex-wrap items-end gap3">
        <div className="flex flex-column gap1">
          <label className="bit-label" htmlFor="form-lang">
            Language
          </label>
          <select
            id="form-lang"
            className="bit-select"
            value={lang}
            onChange={(event) => {
              setLang(event.target.value);
            }}
          >
            {Object.entries(languages).map(([key, val]) => {
              return (
                <option key={key} value={key}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        <button className="bit-button" type="button" onClick={loadFromFile}>
          Load text from file&hellip;
        </button>
      </div>
      <div className="flex flex flex-column gap1">
        <label className="bit-label" htmlFor="form-code">
          Paste text here
        </label>
        <textarea
          id="form-code"
          className="bit-input code-input"
          rows={10}
          value={code}
          onChange={(event) => {
            setCode(event.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap gap3 items-center">
        <button className="bit-button" type="button" onClick={copyAsHTML}>
          Copy as HTML
        </button>
        <label className="bit-field">
          <input
            className="bit-checkbox"
            type="checkbox"
            checked={includeLink}
            onChange={(event) => {
              setIncludeLink(event.target.checked);
            }}
          />
          <div>Include link to codehost</div>
        </label>
      </div>
      <output className="code-output">
        <article>
          <header>
            <b>Display Name</b> @username
          </header>
          <hr />
          <main>
            <h1>Your post title</h1>
            <div className="prose" ref={proseRef}>
              <pre className="_root" ref={preRef} />
              {includeLink && (
                <div style={{ marginTop: "-1rem", fontSize: "smaller" }}>
                  syntax highlighting by{" "}
                  <a href="https://codehost.wavebeem.com">codehost</a>
                </div>
              )}
            </div>
            <aside>
              <small>#codehost</small>
            </aside>
          </main>
          <hr />
          <footer>0 comments</footer>
        </article>
      </output>
    </main>
  );
}
