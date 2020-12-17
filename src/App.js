import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import './tamplate/css/bootstrap.min.css';

function App() {

  const changeRef = useRef(null);

  const inputRef = useRef(null);

  const [lang, setLang] = useState('uz');

  const vocabulary = {
    uz: {
      theme: "Ko'rinishni o'zgartirish",
      heading: "React (web framework) haqida",
      text: "React (bundan tashqari, React.js yoki ReactJS sifatida tanilgan) ochiq-manba hisoblanadi, old end, foydalanuvchi interfeyslarni yoki UI komponentlarini qurish uchun JavaScript kutubxona. Bu Facebook va individual ishlab chiquvchilar va kompaniyalar hamjamiyati tomonidan muhofaza qilinadi.React bir sahifali yoki mobil ilovalarni ishlab chiqishda baza sifatida foydalanish mumkin. Biroq, React faqat DOM ma'lumotlarni ko'rsatish bilan bog'liq, va Shuning uchun React ilovalarni yaratish, odatda, davlat boshqaruvi va yo'l-yo'riq uchun qo'shimcha kutubxonalar foydalanishni talab qiladi. Redux va React Router bunday kutubxonalar tegishli misollar.",
      password: "parol",
      button: "jo'natish",
    },
    eng: {
      theme: "Change theme",
      heading: "About React (web framework)",
      text: "React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.",
      password: "password",
      button: "submit",
    },
    ru: {
      theme: "Сменить тему",
      heading: "О React (веб-фреймворк)",
      text: "React (также известный как React.js или ReactJS)-это библиотека JavaScript с открытым исходным кодом для создания пользовательских интерфейсов или компонентов пользовательского интерфейса. Он поддерживается Facebook и сообществом индивидуальных разработчиков и компаний.React может быть использован в качестве базы при разработке одностраничных или мобильных приложений. Однако React занимается только рендерингом данных в DOM, и поэтому создание приложений React обычно требует использования дополнительных библиотек для управления состоянием и маршрутизации. Redux и React Router являются соответствующими примерами таких библиотек.",
      password: "пароль",
      button: "разместить",
    }
  };

  return (
    <>
      <div className="site-body" ref={changeRef}>
        <div className="conatiner">
          <div className="d-flex justify-content-between align-center my-3">
            <select
              className="change-language form-control w-25"
              defaultValue = {lang}
              onChange = {e => setLang(e.target.value)}
            >
              <option  value="uz"> O'zbekcha </option>
              <option value="eng"> English </option>
              <option value="ru"> Русский </option>
            </select>
  
            <div className="form-group w-25 m-0 d-flex">
              <label 
              className="m-0"
                htmlFor="exampleInputPassword">{vocabulary[lang].password}
              </label>
              <input 
                ref={inputRef}
                type="password"
                className="form-control mx-1"
                id="exampleInputPassword"
                onChange={() => {
                  if (inputRef.current.value.length < 6) {
                    inputRef.current.classList.add('danger')
                  } else {
                    inputRef.current.classList.remove('danger')
                  }

                  if (inputRef.current.value.length === 0) {
                    inputRef.current.classList.remove('danger')
                  }
                }}
              />
            </div>
  
            <button 
              type="submit" 
              class="btn btn-primary">
                {vocabulary[lang].button}
            </button>

            <div 
              className="custom-control custom-switch d-flex">
              <input 
                type="checkbox" 
                className="custom-control-input" 
                id="customSwitch1"
                onClick={() =>
                  changeRef.current.classList.toggle('bg-color')
                } 
              />
              <label 
                className="custom-control-label" 
                htmlFor="customSwitch1">{vocabulary[lang].theme}
              </label>
            </div>
          </div>

      
          <h1 className="heading">{vocabulary[lang].heading}</h1>
      
          <p className="text">{vocabulary[lang].text}</p>
        </div>
      </div>
    </>
  );
}
  
export default App;
  