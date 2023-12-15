import { useState } from "react";
import "./Questions.css";

const faqs = [
  {
    title: "Ku operon kompania?",
    text: "Rent a car Roberti operon në Aeroportin Ndërkombetar të Prishtinës “Adem Jashari”.",
  },
  {
    title: "Si behet rezervimi?",
    text: "Rezervimet mund të bëhen online, përmes e-mail adreses apo në numrat e telefonit (Viber apo Whatsapp).",
  },
  {
    title: "Cilat janë mundësite e pagesës për të marrë veturë me qera?",
    text: "Pagesa bëhet në momentin e pranimit të veturës me cash apo kartë.",
  },
  {
    title: "Në cilat vende mund të marrim veturën me qera?",
    text: "Vetura mund të merret dhe të dorzohet në zyren në të cilen operon kompania.",
  },
  {
    title: "Dokumentet e kërkuara për të marrë veturë me qera?",
    text: "Pasaport valide dhe patent shofer (leje për ngasje automjetit).",
  },
  {
    title:
      "Sa është toleranca në kohë për të kthyer veturën me qera pa paguar para shtesë?",
    text: "Tolerance është deri në 3 orë pa pagesë shtesë.",
  },
];

export default function Questions() {
  return (
    <div className="ac-back">
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
