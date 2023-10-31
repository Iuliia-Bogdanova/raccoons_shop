$(".carousel__inner")
    .slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        speed: 1000,
        cssEase: "linear"
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        if (nextSlide === 0) {
            slick.slickGoTo(slick.slideCount - 1);
        } else if (nextSlide === slick.slideCount - 1) {
            slick.slickGoTo(0);
        }
    })
    .on("afterChange", function (event, slick, currentSlide) {
        let elt = slick.$slides.get(currentSlide);
        $(".carousel__item").removeClass("active");
        $(elt).addClass("active");
    });