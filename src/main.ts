import { setupComposite } from './composite.ts';
import './style.css';
import { setupVisitor } from './visitor.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>Design Patterns</h1>
    
    <div id="content"></div>

    <div>
      <label>see console logs for behavior details...</label>
      <div id="patterns">
        <button id="default">Visitor</button>
        <button>Iterator</button>
        <button>Composite</button>
      </div>
    </div>
    `;


setup()

function setup() {
  // ---------- select HTML element
  const content = document.querySelector<HTMLDivElement>('#content');
  const patterns = document.querySelector<HTMLDivElement>('#patterns');
  const template = document.querySelector<HTMLTemplateElement>('#template')?.content;
  if (!(content && patterns && template)) {
    console.warn("main: invalid elements content/patterns", content, patterns);
    return
  }

  // ---------- add click event handler on pattern buttons
  patterns.addEventListener('click', e => {
    // ----- handle the click event
    if (!(e.target instanceof HTMLButtonElement)) {
      console.warn("main: invalid target ", e.target);
      return
    }

    // ----- setup the clicked pattern
    const name = e.target.innerText.toLowerCase();
    SetupPattern(name, content, template);
  });

  // ---------- select a DP by default (to accelerate the dev: no need to click to a button)
  setTimeout(() => {
    const btn = document.querySelector<HTMLButtonElement>('#default');
    if (btn instanceof HTMLButtonElement) {
      btn.focus()
      btn.click()
    }
  });
}

/** setup the selected design pattern */
function SetupPattern(patternName: string, content: HTMLDivElement, template: DocumentFragment) {
  console.clear();
  content.innerHTML = ''
  console.log(`main: patterns on-click, target=`, name);

  const clone = template.cloneNode(true)

  switch (patternName) {
    case 'visitor':
      setupVisitor(content, clone);
      break;

    case 'composite':
      setupComposite(content, clone);
      break;

    default:
      console.warn(`main.pattern-select: Click on unknown element`, patternName);
      break;
  }
}

