import './style.css';
import { setupVisitor } from './visitor.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Design Patterns</h1>
    <div id="content"></div>
    <label>see app' logs for details</label>
    <div id="patterns">
      <button>Visitor</button>
      <button>Iterator</button>
      <button>Composite</button>
    </div>
  </div>
`;

setupVisitor(document.querySelector<HTMLDivElement>('#content')!);

const patterns = document.querySelector<HTMLDivElement>('#patterns');
if (patterns) {
  console.log(`Clicked on`);

  patterns.addEventListener(
    'click',
    (/*el: HTMLDivElement, me: MouseEvent*/ e) => {
      console.log(`Clicked on`, e);
      // console.log(`Clicked on ${el}, event=${me}`);
    }
  );
}
