import React from "react";
import ReactModal from "react-modal";
import s from "./Modal.module.scss";

let ModalAddSingle = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  var hash = window.location.hash.substr(1);
  // var el = window.location.pathname;
  var id = parseInt(hash.match(/\d+/));

  let newPostproductName = React.createRef();
  let newPostproductCount = React.createRef();
  let newPostproductWeight = React.createRef();
  let newPostproductColor = React.createRef();
  let newPostproductDescr = React.createRef();
  let newPostproductFoto = React.createRef();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  let onUpdateProd = () => {
    props.updateProd();
  };
  let onNameChangeP = () => {
    let name = newPostproductName.current.value;
    let count = newPostproductCount.current.value;
    let weight = newPostproductWeight.current.value;
    let color = newPostproductColor.current.value;
    let description = newPostproductDescr.current.value;
    let foto = newPostproductFoto.current.value;
    let productId = id;
    props.updateProdName(
      name,
      count,
      weight,
      color,
      description,
      foto,
      productId
    );
  };

  return (
    <div className={s.portfolio__bodyModal}>
      <div className={s.portfolio__circleBody}>
        <span onClick={openModal} className={s.portfolio__circle}></span>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Редактор товару</h2>
        <div className={s.coment_body}>
          <div className={s.coment_form}>
            <form className="decor">
              <div className={s.form_left_decoration}></div>
              <div className={s.form_right_decoration}></div>
              <div className={s.circle}></div>
              <div className={s.form_inner}>
                <h3>Заповніть форму</h3>
                <input
                  type="text"
                  placeholder="Назва"
                  onChange={onNameChangeP}
                  ref={newPostproductName}
                />
                <input
                  type="text"
                  placeholder="Кількість "
                  onChange={onNameChangeP}
                  ref={newPostproductCount}
                />
                <input
                  type="text"
                  placeholder="Вага "
                  onChange={onNameChangeP}
                  ref={newPostproductWeight}
                />
                <input
                  type="text"
                  placeholder="Колір"
                  onChange={onNameChangeP}
                  ref={newPostproductColor}
                />
                <input
                  type="text"
                  placeholder="Опис"
                  onChange={onNameChangeP}
                  ref={newPostproductDescr}
                />
                <input
                  type="text"
                  placeholder="Фото URL"
                  onChange={onNameChangeP}
                  ref={newPostproductFoto}
                />
              </div>
            </form>
            <div className={s.coment_body}></div>
          </div>
        </div>
        <div className={s.portfolio__body}>
          <span className={s.portfolio__buttonDel} onClick={onUpdateProd}>
            Зберегти
          </span>
          <span className={s.portfolio__buttonDel} onClick={closeModal}>
            Відмінити
          </span>
        </div>
      </ReactModal>
    </div>
  );
};

export default ModalAddSingle;
