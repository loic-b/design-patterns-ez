export function setupComposite(contentElement: HTMLDivElement, infoElement: Node) {
  console.log(`visitor.setup`);

  contentElement.innerHTML = `
    <h2>Composite</h2>
    <h3>??? design pattern</h3>
  `;

  // add the common info element
  contentElement.appendChild(infoElement)

  // use the DP
  use()
}

function use() {
}

