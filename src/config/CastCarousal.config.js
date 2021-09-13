
        const settings = {
            infinite: true,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            InitialSlide: 0,
            responsive: [
              {
                breakpoint:1024,
                settings:{
                  slidesToScroll:4,
                  slidesToShow:4
                }
              },
              {
                breakpoint:600,
                settings:{
                  slidesToScroll:3,
                  slidesToShow:3
                }
              },
              {
                breakpoint:400,
                settings:{
                  slidesToScroll:2,
                  slidesToShow:2
                }
              },
            ]
          };


          export default settings;