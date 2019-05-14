import React, {useCallback} from 'react';
import {propTypes} from './offer-card.props';

const OfferCard = (props) => {
  const {card, onClick, onMouseEnter, onMouseLeave} = props;
  const handleMouseEnter = useCallback(() => {
    onMouseEnter(card);
  }, [card]);
  const handleMouseClick = useCallback((evt) => {
    evt.preventDefault();
    onClick(card);
  }, [card]);

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
      {!!card.mark && (
        <div className="place-card__mark">
          <span>{card.mark}</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={card.image} width="260" height="200"
            alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${card.bookmarked ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${card.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={handleMouseClick}>
          <a href={card.link}>{card.name}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = propTypes;

export {OfferCard};