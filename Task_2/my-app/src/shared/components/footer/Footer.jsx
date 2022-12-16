import { NavLink } from 'react-router-dom';
import './Footer.css';

export const Footer = () => (
  <>
    <section className="footer">
      <div className="footer__content-wrapper bg-w-100">
        <div className="footer__content">
          <div className="footer__content__item">
            <div className="footer__content__item__logo">
              <a
                href="../../../pages">
                <img
                  src="/assets/images/logo.svg"
                  alt="{Finsweet"/>
              </a>
            </div>

            <div className="footer__content__item__content label-2">
              We are always open to discuss your project and improve your online presence.
            </div>
          </div>

          <div className="footer__content__item">
            <h2 className="footer__content__item__heading">
              Lets Talk!
            </h2>

            <div className="footer__content__item__content body-1">
              We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
            </div>

            <div className="footer__content__item__social-media">
              <a
                className="footer__content__item__social-media__item"
                href="src/shared/components"
                onClick={e => e.preventDefault()}>
                <img
                  src="/assets/images/social-media/facebook.svg"
                  alt="facebook"/>
              </a>

              <a
                className="footer__content__item__social-media__item"
                href="src/shared/components"
                onClick={e => e.preventDefault()}>
                <img
                  src="/assets/images/social-media/twitter.svg"
                  alt="twitter"/>
              </a>

              <a
                className="footer__content__item__social-media__item"
                href="src/shared/components"
                onClick={e => e.preventDefault()}>
                <img
                  src="/assets/images/social-media/instagram.svg"
                  alt="instagram"/>
              </a>

              <a
                className="footer__content__item__social-media__item"
                href="src/shared/components"
                onClick={e => e.preventDefault()}>
                <img
                  src="/assets/images/social-media/linkedin.svg"
                  alt="linkedin"/>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__contact-info">
          <div className="footer__contact-info__item">
            <div className="footer__contact-info__item__heading label-1">
              Email me at
            </div>

            <a
              className="footer__contact-info__item__content body-1"
              href="mailto: contact@website.com">
              contact@website.com
            </a>
          </div>

          <div className="footer__contact-info__item">
            <div className="footer__contact-info__item__heading label-1">
              Call us
            </div>

            <a
              className="footer__contact-info__item__content body-1"
              href="tel:0927627728525">
              0927 6277 28525
            </a>
          </div>
        </div>
      </div>

      <div className="footer__links-wrapper">
        <div className="body-2">
          Copyright 2022, Finsweet.com
        </div>

        <div className="footer__links">
          <NavLink
            className="footer__links__item body-2"
            to="/">
            Home
          </NavLink>

          <NavLink
            className="footer__links__item body-2"
            to="pricing">
            Pricing
          </NavLink>

          <NavLink
            className="footer__links__item body-2"
            to="contact-us">
            Contact us
          </NavLink>
        </div>
      </div>
    </section>
  </>
);
