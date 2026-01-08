function BlockInlineDemo() {
  return (
    <div>
      <h2>Block-level vs Inline Elements</h2>

      <h3>Block Elements</h3>
      <p>This is a paragraph (block-level).</p>
      <div style={{ border: "1px solid black", padding: "5px" }}>
        This is a div (block-level)
      </div>

      <h3>Inline Elements</h3>
      <span style={{ color: "blue" }}>This is span</span>{" "}
      <span style={{ color: "green" }}>Inline element</span>
    </div>
  );
}

export default BlockInlineDemo;
