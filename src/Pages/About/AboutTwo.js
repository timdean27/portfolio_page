import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import "../../Share/Style.css";
// import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import HomeCard from "../../Share/HomeCard";
import PageTitle from "../../Share/PageTitle";

const AboutTwo = () => {
  const { local, experienceArray } = UseData();

  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 className="after-effect after:left-52">About Me</h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <HomeCard />
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="text-gray-lite dark:text-color-910 leading-7">
                    I'm Timothy Dean, an innovative Software Engineer and Full
                    Stack Developer from East Northport, NY. With a strong
                    background in database administration and QA, I excel in
                    designing, developing, and implementing impactful products
                    that drive organizational growth.
                  </p>
                  <p className="text-gray-lite dark:text-color-910 leading-7">
                    I have extensive experience in technologies such as React,
                    Python, and PostgreSQL and have consistently taken on
                    leadership roles in code review and software testing. My
                    ability to collaborate, solve problems, and adapt to new
                    challenges makes me a valuable asset to any development
                    team.
                  </p>
                </div>

                <div></div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
              {/* Experience information  */}

              {experienceArray.map((item) => (
                <AboutCard key={Math.random()} item={item} local={local} />
              ))}
            </div>
          </div>
          {/* service provide end */}
          {/* Slick Slider call here  */}
          {/* <div className="px-2 sm:px-5 md:px-10 lg:px-14 ">
           
            <SliderCommon />
          </div> */}

          {/* Common Footer call here */}
          <Footer bg={"#FFFF"} />
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
