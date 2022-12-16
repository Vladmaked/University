import './Contact-us.css';

export const ContactUs = () => (
  <>
    <section className="contact-us">
      <div className="contact-us__heading-wrapper">
        <h2 className="contact-us__heading">
          Contact Us
        </h2>

        <div className="contact-us__subheading body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </div>
      </div>

      <div className="form-wrapper">
        <form
          className="form"
          action="#"
          method="post">
          <div className="form__row two-column">
            <div className="form__row__item">
              <label
                htmlFor="name"
                className="form__row__label label-1">
                Name
              </label>

              <input
                id="name"
                className="form-row__input body-1"
                name="name"
                type="text"
                placeholder="Enter your name"/>
            </div>

            <div className="form__row__item">
              <label
                htmlFor="email"
                className="form__row__label label-1">
                Email
              </label>

              <input
                id="email"
                className="form-row__input body-1"
                name="email"
                type="email"
                placeholder="Enter your email"/>
            </div>
          </div>

          <div className="form__row two-column">
            <div className="form__row__item">
              <label
                htmlFor="subject-context"
                className="form__row__label label-1">
                Subject
              </label>

              <input
                id="subject-context"
                className="form-row__input body-1"
                name="subject-context"
                type="text"
                placeholder="Provide context"/>
            </div>

            <div className="form__row__item">
              <label
                htmlFor="subject-select"
                className="form__row__label label-1">
                Subject
              </label>

              <input
                id="subject-select"
                className="form-row__input body-1"
                name="subject-select"
                type="text"
                placeholder="Select Subject"/>
            </div>
          </div>

          <div className="form__row">
            <div className="form__row__item">
              <label
                htmlFor="message"
                className="form__row__label label-1">
                Message
              </label>

              <textarea
                id="message"
                className="form-row__textarea body-1"
                name="message"
                placeholder="Write your question here"
                rows="6"></textarea>
            </div>
          </div>

          <button
            className="form__button"
            type="submit"
            onClick={e => e.preventDefault()}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  </>
);
