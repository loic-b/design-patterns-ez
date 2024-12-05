import './style.css';
import { setupIterator } from './patterns/behavioral/iterator.ts';
import { setupVisitor } from './patterns/behavioral/visitor.ts';
import { setupComposite } from './patterns/structural/composite.ts';

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
  // ----- clear the display and the logs
  console.clear();
  content.innerHTML = ''

  // ----- select the design pattern to demo
  let setupPattern: (reporter: IPatternReporter) => void
  switch (patternName) {
    case 'visitor':
      setupPattern = setupVisitor;
      break;

    case 'composite':
      setupPattern = setupComposite;
      break;

    case 'iterator':
      setupPattern = setupIterator;
      break

    default:
      console.warn(`main.pattern-select: Click on unknown element`, patternName);
      return;
  }

  // ----- create the pattern reporter
  const container = template.cloneNode(true)
  content.appendChild(container)
  const reporter = new PatternReporter()

  // ----- setup the selected pattern
  setupPattern(reporter)
}

export interface IPatternReporter {
  set patternName(name: string)
  set patternType(typeName: string)
  addGoal(text: string): void
  addPros(text: string): void
  addCons(text: string): void
}

class PatternReporter implements IPatternReporter {

  //#region select target elements

  nameElement = document.querySelector("h2")
  typeElement = document.querySelector("h3")
  goalsElement = document.querySelector("ul#ul-goals")
  prosElement = document.querySelector("ul#ul-pros")
  consElement = document.querySelector("ul#ul-cons")

  //#endregion

  set patternName(name: string) {
    this.nameElement!.innerText = name
  }

  set patternType(typeName: string) {
    this.typeElement!.innerText = typeName
  }

  addGoal(text: string): void {
    const li = document.createElement('li')
    li.innerText = text
    this.goalsElement!.appendChild(li)
  }

  addPros(text: string): void {
    const li = document.createElement('li')
    li.innerText = text
    this.prosElement!.appendChild(li)
  }

  addCons(text: string): void {
    const li = document.createElement('li')
    li.innerText = text
    this.consElement!.appendChild(li)
  }
}

