export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 100,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};

export const updateFavourites = (id, favourites) => {
  if (favourites.includes(id)) {
    return favourites.filter((propertyId) => propertyId !== id);
  } else {
    return [...favourites, id];
  }
};

export const checkFavourites = (id, favourites) => {
  return favourites?.includes(id) ? "#fa3e5f" : "grey";
};

export const validateString = (value) => {
  return value?.length < 3 || value === null
    ? "Must have atleast 3 characters"
    : null;
};