import { elements, capitalizeFirstLetter } from './base'; 

export const toggleFavouriteBtn = isLiked => {
    const iconString = isLiked ? 'fas fa-star' : 'far fa-star';
    document.querySelector('.fav-btn i').setAttribute('class', `${iconString}`);

};

export const toggleFavouriteMenu = numFav => {
    document.querySelector('.favourites-container').style.visibility = numFav > 0 ? 'visible' : 'hidden';
};

export const clearFavourites = () => {
    elements.favourites.innerHTML = '';
};

export const renderFavourite = favourite => {

    const capitalName = capitalizeFirstLetter(favourite.name)

     const markup = `
        <a class="favourites-container__likes"  href="#${favourite.id}">
                <div class="favourites-div" style="background-color: ${favourite.color}">
                    <img src="${favourite.image}">
                    <div class="favourites-container-info">
                        <p class="favourite-title__id">#${favourite.id.toString().padStart(3, '0')}</p>
                        <p class="favourite-title__name">${capitalName}</p>
                        <p class="favourite-title__type">Type: ${favourite.type}</p> 
                    </div>
                </div>
        </a>
    `;

    elements.favourites.insertAdjacentHTML('afterbegin', markup);

};

export const removeFavourite = id => {
    const el = document.querySelector(`.favourites-container__likes[href*="${id}"]`);
    if (el) el.parentElement.removeChild(el); // if this an element, remove it
};