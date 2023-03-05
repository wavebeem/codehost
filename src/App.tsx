import * as prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-erlang";
import "prismjs/components/prism-go";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-haskell";
import "prismjs/components/prism-java";
import "prismjs/components/prism-jsx";
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
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-zig";
import { useLayoutEffect, useRef } from "react";
import * as themes from "./themes";
import { usePersistentState } from "./usePersistentState";

const initialLang = "tsx";
const initialCode = `\
// 3... 2... 1... Blast-off!
async function countdown(): Promise<void> {
  for (let i = 10; i > 0; i--) {
    console.log(i);
    await sleep(1000);
  }
  console.log("Blast-off!");
}

/**
 * \`setTimeout\` for \`delay\` miliseconds
 */
async function sleep(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

countdown();
`;

const languages = {
  html: "HTML",
  css: "CSS",
  jsx: "JavaScript",
  tsx: "TypeScript",
  javascript: "JavaScript (no JSX)",
  typescript: "TypeScript (no JSX)",
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
  erlang: "Erlang",
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
} as const;

const themeNames = {
  ocean: "Ocean",
  basic: "Basic",
  nature: "Nature",
  miasma: "Miasma",
} as const;

function* walk(root: HTMLElement): Generator<HTMLElement> {
  yield root;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let node: Node | null = walker.currentNode;
  while (node) {
    if (node instanceof HTMLElement) {
      yield node;
    }
    node = walker.nextNode();
  }
}

type ThemeName = keyof typeof themeNames;

export function App(): JSX.Element {
  const preRef = useRef<HTMLPreElement>(null);
  const proseRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = usePersistentState("language", initialLang);
  const [code, setCode] = usePersistentState("code", initialCode);
  const [theme, setTheme] = usePersistentState<ThemeName>("theme", "miasma");
  const [includeLink, setIncludeLink] = usePersistentState("includeLink", true);

  function inlineStyles(root: HTMLElement) {
    root.classList.add("_root");
    for (const elem of walk(root)) {
      for (const cls of elem.classList) {
        const themeObj = themes[theme][cls] || {};
        for (const [key, val] of Object.entries(themeObj)) {
          elem.style.setProperty(key, val);
        }
      }
      // Leave the class in local development for easier theme debugging
      if (
        !(location.hostname === "localhost" && localStorage.debug === "true")
      ) {
        elem.removeAttribute("class");
      }
    }
  }

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
          spellCheck="false"
          rows={10}
          value={code}
          onChange={(event) => {
            setCode(event.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap gap3 items-end">
        <div className="flex flex-column gap3 items-start">
          <label className="bit-field flex flex-wrap gap1 items-center">
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
          <button className="bit-button" type="button" onClick={copyAsHTML}>
            Copy as HTML
          </button>
        </div>
        <div className="flex-auto"></div>
        <div className="flex flex-auto flex-column gap1">
          <label className="bit-label" htmlFor="form-theme">
            Theme
          </label>
          <select
            id="form-theme"
            className="bit-select"
            value={theme}
            onChange={(event) => {
              setTheme(event.target.value as any);
            }}
          >
            {Object.entries(themeNames).map(([key, val]) => {
              return (
                <option key={key} value={key}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <output className="code-output">
        <article>
          <header>
            <b>Preview</b> @cohost
          </header>
          <hr />
          <main>
            <h1>Your post title</h1>
            <div className="prose" ref={proseRef}>
              <pre
                // Create from scratch every time the theme changes to avoid
                // lingering inline styles on this element...
                key={theme}
                className="_root"
                ref={preRef}
              />
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
