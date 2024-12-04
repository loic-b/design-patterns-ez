export function setupVisitor(element: HTMLDivElement) {
  element.innerHTML = `
    <h2>Visitor</h2>
    <h3>Behavioral design pattern</h3>
    
    <!-- <p id="p"></p> -->
  `;

  // const p = document.querySelector<HTMLParagraphElement>('#p');
  // p!.innerHTML = "this is the 'p' content";
}

// -------------------------------------------------------
// interfaces visitor/element
// -------------------------------------------------------

interface IStateVisitor {
  get name(): string;
  visit(state: IStateElement): void;

  // note: several visit methods can be defined, allowing the visited elements to choose the appropriate method for the visit
}

interface IStateElement {
  get name(): string;
  accept(visitor: IStateVisitor): void;
}

// -------------------------------------------------------
// elements
// -------------------------------------------------------

class ZeroAnalyzerState implements IStateElement {
  get name(): string {
    return 'Zero-Analyzer';
  }

  accept(visitor: IStateVisitor): void {
    console.log(
      `State "${this.name}" accepts given ${visitor.name} visitor...`
    );
    visitor.visit(this);
  }
}

class OxydeState implements IStateElement {
  get name(): string {
    return 'Oxyde';
  }

  accept(visitor: IStateVisitor): void {
    console.log(
      `State "${this.name}" accepts a given ${visitor.name} visitor...`
    );
    visitor.visit(this);
  }
}

class PurgeState implements IStateElement {
  get name(): string {
    return 'Purge';
  }

  accept(visitor: IStateVisitor): void {
    console.log(
      `State "${this.name}" accepts a given ${visitor.name} visitor...`
    );
    visitor.visit(this);
  }
}

// -------------------------------------------------------
// visitors
// -------------------------------------------------------

class FooVisitor implements IStateVisitor {
  get name(): string {
    return 'Foo';
  }
  visit(state: IStateElement): void {
    console.log(`Visitor "Foo" visits "${state.name}" state`);
  }
}
class BarVisitor implements IStateVisitor {
  get name(): string {
    return 'Bar';
  }
  visit(state: IStateElement): void {
    console.log(`Visitor "Bar" visits "${state.name}" state`);
  }
}

// -------------------------------------------------------
// usage
// -------------------------------------------------------

const states = [new ZeroAnalyzerState(), new OxydeState(), new PurgeState()];
const fooVisitor = new FooVisitor();
const barVisitor = new BarVisitor();

// visit all state elements
console.group('visit all state elements');
for (const state of states) {
  state.accept(fooVisitor);
}
console.groupEnd();

// visit one state element
console.group('visit state element no.1');
states[1].accept(barVisitor);
console.groupEnd();
