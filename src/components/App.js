import React, {useState} from 'react';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
// import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);

    }

  return (
    <div className="App">
      <Header/>
      <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          // onCardClick={handleCardClick}
      />
      <Footer/>

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
      >
        <input id="title" placeholder="Имя" type="text" className="popup__input popup__input_type_title" name="name"
               required minLength="2" maxLength="40"/>
        <span className="popup__error title-error">

                  </span>
        <input id="description" placeholder="О себе" type="text"
               className="popup__input popup__input_type_description" name="description" required minLength="2"
               maxLength="200"/>
        <span className="popup__error description-error">

                    </span>
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
      >
        <input id="cardtitle" placeholder="Название" type="text" className="popup__input popup__input_card_name"
               name="name" required minLength="2" maxLength="30"/>
        <span className="popup__error cardtitle-error">

                </span>
        <input id="cardurl" placeholder="Ссылка на картинку" type="url"
               className="popup__input popup__input_card_url" name="link" required/>
        <span className="popup__error cardurl-error">

                  </span>

      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
      >
        <input id="avatar" placeholder="Ссылка на картинку" type="url"
               className="popup__input popup__input_avatar" name="avatar" required/>
        <span className="popup__error avatar-error">

              </span>
      </PopupWithForm>


      <PopupWithForm
        name="delete"
        title="Вы уверены"
        buttonText="Да"
      >
      </PopupWithForm>





      <template className="template">
        <li className="cards__item">
          <button type="button" className="cards__delete">

          </button>
          <img className="cards__images" src="." alt=""/>
          <div className="cards__content">
            <h2 className="cards__caption">

            </h2>
            <div>
              <button type="button" className="cards__like">

              </button>
              <p className="cards__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>

    </div>
  );
}

export default App;
