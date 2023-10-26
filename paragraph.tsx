import "./styles.css";

export function Paragraph() {
  return (
    //como adc o css em line no arquivo tsx
    <p className="paragraph" style={{ background: "turquoise" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus
      pariatur numquam eos deserunt labore corrupti velit voluptas corporis quis
      distinctio cum ad fugit, provident, assumenda voluptate odit laudantium
      nam.
    </p>
  );
}
