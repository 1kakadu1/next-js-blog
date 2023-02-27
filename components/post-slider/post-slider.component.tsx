import { PostSmall } from "../cards/post-small/post-small.component"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

const breakpoints = {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1200: {
        slidesPerView: 3,
    },
};

export const PostSlider = () => {
    return (
        <div className="main-banner header-text">
            <div className="container-fluid">
                <div className="post-slider">
                    <Swiper
                        breakpoints={breakpoints}
                        spaceBetween={10}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        speed={2000}
                        modules={[Navigation]}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <PostSmall post={{
                                title: "Convert a color image to black and white in Photoshop and share",
                                preview: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
                                date: "2020.04.34"
                            }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PostSmall post={{
                                title: "Convert a color image to black and white in Photoshop and share",
                                preview: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
                                date: "2020.04.34"
                            }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PostSmall post={{
                                title: "Convert a color image to black and white in Photoshop and share",
                                preview: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
                                date: "2020.04.34"
                            }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PostSmall post={{
                                title: "Convert a color image to black and white in Photoshop and share",
                                preview: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
                                date: "2020.04.34"
                            }} />
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </div>
    )
}