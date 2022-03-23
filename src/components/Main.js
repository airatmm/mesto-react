import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState(null);
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
                <div  className="profile__avatar" onClick={onEditAvatar}>
                    {userAvatar && <img className="profile__image" src={userAvatar} alt="Аватар"/>}
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="button profile__button profile__button_action_edit" type="button" onClick={onEditProfile}/>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="button profile__button profile__button_action_add"type="button" onClick={onAddPlace} />
            </section>
            <section className="cards">
                <ul className="cards__list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;