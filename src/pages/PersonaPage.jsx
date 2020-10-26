import React from "react";
import "./PersonaPage.scss";
import queue from "../assets/queue.svg";
import shopping from "../assets/shopping.svg";

export default function PersonaPage() {
  return (
    <div className="persona">
      <section className="persona__section">
        <h2 className="persona__title">Users</h2>
        <div className="persona__content">
          <img className="persona__img" src={queue} alt="people lining up" />
          <p className="persona__text">
            Users can avoid having to wait in line by locating the store on
            SmartQ and our virtual queue will let them know exactly when to show
            up and check out!
          </p>
          <h3 className="persona__label">Features</h3>
          <ul className="persona__list">
            <li className="persona__list-item">
              Avoid lineups for your favorite stores and restaurants.
            </li>
            <li className="persona__list-item">
              Lets you know exactly what time to show up at the store to enter
              immediately.
            </li>
          </ul>
          <button type="button" className="persona__button btn btn-primary">
            User Sign Up
          </button>
        </div>
      </section>
      <div className="persona__divider" />
      <section className="persona__section">
        <h2 className="persona__title">Store Managers</h2>
        <div className="persona__content">
          <img className="persona__img" src={shopping} alt="store page" />
          <p className="persona__text">
            Businesses who want to optimize their service can sign up with
            SmartQ and the customers will have an improved store experience!
          </p>
          <h3 className="persona__label">Features</h3>
          <ul className="persona__list">
            <li className="persona__list-item">
              Gives an overview to the store's activity.
            </li>
            <li className="persona__list-item">
              Improves efficiency for store management.
            </li>
          </ul>
          <button type="button" className="persona__button btn btn-danger">
            Manager Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}
