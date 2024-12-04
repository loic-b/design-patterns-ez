/**
 * Setup the visitor elements
 * 
 * @param contentElement The main div where to write specific content
 * @param infoElement An coomon div that contain generic element to dispay the design pattern info (goal, pros, cons, ...)
 */
export function setupVisitor(contentElement: HTMLDivElement, infoElement: Node) {
  // setup the specific element
  contentElement.innerHTML = `
    <h2>Visitor</h2>
    <h3>Behavioral design pattern</h3>
  `;

  // add the common element
  contentElement.appendChild(infoElement)

  // use the DP
  use()
}

// -------------------------------------------------------
// interfaces visitor/element
// -------------------------------------------------------

/** define the visitor interface */
interface IStateVisitor {
  get name(): string;
  visit(state: IStateElement): void;

  // note: several visit methods can be defined, allowing the visited elements to choose the appropriate method for the visit
}

/** define the visitable element interface */
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
function use() {
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
}
