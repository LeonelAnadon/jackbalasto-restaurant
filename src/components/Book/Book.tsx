import React from "react";
import styles from "./book.module.scss";
import { IFormData } from "../../interfaces/global";
import { getCurrentFormattedDate } from "../../utils/getCurrentFormattedDate";
import { calculateMaxDate } from "../../utils/calculateMaxDate";
import Reserved from "./Reserved";
import { getRandomNumber } from "../../utils/getRandomNumber";

class FormInitialData {
  name = "";
  date = getCurrentFormattedDate();
  hour = "";
  people = "";
  table = 1;
}

const Book: React.FC = () => {
  const formRef = React.useRef(null);
  const [isReserved, setIsReserved] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<IFormData>(
    new FormInitialData()
  );

  const handleFillForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const element = e.target;

    setFormData((prev: IFormData) => {
      return { ...prev, [element.name]: element.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setFormData((prev: IFormData) => {
      return { ...prev, table: getRandomNumber()};
    });
    setIsReserved(true)
  };

  React.useEffect(() => {
    if(!isReserved){
      setFormData(new FormInitialData())
    }
  }, [isReserved])

  return (
    <section className={styles.container} id="reservar">
      <div>
        <div className={styles.titleCont}>
          <h2>Reservas</h2>
          <h3>¡Completa el formulario para asegurar tu mesa!</h3>
        </div>
        {isReserved ? (
          <Reserved {...formData} setIsReserved={setIsReserved} />
        ) : (
          <form onSubmit={handleSubmit} ref={formRef}>
            <div>
              <label htmlFor="form-name-book">Nombre y apellido</label>
              <input
                id="form-name-book"
                type="text"
                name="name"
                placeholder="Ingresá tu nombre"
                onChange={handleFillForm}
                value={formData?.name}
                required
              />
            </div>

            <div>
              <label htmlFor="form-date-book">Fecha</label>
              <input
                id="form-date-book"
                type="date"
                name="date"
                min={getCurrentFormattedDate()}
                max={calculateMaxDate(7)}
                onChange={handleFillForm}
                value={formData?.date}
                required
              />
            </div>

            <div>
              <label>Horario</label>
              <select
                name="hour"
                onChange={handleFillForm}
                value={formData.hour}
                required
              >
                <option value="">Selecciona un horario</option>
                <option value="11:00hs - 15:00hs">11:00hs - 15:00hs</option>
                <option value="17:00hs - 21:00hs">17:00hs - 21:00hs</option>
                <option value="21:00hs - 02:00hs">21:00hs - 02:00hs</option>
              </select>
            </div>

            <div>
              <label>Personas</label>
              <select
                name="people"
                onChange={handleFillForm}
                value={formData.people}
                required
              >
                <option value="">Selecciona la cantidad de personas</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="Más de 4">Más de 4</option>
              </select>
            </div>

            <div className={styles.submitNowCont}>
              {/* <input type="submit" title="Reservar" value="Reservar" /> */}
              <button type="submit" title="Reservar">Reservar</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Book;
