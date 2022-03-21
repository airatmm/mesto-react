function PopupWithForm(props) {
return(
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__content">
            <button className={`popup__close popup__close_${props.name}`} type="button">

            </button>
            <h2 className="popup__title">{props.title}</h2>
            <form className={`popup__form popup__form__${props.name}`} name="form_profile" noValidate>
                {props.children}
                <button type="submit" className="popup__button popup__button_edit_save" name="save">
                    {props.buttonText}
                </button>
            </form>
        </div>
    </div>
);
}

export default  PopupWithForm;