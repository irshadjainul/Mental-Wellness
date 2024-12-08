import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import serviceImg1 from "../assets/images/service1.webp";
import serviceImg2 from "../assets/images/service2.webp";
import serviceImg3 from "../assets/images/service3.webp";
import serviceImg4 from "../assets/images/service4.webp";

const Services = () => {
  return (
    <div className="bg-[#f7f8fc]" id="service">
      <div className="pt-28 px-4 container mx-auto">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Service Category */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <TabList className="flex flex-wrap justify-between cursor-pointer items-center md:gap-8 gap-4">
              <Tab>Couple Counselling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Couple Counselling
                  </h3>
                  <p className="mb-8">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500S, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Realationship Dynamics</li>
                    <li>Understanding Realationship Dynamics</li>
                    <li>Understanding Realationship Dynamics</li>
                  </ul>
                </div>
                <div className=" md:w-1/2">
                  <img
                    src={serviceImg1}
                    alt=""
                    className=" w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                  Parenting Skills
                  </h3>
                  <p className="mb-8">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500S, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Parenting Realationship</li>
                    <li>Understanding Parenting Realationship</li>
                    <li>Understanding Parenting Realationship</li>
                  </ul>
                </div>
                <div className=" md:w-1/2">
                  <img
                    src={serviceImg2}
                    alt=""
                    className=" w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                  Feeling Stuck
                  </h3>
                  <p className="mb-8">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500S, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Why Feeling Stuck</li>
                    <li>Understanding Why Feeling Stuck</li>
                    <li>Understanding Why Feeling Stuck</li>
                  </ul>
                </div>
                <div className=" md:w-1/2">
                  <img
                    src={serviceImg3}
                    alt=""
                    className=" w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                  Self-Confidence
                  </h3>
                  <p className="mb-8">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500S, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>How We Can Be Confident</li>
                    <li>How We Can Be Confident</li>
                    <li>How We Can Be Confident</li>
                  </ul>
                </div>
                <div className=" md:w-1/2">
                  <img
                    src={serviceImg4}
                    alt=""
                    className=" w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
