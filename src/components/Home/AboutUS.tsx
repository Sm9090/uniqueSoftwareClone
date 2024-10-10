import projects from "../../assets/projectscount.png";
import clients from "../../assets/public-relation.png.webp";
import countries from "../../assets/countries.png.webp";
import experience from "../../assets/experience.png.webp";
import { services } from "../About";

function AboutUS() {
  return (
    <div className="px-[5%]  mx-auto max-w-[1240px] lg:max-w-[1024px] py-[50px]">
      <div className="my-[50px] max-w-[1000px] mx-auto px-[5%]">
        <div className="flex justify-center md:flex-col md:items-center md:gap-[0.9rem] ">
          <div className="w-[223px] m-2 md:w-auto md:mb-[20px]">
            <div className="w-[140px] md:w-auto relative">
              <div className="absolute top-[-42px] right-[-42px] md:right-[27px]   ">
                <img src={projects} alt="projects count" />
              </div>
              <h1 className="text-[#EC5728] font-exo text-[35px] lg:text-[40px] font-semibold leading-[1] text-right md:text-center">
                100+
              </h1>
              <h1 className="text-[#4895D1] font-cairo text-[25px]  font-black leading-[31px] text-left md:text-center">
                Projects Completed
              </h1>
            </div>
          </div>
          <div className="w-[223px] m-2 md:w-auto md:mb-[20px]">
            <div className="relative w-[140px] md:w-auto">
              <div className="absolute top-[-42px] right-[-42px] md:right-[27px]  ">
                <img src={experience} alt="Experince" />
              </div>
              <h1 className="text-[#EC5728] font-exo text-[35px] lg:text-[40px] font-semibold leading-[1] text-right md:text-center">
                12+
              </h1>
              <h1 className="text-[#4895D1] font-cairo text-[25px] font-black leading-[31px] text-left md:text-center">
                Years of Experience
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative w-[223px] m-2 md:w-auto md:mb-[20px]">
            <div className="absolute top-[-38px] right-[38px] md:right-0">
              <img src={clients} alt="Our Clients" />
            </div>
            <h1 className="text-[#EC5728] font-exo text-[35px] lg:text-[40px] font-semibold leading-[1]">
              500+
            </h1>
            <h1 className="text-[#4895D1] font-cairo text-[25px] font-black leading-[31px]">
              Global clients
            </h1>
          </div>
          <div className="flex flex-col items-center relative w-[223px] m-2 md:w-auto md:mb-[20px]">
            <div className="absolute top-[-38px] right-[38px] md:right-[22px]">
              <img src={countries} alt="Countries" />
            </div>
            <h1 className="text-[#EC5728] font-exo text-[35px] lg:text-[40px] font-semibold leading-[1]">
              30
            </h1>
            <h1 className="text-[#4895D1] font-cairo text-[25px] font-black leading-[31px]">
              Countries Served
            </h1>
          </div>
        </div>
      </div>
      <div className="pb-[50px]">
        <p className="text-[18px] font-cairo text-[#677294] font-normal leading-[1.6em] text-center">
          Custom software development is the key to accelerating your business
          growth in the digital world. With our extensive experience, we deliver
          efficient, competitive business software solutions that set you apart.
          As a leading software development agency, we ensure a user-centric
          design process followed by a value-driven development strategy. Our
          passion for excellence goes beyond numbers—we bring unparalleled
          enthusiasm to every project.​
        </p>
      </div>
      <div className="mb-[20px]">
        <h2 className="text-[#4696D1] text-[28px] text-center font-exo leading-[1] font-bold">
          Custom Software Development Services
        </h2>
      </div>
      <div className="">
        <p className="text-[18px] font-cairo text-[#677294] font-normal leading-[1.6em] text-center">
          ​With decades of experience, we empower effective business management
          and drive efficient business development. Every{" "}
          <a href="#" className="text-[#4696d1]">
            {" "}
            custom software development service{" "}
          </a>{" "}
          we offer is a testament to our unwavering commitment to adding value.​{" "}
        </p>
        <div className="mt-[60px] flex flex-col ">
          {services.map((service, index) => (
            <div
              key={index}
              className=" flex justify-center px-[5%] md:flex-wrap"
            >
              {service.map((service, index) => (
                <div
                  key={index}
                  className={`mx-[20px] md:mx-0 md:mb-[10px] p-[10px] flex flex-col items-center justify-start ${
                    index === 2 && "ml-0 "
                  }`}
                >
                  <div className="">
                    <img src={service.img} alt="" />
                  </div>
                  <div className={`my-[20px] `}>
                    <h1 className="text-[#4696D1] leading-[30px] text-[26px] lg:text-[20px] font-exo font-bold text-center whitespace-pre-line">
                      {service.title}
                    </h1>
                  </div>
                  <div
                    className={`${
                      index === 2
                        ? "w-[282px] lg:w-auto"
                        : "w-[262px] lg:w-auto"
                    }`}
                  >
                    <p className="text-[18px] font-cairo text-[#677294] font-normal leading-[1.6em] text-center">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
