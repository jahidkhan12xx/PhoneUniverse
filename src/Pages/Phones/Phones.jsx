import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Phones = () => {
  const [phone, setPhone] = useState("");
  const [os, setOs] = useState("");
  const [ram, setRam] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [processor, setProcessor] = useState("");

  const axios = useAxios();
  const getPhones = async () => {
    const res = await axios.get(
      `/phones?ram=${ram}&type=${type}&os_type=${os}&price=${price}&brand=${phone}&processor_type=${processor}`
    );
    return res;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["phones", ram, type, os, price, phone, processor],
    queryFn: getPhones,
  });
  const handleFilterChange = () => {
    refetch();
  };

  if (isLoading) {
    return <h2>Loading.........</h2>;
  }

  console.log(data?.data);

  console.log(phone, os, ram, type, price);

  return (
    <div data-aos="zoom-out"  className="   pt-20">
      <div className=" md:flex ">
        <div className=" w-[25vw] my-14">
          <h2 className=" text-xl md:text-3xl font-semibold font-secondary text-center ">
            Filter
          </h2>
          <ul className=" menu space-y-5 text-xl md:text-3xl font-semibold font-secondary ">
            <li>
              <select
                onChange={(e) => {
                  setPhone(e.target.value);
                  handleFilterChange();
                }}
                defaultValue={""}
                name="name"
                id=""
              >
                <option disabled value="">
                  Name
                </option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="moto">Motorola</option>
                <option value="oneplus">OnePlus</option>
                <option value="google">Pixel</option>
              </select>
            </li>
            <li>
              <select
                onChange={(e) => {
                  setOs(e.target.value);
                  handleFilterChange();
                }}
                defaultValue={""}
                name="os"
                id=""
              >
                <option disabled value="">
                  OS
                </option>
                <option value="android">Android</option>
                <option value="ios">iOS</option>
                <option value="oxygenOs">OxygenOS</option>
              </select>
            </li>
            <li>
              <select
                onChange={(e) => {
                  setRam(e.target.value);
                  handleFilterChange();
                }}
                defaultValue={""}
                name="ram"
                id=""
              >
                <option disabled value="">
                  RAM
                </option>
                <option value="2">2GB</option>
                <option value="2">3GB</option>
                <option value="4">4GB</option>
                <option value="6">6GB</option>
                <option value="8">8GB</option>
                <option value="12">12GB</option>
              </select>
            </li>
            <li>
              <select
                onChange={(e) => {
                  setType(e.target.value);
                  handleFilterChange();
                }}
                defaultValue={""}
                name="type"
                id=""
              >
                <option disabled value="">
                  Type
                </option>
                <option value="Budget">Budget</option>
                <option value="Foldable">Foldable</option>
                <option value="Compact">Compact</option>
                <option value="Flagship">Flagship</option>
              </select>
            </li>
            <li>
              <select
                onChange={(e) => {
                  setPrice(e.target.value);
                  handleFilterChange();
                }}
                defaultValue={""}
                name="price"
                id=""
              >
                <option disabled value="">
                  Price Range
                </option>
                <option value="200"> 0 - 200 $ </option>
                <option value="400"> 0 - 400 $</option>
                <option value="600"> 0 - 600 $</option>
                <option value="800"> 0 - 800 $</option>
                <option value="1500"> 0 - 1500 $</option>
              </select>
            </li>
            <li>
              <select
                onChange={(e) => {
                  setProcessor(e.target.value);
                  handleFilterChange();
                }}
                defaultValue={""}
                name="processor"
                id=""
              >
                <option disabled value="">
                  Processor
                </option>
                <option value="mediatek">MediaTek</option>
                <option value="bionic">Bionic</option>
                <option value="snapdragon">Snapdragon</option>
                <option value="exynos">Exynos</option>
              </select>
            </li>
          </ul>
        </div>
        <div className=" flex-1 grid grid-cols-1 md:grid-cols-3 gap-5  ">
          {data?.data?.map((items) => (
            <div data-aos="fade-up" data-aos-duration="3000" key={items._id} className=" ">
              <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                  <img
                    src={items?.img}
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {items?.name}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {items.price}
                    </p>
                  </div>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {items.os}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phones;
