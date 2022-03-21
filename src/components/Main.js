import React from 'react';

function Main(props) {

    return (
        <main className="main">
            <section className="profile">
                <div onClick={props.onEditAvatar} className="profile__avatar">
                    <img className="profile__image" src="/" alt="Аватар"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button onClick={props.onEditProfile}
                            className="button profile__button profile__button_action_edit" type="button">

                    </button>
                    <p className="profile__description">Исследователь океана</p>
                </div>
                <button onClick={props.onAddPlace} className="button profile__button profile__button_action_add"
                        type="button">

                </button>
            </section>
            <section className="cards">
                <ul className="cards__list">
                </ul>
            </section>
        </main>

    );
}

export default Main;