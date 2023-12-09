import { useState } from "react";
import "./Questions.css";

const faqs = [
  {
    title: "Ku operon kompania?",
    text: "Rent a car Roberti operon ne Aeroportin Nderkombetar Adem Jashari",
  },
  {
    title: "Si behet rezervimi?",
    text: "Rezervimet mund te behen online, permes e-mail adreses apo ne numrat e telefonit (viber apo whatsapp).",
  },
  {
    title: "Cilat jane mundesite e pageses per te marre veture me qira?",
    text: "Pagesa behet ne momentin e marrjes se vetures me cash apo cart.",
  },
  {
    title: "Ne cilat vende mund te marrim veturen me qira?",
    text: "Vetura mund te merret dhe te dorzohet ne zyren ne te cilen operon kompania.",
  },
  {
    title: "Dokumentet e kerkuara per te marre veture me qira?",
    text: "Pasaport valide dhe patent shofer (minimumi 3 vjet).",
  },
  {
    title:
      "Sa eshte toleranca ne kohe per te kthyer veturen e marre me qira pa paguar para shtese?",
    text: "Toleranca eshte deri ne 3 ore pa pagese shtese.",
  },
];

export default function Questions() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div id="Questions" className="accordion-section">
      <p className="accordion-title">Pyetje të shpeshta</p>
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            num={i}
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`item-questions ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="number-questions">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title-questions">{title} </p>
      <p className="icon-questions">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box-questions">{children}</div>}
    </div>
  );
}
