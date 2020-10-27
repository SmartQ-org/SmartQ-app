import React from "react";
import "./FeaturesPage.scss";
import queue from "../../assets/queue.svg";
import shopping from "../../assets/shopping.svg";

export default function featuresPage() {
  return (
    <div className="features">
      <section className="features__section">
        <h2 className="features__title">Users</h2>
        <div className="features__content">
          <img className="features__img" src={queue} alt="people lining up" />
          <p className="features__text">
            Users can avoid having to wait in line by locating the store on
            SmartQ and our virtual queue will let them know exactly when to show
            up and check out!
          </p>
          <h3 className="features__label">Features</h3>
          <ul className="features__list">
            <li className="features__list-item">
              Avoid lineups for your favorite stores and restaurants.
            </li>
            <li className="features__list-item">
              Lets you know exactly what time to show up at the store to enter
              immediately.
            </li>
          </ul>
          <button type="button" className="features__button btn btn-primary">
            User Sign Up
          </button>
        </div>
      </section>
      <div className="features__divider" />
      <section className="features__section">
        <h2 className="features__title">Store Managers</h2>
        <div className="features__content">
          <img className="features__img" src={shopping} alt="store page" />
          <p className="features__text">
            Businesses who want to optimize their service can sign up with
            SmartQ and the customers will have an improved store experience!
          </p>
          <h3 className="features__label">Features</h3>
          <ul className="features__list">
            <li className="features__list-item">
              Gives an overview to the store's activity.
            </li>
            <li className="features__list-item">
              Improves efficiency for store management.
            </li>
          </ul>
          <button type="button" className="features__button btn btn-danger">
            Manager Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}
