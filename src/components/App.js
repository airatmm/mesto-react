import React, {useState} from 'react';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);

    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div className="App">
            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer/>

            <PopupWithForm
                name="edit"
                title="Редактировать профиль"
                buttonText="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <input id="title" placeholder="Имя" type="text" className="popup__input popup__input_type_title"
                       name="name"
                       required minLength="2" maxLength="40"/>
                <span className="popup__error title-error"/>
                <input id="description" placeholder="О себе" type="text"
                       className="popup__input popup__input_type_description" name="description" required minLength="2"
                       maxLength="200"/>
                <span className="popup__error description-error"/>
            </PopupWithForm>
            <PopupWithForm
                name="card"
                title="Новое место"
                buttonText="Создать"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <input id="cardtitle" placeholder="Название" type="text" className="popup__input popup__input_card_name"
                       name="name" required minLength="2" maxLength="30"/>
                <span className="popup__error cardtitle-error"/>
                <input id="cardurl" placeholder="Ссылка на картинку" type="url"
                       className="popup__input popup__input_card_url" name="link" required/>
                <span className="popup__error cardurl-error"/>
            </PopupWithForm>

            <PopupWithForm
                name="avatar"
                title="Обновить аватар"
                buttonText="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input id="avatar" placeholder="Ссылка на картинку" type="url"
                       className="popup__input popup__input_avatar" name="avatar" required/>
                <span className="popup__error avatar-error"/>
            </PopupWithForm>

            <PopupWithForm
                name="delete"
                title="Вы уверены"
                buttonText="Да"
            >
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            >
            </ImagePopup>
        </div>
  );
}

export default App;
