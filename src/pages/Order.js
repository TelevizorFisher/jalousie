import React from "react";
import "./Order.scss";
import { Form, Field, useField, useForm } from "react-final-form";
import store from "../redux/redux-store";
import FormStateFromRedux from "../components/FormOrder/FormStateFromRedux";
import FormStateToRedux from "../components/FormOrder/FormStateToRedux";
import validate from "../components/FormOrder/validate";
import { Checkbox, FormControl, FormErrorMessage } from "@chakra-ui/core";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

export default function Order() {
  return (
    <div className="form">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{ employed: true, stooge: "larry" }}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, errors, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} action="#" className="form__body">
            <FormStateToRedux form="example" />
            <h1 className="form__title">Отправка данных</h1>
            <div className="form__item">
              <label htmlFor="formName" className="form__label">
                Имя*
              </label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="Имя*"
                className="form__input"
              />
            </div>
            <div className="form__item">
              <label htmlFor="formEmail" className="form__label">
                E-mail*
              </label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
                className="form__input"
              />
            </div>
            <div className="form__item">
              <div className="form__label">Левша или правшa?</div>
              <div className="options">
                <div className="option__item">
                  <label>
                    <Field
                      name="stooge"
                      component="input"
                      type="radio"
                      value="Левша"
                    />{" "}
                    Левша
                  </label>
                  {/*                   <input
                    id="formRightHanded"
                    checked
                    type="radio"
                    value="right"
                    name="hand"
                    className="option__input"
                  /> */}
                  {/*                   <label htmlFor="formRightHanded" className="option__label">
                    <span>Правша</span>
                  </label> */}
                </div>
                <div className="option__item">
                  <label>
                    <Field
                      name="stooge"
                      component="input"
                      type="radio"
                      value="Правша"
                    />{" "}
                    Правша
                  </label>
                  {/*                   <input
                    id="formLeftHanded"
                    type="radio"
                    value="left"
                    name="hand"
                    className="option__input"
                  /> */}
                  {/*                   <label htmlFor="formLeftHanded" className="option__label">
                    <span>Левша</span>
                  </label> */}
                </div>
              </div>
            </div>
            <div className="form__item">
              <label htmlFor="formMessage" className="form__label">
                Сообщение
              </label>
              <Field
                name="message"
                component="textarea"
                placeholder="Notes"
                className="form__input"
              />
              {/*               <textarea
                name="message"
                id="formMessage"
                className="form__input"
              ></textarea> */}
            </div>
            <div className="form__item">
              <div className="form__label">Прикрепить фото</div>
              <div className="file">
                <div className="file__item">
                  <input
                    id="formImage"
                    accept=".jpg, .png, .gif"
                    type="file"
                    name="image"
                    className="file__input"
                  />
                  <div className="file__button">Выбрать</div>
                </div>
                <div className="file__preview"></div>
              </div>
            </div>
            <div className="form__item">
              <div className="checkbox">
                {/*                 <input
                  id="formAgreement"
                  type="checkbox"
                  name="agreement"
                  className="checkbox__input"
                /> */}
                <Field
                  name="agreement"
                  component="input"
                  type="checkbox"
                  value="agreement"
                />
                <label htmlFor="formAgreement">
                  <span>Я даю согласие</span>
                </label>
              </div>
            </div>
            <CheckboxControl name="employed">Employed</CheckboxControl>
            <button
              type="submit"
              disabled={submitting || pristine}
              className="form__button"
            >
              {" "}
              Отправить
            </button>
            <button
              type="button"
              className="form__button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Отменить
            </button>
          </form>
        )}
      </Form>
    </div>
  );
}
const CheckboxControl = ({ name, value, children }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched, invalid },
  } = useField(name, {
    type: "checkbox", // important for RFF to manage the checked prop
  });
  return (
    <FormControl isInvalid={touched && invalid} my={4}>
      <Checkbox {...input} isInvalid={touched && invalid} my={4}>
        {children}
      </Checkbox>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
