import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVideogame } from "../../Utils/apiFunctions";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./UpdateVideogame.module.css";
import { setGameById } from "../../Redux/actions";
import Modal from "../Modal/Modal";

function Update() {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const game = useSelector((state) => state.getGameById);
  //estado inicial del formulario
  const [form, setForm] = useState({
    name: game?.name,
    img: game?.img,
    description: game?.description,
    platforms: game?.platforms,
    releaseDate: game?.releaseDate,
    rating: game?.rating,
  });
  //estado inicial de los errores
  const [errors, setErrors] = useState({
    name: "",
    img: "",
    description: "",
    platforms: "",
    releaseDate: "",
    rating: "",
  });
  useEffect(() => {
    dispatch(setGameById(id));
    const reset = () => {
      dispatch(setGameById("reset"));
    };
    return reset();
  }, [id, dispatch]);

  const validate = (form) => {
    const updatedErrors = {};
    //VALIDACION DEL NOMBRE
    if (!/^[a-zA-Z0-9\s!:]+$/.test(form.name)) {
      updatedErrors.name =
        "Sólo puede contener letras, números y algunos simbolos";
    } else {
      updatedErrors.name = "";
    }
    const nameMaxLength = 100; // Reemplaza 100 con el valor máximo admitido por el modelo
    if (form.name.length > nameMaxLength) {
      updatedErrors.name = `El nombre no puede superar los ${nameMaxLength} caracteres.`;
    }
    if (form.name === "") updatedErrors.name = "";
    //VALIDACION DE IMAGEN (URL)
    if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.img)) {
      updatedErrors.img = "Debe ingresar una URL válida";
    } else {
      updatedErrors.img = "";
    }
    if (form.img === "") updatedErrors.img = "";
    //VALIDACION DE PLATAFORMAS
    if (!/^[a-zA-Z0-9\s!-,]+$/.test(form.platforms)) {
      updatedErrors.platforms = "Sólo puede contener texto y números";
    } else {
      updatedErrors.platforms = "";
    }
    if (form.platforms === "") updatedErrors.platforms = "";
    //VALIDACION DE FECHA DE LANZAMIENTO
    if (!/^[0-9/]*$/.test(form.releaseDate)) {
      updatedErrors.releaseDate =
        "Formato de fecha inválido. Utilice solo números y /";
    } else {
      // Verificar la entrada del día
      if (form.releaseDate.length >= 1 && form.releaseDate.length <= 2) {
        const day = parseInt(form.releaseDate);
        if (isNaN(day) || day <= 0 || day > 31) {
          updatedErrors.releaseDate = "Día inválido";
        } else {
          updatedErrors.releaseDate = "";
        }
      }

      // Verificar la entrada del mes
      if (form.releaseDate.length >= 4 && form.releaseDate.length <= 5) {
        const month = parseInt(form.releaseDate.substring(3));
        if (isNaN(month) || month <= 0 || month > 12) {
          updatedErrors.releaseDate = "Mes inválido";
        } else {
          updatedErrors.releaseDate = "";
        }
      }

      // Verificar la entrada del año
      if (form.releaseDate.length >= 7 && form.releaseDate.length <= 8) {
        const year = parseInt(form.releaseDate.substring(6));
        if (isNaN(year)) {
          updatedErrors.releaseDate = "Año inválido";
        } else {
          updatedErrors.releaseDate = "";
        }
      }

      // Verificar el formato completo de la fecha
      if (form.releaseDate.length === 8) {
        if (
          !/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/.test(
            form.releaseDate
          )
        ) {
          updatedErrors.releaseDate =
            "Formato de fecha inválido. Utilice yyyy/mm/dd";
        } else {
          updatedErrors.releaseDate = "";
        }
      }
    }
    // Validar el rating
    if (!/^([0-5](\.[0-9])?|[0-4]\.)$/.test(form.rating)) {
      updatedErrors.rating = "Ingrese un número válido entre 0 y 5";
    } else {
      updatedErrors.rating = "";
    }

    if (form.rating === "") updatedErrors.rating = "";

    setErrors(updatedErrors);
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      [property]: value,
    }));
    validate({
      ...form,
      [property]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateVideogame(form, id); //para cuando se envia el formulario se vacie el form
    setForm({
      name: "",
      img: "",
      description: "",
      platforms: "",
      releaseDate: "",
      rating: "",
    });
  };

  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  return (
    <div>
      <br />
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.formSection}>
          <div className={styles.formField}>
            <br />
            <label className={styles.formText}> Nombre: </label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.formField}>
            <label className={styles.formText}> Image: </label>
            <input
              type="text"
              value={form.img}
              onChange={changeHandler}
              name="img"
            />
            {errors.img && <span className={styles.error}>{errors.img}</span>}
          </div>
        </div>
        <div className={styles.formSection}>
          <label className={styles.formText}> Descripción: </label>
          <input
            type="text"
            value={form.description}
            onChange={changeHandler}
            name="description"
          />
          {errors.description && (
            <span className={styles.error}>{errors.description}</span>
          )}
        </div>
        <div className={styles.formSection}>
          <label className={styles.formText}> Plataformas: </label>
          <input
            type="text"
            value={form.platforms}
            onChange={changeHandler}
            name="platforms"
          />
          {errors.platforms && (
            <span className={styles.error}>{errors.platforms}</span>
          )}
        </div>
        <div className={styles.formSection}>
          <label className={styles.formText}> Fecha de lanzamiento: </label>
          <input
            type="text" //date
            value={form.releaseDate}
            onChange={changeHandler}
            name="releaseDate"
          />
          {errors.releaseDate && (
            <span className={styles.error}>{errors.releaseDate}</span>
          )}
        </div>
        <div className={styles.formSection}>
          <label className={styles.formText}> Rating: </label>
          <input
            type="text"
            value={form.rating}
            onChange={changeHandler}
            name="rating"
          />
          {errors.rating && (
            <span className={styles.error}>{errors.rating}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={
            !Object.values(form).every((value) => value !== "") || hasErrors()
          }
          className={styles.submitButton}
          onClick={()=>setOpenModal(true)}
        >
          SUBMIT
        </button>

        {hasErrors() && (
          <div className={styles.errorContainer}>
            Los campos deben ser completados antes de contiunar
          </div>
        )}
        <br />
      </form>
      <Modal open={openModal} onClose={()=> {setOpenModal(false)
        navigate('/videogames')}} />
    </div>
  );
}

export default Update;
