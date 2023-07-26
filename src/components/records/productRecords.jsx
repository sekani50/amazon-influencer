import React from "react";
import { FiImage } from "react-icons/fi";
import RecordWidget from "../recordwidget/recordWidget";
import { useEffect, useState } from "react";
import { getProducts } from "../../Utils/api";
import { useSelector } from "react-redux";
import { LoaderIcon } from 'lucide-react'
import empty from "../../assets/png/emptyorder.png";
const ProductRecords = ({ tab }) => {
  const { token } = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const [data, setdata] = useState([]);

  const [totalItems, setTotalItems] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchVideo() {
      setloading(true);
      await getProducts(token, { page })
        .then((res) => {
          console.log(res.data);
          setloading(false);
          const { items, totalItems } = res.data;
          setdata(items);
          const totalPage = Math.ceil(totalItems / 10);
          const pageNumbers = [...Array(totalPage).keys()].map(
            (page) => page + 1
          );

          setTotalItems(pageNumbers);
        })
        .catch((err) => {
          setloading(false);
          console.log(err);
        });
    }

    fetchVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  /**
   * 
   
   */
  return (
    <>
    <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
      <div className="w-full min-w-[1000px] space-y-3">
        <div className="w-full items-center bg-white px-3 py-3 sm:py-5 grid grid-cols-9 gap-2 text-gray-500">
          <div className="flex space-x-2 items-center col-span-3">
            <FiImage className="text-[#005ABC] text-[25px]" />
            <span>Name</span>
          </div>
          <div className="">Total Ordered</div>
          <div className="">Total Shipped</div>
          <div>Price</div>
          <div>Commission</div>
          <div>Revenue</div>
        </div>
        {loading && (
          <div className="w-full items-center justify-center flex h-[300px]">
            <div className="justify-center flex w-fit h-fit items-center">
              <LoaderIcon className="w-10 animate-spin text-[#005ABC]" />
            </div>
          </div>
        )}
        {!loading && data?.length === 0 && (
          <div className="w-full h-[300px] flex justify-center items-center">
            <span className="w-[200px] h-[200px]">
              <img className="w-full h-full" src={empty} alt="" />
            </span>
          </div>
        )}
        {!loading &&
          data?.length > 0 &&
          data?.map(
            (
              {
                name,
                price,
                revenue,
                commission_income,
                total_ordered,
                items_shipped,
              },
              idx
            ) => {
              return (
                <div key={idx}>
                  <RecordWidget
                    image={""}
                    name={name}
                    shipped={items_shipped}
                    ordered={total_ordered}
                    price={price}
                    commission={commission_income}
                    sales={revenue}
                    tab={tab}
                  />
                </div>
              );
            }
          )}
      </div>
     
    </div>
     {totalItems && (
      <div className="mt-8 w-full">
        <div className="flex justify-center space-x-1 items-center">
          {totalItems?.map((pagenumber, idx) => {
            return (
              <button
                onClick={() => {
                  setPage(pagenumber);
                }}
                key={idx}
                className={`hover:bg-foreground text-white hover:text-background w-fit rounded-lg h-[30px] px-3 ${
                  page === pagenumber ? "bg-pink-600" : "bg-[#0449a4]"
                }`}
              >
                {pagenumber}
              </button>
            );
          })}
        </div>
      </div>
    )}
    </>
  );
};

export default ProductRecords;
