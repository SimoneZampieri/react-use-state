import languages from "../assets/languages";
import { useState } from "react";

function Main() {
  const [langSelected, setLangSelected] = useState(0);
  const [title, updateTitle] = useState("Nessun linguaggio selezionato");
  const [desc, updateDesc] = useState("");
}

const Main = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="buttons-row"></div>
      </div>
    </main>
  );
};

export default Main;
