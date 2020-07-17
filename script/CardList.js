class CardList {
	constructor(container, initialCards, card, addForm) {
		this.container = container;
		this.initialCards = initialCards;
		this.card = card;
		this.addForm = addForm;
	}
	addCard() {
		const cardName = this.addForm.elements.name.value;
		const cardLink = this.addForm.elements.image.value;
		const CreateNewCardFromUser = this.card.createCard(cardLink, cardName);
		this.container.insertAdjacentHTML('beforeend', CreateNewCardFromUser);
	};
	render() {
		for (const data of this.initialCards) {
			const template = this.card.createCard(data.image, data.name);
			this.container.insertAdjacentHTML('beforeend', template);
		}
	}
	remove(event) {
		if (event.target.closest('.place-card__delete-icon')) {
			this.container.removeChild(event.target.closest('.place-card'));
		}
	};
};
