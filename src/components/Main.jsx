import languages from "../assets/languages";
import { useState } from "react";

function Main() {
  const [langSelected, setLangSelected] = useState(0);
  const [title, setTitle] = useState("Nessun linguaggio selezionato");
  const [desc, setDesc] = useState("");

  function updateTab(id) {
    const language = languages.find((language) => language.id === id);
    setLangSelected(id);
    setTitle(language.title);
    setDesc(language.description);
  }

  return (
    <main>
      <div className="container py-4">
        <div className="buttons-row"></div>
      </div>
    </main>
  );
}

export default Main;
