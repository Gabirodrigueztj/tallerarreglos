
document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
});


document.addEventListener("DOMContentLoaded", (e) => {
  const strangeArray = [
    "Zero",
    function () {
      alert("Hola soy una función en un array");
    },
    22,
    null,
    "Go lang",
    undefined,
    "Cobol",
    "I'm programmer",
    -2000,
    "Hello world",
    `One is ${1}`,
    { name: "Info", lastname: "last info" },
    () => true,
    function showNumbers() {
      return "1, 2, 3, 4";
    },
    "Another String",
    ["Hola mundo!"],
    "b is a letter",
    "JavaScript",
  ];

  // Filtrar elementos de tipo String y ordenar alfabéticamente
  const filteredStrings = strangeArray.filter((element) => typeof element === "string");
  filteredStrings.sort();

  // Mostrar la lista en el elemento "ul" de id "list"
  const container = document.getElementById("list");
  filteredStrings.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
});
