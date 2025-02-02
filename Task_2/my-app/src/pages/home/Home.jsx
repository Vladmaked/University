import './Home.css';

export const Home = () => (
  <>
    <div className="home-hero bg-w-100">
      <div className="home-hero__body">
        <div className="home-hero__heading-wrapper">
          <h1 className="home-hero__heading">
            Building stellar websites for early startups
          </h1>

          <div className="body-2 home-hero__subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </div>

          <div className="home-hero__heading-buttons">
            <button className="rounded-button yellow-button home-hero__heading-button">
              View our work
            </button>

            <button className="white-text label-2 home-hero__heading-text-button">
              View Pricing
              <svg
                className="ml-2"
                width="25"
                height="12">
                <use xlinkHref="/assets/images/icons/right-arrow.svg#right-arrow-icon"></use>
              </svg>
            </button>
          </div>
        </div>

        <div className="home-hero__illustration-wrapper">
          <img
            className="home-hero__illustration"
            src="/assets/images/header-illustration.svg"
            alt="illustration"/>
        </div>
      </div>
    </div>

    <section className="how-it-work bg-w-100">
      <div className="how-it-work__heading-wrapper">
        <h2 className="how-it-work__heading">
          How we work
        </h2>

        <div className="how-it-work__subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </div>

        <button className="label-1 how-it-work__heading-text-button">
          Get in touch with us
          <svg
            className="ml-2"
            width="25"
            height="12">
            <use xlinkHref="assets/images/icons/right-arrow.svg#right-arrow-icon"></use>
          </svg>
        </button>
      </div>

      <div className="how-it-work__cards">
        <div className="how-it-work__card">
          <div className="how-it-work__card-pointer label-1">
            01
          </div>

          <h5 className="how-it-work__card-heading">
            Strategy
          </h5>

          <div className="how-it-work__card-subheading body-1">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
          </div>
        </div>

        <div className="how-it-work__card">
          <div className="how-it-work__card-pointer label-1">
            02
          </div>

          <h5 className="how-it-work__card-heading">
            Wireframing
          </h5>

          <div className="how-it-work__card-subheading body-1">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
          </div>
        </div>

        <div className="how-it-work__card">
          <div className="how-it-work__card-pointer label-1">
            03
          </div>

          <h5 className="how-it-work__card-heading">
            Design
          </h5>

          <div className="how-it-work__card-subheading body-1">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
          </div>
        </div>

        <div className="how-it-work__card">
          <div className="how-it-work__card-pointer label-1">
            04
          </div>

          <h5 className="how-it-work__card-heading">
            Development
          </h5>

          <div className="how-it-work__card-subheading body-1">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
          </div>
        </div>
      </div>
    </section>

    <section className="our-work">
      <div className="our-work__heading-wrapper">
        <h2 className="our-work__heading">
          View our projects
        </h2>

        <button className="label-2 our-work__heading-text-button">
          View More
          <svg
            className="ml-2"
            width="25"
            height="12">
            <use xlinkHref="assets/images/icons/right-arrow.svg#right-arrow-icon"></use>
          </svg>
        </button>
      </div>

      <div className="our-work__cards-wrapper">
        <div className="our-work__big-card-wrapper">
          <img
            className="our-work__big-card-img"
            src="/assets/images/our-work-big-card.svg"
            alt="our-work-big-card"/>

          <div className="our-work__big-card-content">
            <div className="our-work__big-card-content__heading">
              Workhub office Webflow Webflow Design
            </div>

            <div className="our-work__big-card-content__subheading body-2">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            </div>

            <button className="our-work__big-card-content__text-button body-2">
              View project
              <svg
                className="ml-2"
                width="25"
                height="12">
                <use xlinkHref="assets/images/icons/right-arrow.svg#right-arrow-icon"></use>
              </svg>
            </button>
          </div>
        </div>

        <div className="our-work__small-cards-wrapper">
          <div className="our-work__small-card-with-hover-overlay">
            <img
              className="our-work__small-card-img"
              src="/assets/images/our-work-first-small-card.svg"
              alt="our-work-first-small-card"/>

            <div className="our-work__small-card-hover-overlay">
              <div className="our-work__small-card-hover-overlay__heading">
                Unisaas Website Design
              </div>

              <button className="our-work__small-card-hover-overlay__text-button body-2">
                View portfolio
                <svg
                  className="ml-2"
                  width="25"
                  height="12">
                  <use xlinkHref="/assets/images/icons/right-arrow.svg#right-arrow-icon"></use>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <img
              className="our-work__small-card-img"
              src="/assets/images/our-work-second-small-card.svg"
              alt="our-work-second-small-card"/></div>
        </div>
      </div>
    </section>

    <section className="features bg-w-100">
      <div className="features__heading-wrapper">
        <div className="features__subheading label-2">
          Features
        </div>

        <h2 className="features__heading">
          Design that solves problems, one product at a time
        </h2>
      </div>

      <div className="features__card-wrapper">
        <div className="features__card">
          <div className="features__card__icon">
            <svg
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 10.875A5.437 5.437 0 1 0 16 0a5.437 5.437 0 0 0 0 10.875Zm11 0A3.437 3.437 0 1 0 27 4a3.437 3.437 0 0 0 0 6.875Zm-22 0A3.437 3.437 0 1 0 5 4a3.437 3.437 0 0 0 0 6.875Zm3.387 3.086C7.034 12.853 5.808 13 4.244 13 1.904 13 0 14.892 0 17.218v6.825c0 1.01.824 1.832 1.838 1.832 4.377 0 3.85.079 3.85-.19 0-4.836-.573-8.383 2.699-11.723Z"
                fill="#2405F2"/>
              <path
                d="M17.488 13.025c-2.732-.228-5.108.002-7.157 1.694-3.428 2.746-2.768 6.444-2.768 10.967 0 1.197.973 2.189 2.188 2.189 13.193 0 13.718.425 14.5-1.307.257-.586.186-.4.186-6.004 0-4.452-3.854-7.54-6.949-7.54ZM27.756 13c-1.573 0-2.791-.145-4.143.962 3.248 3.316 2.7 6.621 2.7 11.724 0 .27-.438.19 3.783.19 1.05 0 1.904-.851 1.904-1.897v-6.76C32 14.892 30.096 13 27.756 13Z"
                fill="#2405F2"/>
            </svg>
          </div>

          <h6 className="features__card__heading">
            Uses Client First
          </h6>

          <div className="features__card__content">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
            aliquam sed mi.
          </div>
        </div>

        <div className="features__card">
          <div className="features__card__icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 0C7.212 0 0 7.212 0 16s7.212 16 16 16 16-7.212 16-16S24.788 0 16 0Zm-1.936 23.277-7.007-7.006L9.71 13.62l4.477 4.478 8.99-8.172L25.7 12.7 14.065 23.278Z"
                fill="#2405F2"/>
            </svg>
          </div>

          <h6 className="features__card__heading">
            Two Free Revision Round
          </h6>

          <div className="features__card__content">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
            aliquam sed mi.
          </div>
        </div>

        <div className="features__card">
          <div className="features__card__icon">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g
                clipPath="url(#clip0_757_976)"
                fill="#2405F2">
                <path
                  d="m2.642 9.893 7.25-7.25-1.208-1.21a5.132 5.132 0 0 0-7.25.001A5.092 5.092 0 0 0-.069 5.059c0 1.37.533 2.657 1.501 3.625l1.209 1.209Zm1.45 1.45 2.9-2.9 4.156 4.155-2.9 2.9-4.156-4.155Zm4.35-4.351 2.9-2.9 4.156 4.155-2.9 2.9-4.156-4.155Zm16.522 23.772-.478.478 9.04 3.616a1.022 1.022 0 0 0 1.106-.227c.29-.29.379-.725.227-1.106l-3.616-9.04-6.279 6.279Zm-5.599-4.149 2.9-2.9 3.424 3.423-2.9 2.9-3.424-3.423Zm4.35-4.349 2.9-2.9 3.424 3.423-2.9 2.9-3.424-3.423ZM8.806 27.508c-.4.4-.4 1.05 0 1.45l2.659 2.658-3.016 3.015c-.4.4-1.05.4-1.45 0L.232 27.864c-.4-.4-.4-1.05 0-1.45L26.414.232c.4-.4 1.05-.4 1.45 0l6.767 6.767a1.022 1.022 0 0 1 0 1.45l-3.015 3.016-3.625-3.626a1.025 1.025 0 1 0-1.45 1.45l3.625 3.626-2.29 2.29-2.659-2.659a1.026 1.026 0 0 0-1.45 1.45l2.659 2.659-2.29 2.29-3.626-3.625a1.026 1.026 0 0 0-1.45 1.45l3.625 3.625-2.29 2.29-2.658-2.658a1.025 1.025 0 0 0-1.45 1.45l2.658 2.658-2.29 2.29L13.03 22.8a1.026 1.026 0 0 0-1.45 1.45l3.625 3.626-2.29 2.29-2.659-2.659c-.4-.4-1.05-.4-1.45 0Z"/>
              </g>
              <defs>
                <clipPath id="clip0_757_976">
                  <path
                    fill="#fff"
                    d="M0 0h35v35H0z"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <h6 className="features__card__heading">
            Template Customization
          </h6>

          <div className="features__card__content">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
            aliquam sed mi.
          </div>
        </div>

        <div className="features__card">
          <div className="features__card__icon">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g
                clipPath="url(#clip0_757_984)"
                fill="#2405F2">
                <path d="M35 23.686c0-4.343-2.492-8.22-6.224-10.105-.116 8.328-6.867 15.08-15.195 15.195C15.467 32.508 19.343 35 23.686 35a11.28 11.28 0 0 0 5.757-1.572l5.507 1.523-1.523-5.507a11.273 11.273 0 0 0 1.572-5.757Z"/>
                <path d="M26.729 13.364C26.729 5.995 20.733 0 13.364 0S0 5.995 0 13.364c0 2.402.64 4.74 1.853 6.793L.05 26.68l6.522-1.804a13.323 13.323 0 0 0 6.793 1.854c7.37 0 13.364-5.995 13.364-13.365Zm-15.415-3.11H9.262a4.106 4.106 0 0 1 4.101-4.102 4.106 4.106 0 0 1 4.102 4.102 4.112 4.112 0 0 1-1.334 3.027l-1.742 1.594v1.6h-2.051v-2.503l2.409-2.204a2.03 2.03 0 0 0 .667-1.514 2.052 2.052 0 0 0-4.102 0Zm1.025 8.271h2.05v2.051h-2.05v-2.05Z"/>
              </g>
              <defs>
                <clipPath id="clip0_757_984">
                  <path
                    fill="#fff"
                    d="M0 0h35v35H0z"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <h6 className="features__card__heading">
            24/7 Support
          </h6>

          <div className="features__card__content">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
            aliquam sed mi.
          </div>
        </div>

        <div className="features__card">
          <div className="features__card__icon">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_757_919)">
                <path
                  d="m29.304 9.944 2.352-2.35c.57-.57.57-1.492 0-2.063a1.457 1.457 0 0 0-2.062 0l-2.352 2.351a15.24 15.24 0 0 0-8.284-3.433V2.917h2.917a1.458 1.458 0 1 0 0-2.917h-8.75a1.458 1.458 0 1 0 0 2.917h2.917v1.532C8.28 5.186 2.187 11.737 2.187 19.688 2.188 28.13 9.058 35 17.5 35c8.444 0 15.313-6.869 15.313-15.313 0-3.698-1.319-7.093-3.51-9.743Zm-10.346 9.743a1.458 1.458 0 1 1-2.916 0v-8.02a1.458 1.458 0 1 1 2.916 0v8.02Z"
                  fill="#2405F2"/>
              </g>
              <defs>
                <clipPath id="clip0_757_919">
                  <path
                    fill="#fff"
                    d="M0 0h35v35H0z"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <h6 className="features__card__heading">
            Quick Delivery
          </h6>

          <div className="features__card__content">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
            aliquam sed mi.
          </div>
        </div>

        <div className="features__card">
          <div className="features__card__icon">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.866 5.805a2.97 2.97 0 0 0-.875-2.112L22.172.875A3.055 3.055 0 0 0 20.041 0h-.17v5.977h5.995v-.172Z"
                fill="#2405F2"/>
              <path
                d="M18.191 20.555c.19-.579.524-1.117.957-1.554l6.745-6.717V7.969h-7c-.55 0-.963-.446-.963-.996V0H2.988A2.992 2.992 0 0 0 0 2.988v28.024A2.992 2.992 0 0 0 2.988 34h19.89c1.648 0 3.015-1.34 3.015-2.988v-7.434l-1.095 1.067a3.96 3.96 0 0 1-1.549.956l-3.167 1.057-.482.026a2.5 2.5 0 0 1-2.022-1.037 2.498 2.498 0 0 1-.338-2.244l.951-2.848ZM4.981 17.93h9.928a.996.996 0 1 1 0 1.992H4.98a.996.996 0 1 1 0-1.992Zm-.997-2.989c0-.55.446-.996.996-.996h9.93a.996.996 0 1 1 0 1.992H4.98a.996.996 0 0 1-.996-.996Zm0 7.97c0-.551.446-.997.996-.997h9.93a.996.996 0 1 1 0 1.992H4.98a.995.995 0 0 1-.996-.996Zm14.91 4.98a.995.995 0 1 1 0 1.992h-5.977a.995.995 0 1 1 0-1.992h5.976ZM4.98 11.953a.996.996 0 1 1 0-1.992h13.913a.996.996 0 1 1 0 1.992H4.98Z"
                fill="#2405F2"/>
              <path
                d="m19.996 21.436-.867 2.6c-.13.39.24.76.63.63l2.599-.867-2.362-2.363Zm7.736-8.201-6.56 6.56 2.83 2.83 6.559-6.56-2.829-2.83Zm5.683-2.857c-.35-.352-.866-.554-1.413-.554-.546 0-1.062.202-1.414.555l-1.447 1.447 2.828 2.829 1.448-1.448a2.005 2.005 0 0 0-.002-2.83Z"
                fill="#2405F2"/>
            </svg>
          </div>

          <h6 className="features__card__heading">
            Hands-on approach
          </h6>

          <div className="features__card__content">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
            aliquam sed mi.
          </div>
        </div>
      </div>
    </section>

    <section className="blog">
      <h2 className="blog__heading">Our blog</h2>

      <div className="blog__card-wrapper">
        <div className="blog__card">
          <img
            className="blog__card__img"
            src="/assets/images/blog-card-1.svg"
            alt="blog-card-1"/>

          <div className="blog__card__date label-2">
            19 Jan 2022
          </div>

          <h6 className="blog__card__heading">
            How one Webflow user grew his single person consultancy from $0-100K in 14 months
          </h6>

          <div className="blog__card__content body-1">
            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
          </div>

          <button className="blog__card__button label-2">
            Read More
            <svg
              className="ml-2"
              width="25"
              height="12">
              <use xlinkHref="assets/images/icons/right-arrow.svg#right-arrow-icon"></use>
            </svg>
          </button>
        </div>

        <div className="blog__card">
          <img
            className="blog__card__img"
            src="/assets/images/blog-card-2.svg"
            alt="blog-card-1"/>

          <div className="blog__card__date label-2">
            19 Jan 2022
          </div>

          <h6 className="blog__card__heading">
            How one Webflow user grew his single person consultancy from $0-100K in 14 months
          </h6>

          <div className="blog__card__content body-1">
            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
          </div>

          <button className="blog__card__button label-2">
            Read More
            <svg
              className="ml-2"
              width="25"
              height="12">
              <use xlinkHref="assets/images/icons/right-arrow.svg#right-arrow-icon"></use>
            </svg>
          </button>
        </div>

        <div className="blog__card">
          <img
            className="blog__card__img"
            src="/assets/images/blog-card-3.svg"
            alt="blog-card-1"/>

          <div className="blog__card__date label-2">
            19 Jan 2022
          </div>

          <h6 className="blog__card__heading">
            How one Webflow user grew his single person consultancy from $0-100K in 14 months
          </h6>

          <div className="blog__card__content body-1">
            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
          </div>

          <button className="blog__card__button label-2">
            Read More
            <svg
              className="ml-2"
              width="25"
              height="12">
              <use xlinkHref="assets/images/icons/right-arrow.svg#right-arrow-icon"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </>
);
