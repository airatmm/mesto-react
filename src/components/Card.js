function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="cards__item">
            <button type="button" className="cards__delete"/>
            <img className="cards__images" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="cards__content">
                <h2 className="cards__caption">{card.name}</h2>
                <div>
                    <button type="button" className="cards__like" />
                    <p className="cards__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;