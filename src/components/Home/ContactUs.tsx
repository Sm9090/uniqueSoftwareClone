import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import dot from "../../assets/dot.png.webp";
import mackbook from "../../assets/mackbook.png.webp";
import iphonex1 from "../../assets/iphonex1-1.png.webp";
import tablet1 from "../../assets/tablet_01.png.webp";
import tablet2 from "../../assets/tablet_02.png.webp";
import tablet3 from "../../assets/tablet_03.png.webp";

function ContactUs() {
  return (
    <div className="bg-[#F5F7FB]  ">
      <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.2}>
        <div className="px-[5%]  mx-auto max-w-[1240px] py-[200px] lg:pt-[240px]  md:py-0 ">
          <div className="flex items-center relative h-full md:items-start md:pt-[100px] md:px-[16px]">
            <div className="w-[750px] lg:w-full z-10">
              <h1 className="text-[44px] 1xl:text-[35px] lg:text-[30px] md:text-[25px]  1xl:leading-[42px] md:leading-[1.3em] text-[#4696D1] leading-[60px] font-semibold font-exo mb-[20px] ">
                Leading Custom Software Development Company In The USA
              </h1>
              <p className="text-[18px] text-[#677294] leading-[1.6em] font-cairo ">
                Transform your business ideas with next-gen IT solutions.
                Partner with us to design and develop custom software that
                drives digital success. Our superb UI/UX design, custom software
                development, and managed IT services ensure you outperform the
                competition.
              </p>
              <button className="bg-[#EC5728] py-[10px] px-[39px] mt-[40px] md:mb-[30px] text-[#fff]     text-[16px] rounded-full font-exo">
                Contact Now
              </button>
            </div>
            <div className="w-[640px] relative md:hidden">
              <MouseParallaxChild
                factorX={0.4}
                factorY={0.8}
                className="absolute"
                style={{ transform: "translate(172px, -203px)" }} // Initial position
              >
                <img src={dot} alt="dot" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.7}
                factorY={0.8}
                className="absolute"
                style={{ transform: "translate(378px, -272px)" }} // Initial position
              >
                <img src={mackbook} alt="mackbook" width={350} />
              </MouseParallaxChild>
              {/* Add more images with initial positions */}
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.9}
                className="absolute"
                style={{ transform: "translate(58px, 84px)" }}
              >
                <img src={iphonex1} alt="iphonex1" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.6}
                factorY={0.6}
                className="absolute"
                style={{ transform: "translate(-160px, 167px)" }}
              >
                <img src={tablet1} alt="tablet1" width={250} />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.4}
                className="absolute"
                style={{ transform: "translate(142px, 245px)" }}
              >
                <img src={tablet2} alt="tablet2" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.8}
                factorY={0.7}
                className="absolute"
                style={{ transform: "translate(589px, -53px)" }}
              >
                <img src={tablet3} alt="tablet3" />
              </MouseParallaxChild>
            </div>
          </div>
        </div>
      </MouseParallaxContainer>
    </div>
  );
}

export default ContactUs;
