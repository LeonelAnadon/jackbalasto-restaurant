import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./testimonials.module.scss";
import { Pagination, Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import useFetchReviews from "../../hooks/useFetchReviews";
import TestimonialNotFound from "../Errors/TestimonialNotFound";
import Stars from "../Stars/Stars";

const Testimonials: React.FC = () => {
  const { data, error } = useFetchReviews();

  React.useEffect(() => {
    console.log({ data });
  }, [data]);

  if (error) {
    return <TestimonialNotFound error={error?.message} />;
  }

  if (!data) {
    return (
      <div style={{ color: "white", textAlign: "center" }}>
        Cargando datos...
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <div>
        <h2>Nuestras reseñas</h2>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Pagination, Scrollbar, Autoplay, EffectFade]}
            // pagination
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 2000 }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
          >
            {data.map((review) => (
              <SwiperSlide key={review.id}>
                <div className={styles.slide}>
                  <b>{review.name}</b>
                  <Stars howMany={review.stars} />
                  <span></span>
                  <p>{review.msg}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
