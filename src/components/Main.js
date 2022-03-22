import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = useState('Capitan Flint');
    const [userDescription, setUserDescription] = useState('Mariner');
    const [userAvatar, setUserAvatar] = useState('../images/avatar.jpg');
    const [cards, setCards] = useState([]);


    useEffect(() => {
        Promise.all([api.getUser(), api.getCards()])
            .then(([profile, cards]) => {
                setUserName(profile.name);
                setUserDescription(profile.about);
                setUserAvatar(profile.avatar);
                setCards(cards);
            })
            .catch((err) => console.log(`Ошибка загрузки данных с сервера ${err}`));
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div onClick={props.onEditAvatar} className="profile__avatar">
                    <img className="profile__image" src={userAvatar} alt="Аватар"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button onClick={props.onEditProfile}
                            className="button profile__button profile__button_action_edit" type="button">

                    </button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button onClick={props.onAddPlace} className="button profile__button profile__button_action_add"
                        type="button">

                </button>
            </section>
            <section className="cards">
                <ul className="cards__list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;