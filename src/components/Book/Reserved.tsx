import React from "react";
import styles from "./book.module.scss";
import { IFormData } from "../../interfaces/global";
import { formatDate } from "../../utils/formatDate";
import html2canvas from "html2canvas";

interface IReservedProps extends IFormData {
  setIsReserved: React.Dispatch<React.SetStateAction<boolean>>;
}

const Reserved: React.FC<IReservedProps> = (props) => {
  const divToPrintRef = React.useRef<HTMLDivElement | null>(null);
  const handlePrintThis = () => {
    if (!divToPrintRef.current) return;
    html2canvas(divToPrintRef.current).then(function (canvas) {
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = `Reserva de ${props.name} - ${props.date}.png`;
      a.click();
    });
  };
  return (
    <div className={styles.reservedContainer}>
      <div ref={divToPrintRef}>
        <h3>¡Muchas gracias!</h3>
        <h4>Se reservó la mesa #{props.table}</h4>
        <div>
          <b>Nombre:</b>
          <p>{props.name}</p>
        </div>
        <div>
          <b>Fecha:</b>
          <p>{formatDate(props.date)}</p>
        </div>
        <div>
          <b>Hora:</b>
          <p>{props.hour}</p>
        </div>
        <div>
          <b>Personas:</b>
          <p>{props.people}</p>
        </div>
        <h5>¡Te esperamos!</h5>
      </div>
      <div>
        <button onClick={handlePrintThis}>Guardar</button>
        <button onClick={() => props.setIsReserved(false)}>Aceptar</button>
      </div>
    </div>
  );
};

export default Reserved;
