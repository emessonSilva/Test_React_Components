import "./styles.css";

export function Image() {
  //pode incluir imagem definindo uma variável
  const imageURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQwJRV4r6ckxsAd8Gf2j8vbygd35QxgFXIA&usqp=CAU";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      //forma de chamar a variável com a imgem
      src={imageURL}
      //Caso não use variável, pode usar o url direto no src
      // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQwJRV4r6ckxsAd8Gf2j8vbygd35QxgFXIA&usqp=CAU"
      alt="Gato"
      className="img"
    ></img>
  );
}
