import React from "react";
import Inventories from "../card/inventories";
import UserChart from "../Composable/userchat";
import Inventorychat from "../Composable/inventory";
import User from "../Composable/user";
import Container from "../container/container";

function Page() {
  return (
    <div>
      <Container>
        <div className="w-full h-full px-2  sm:px-6 bg-white pt-4 sm:pt-16">
          <div className=" mb-10 grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-10">
            <Inventories title="Total Sales" subtitle="$2,456" />
            <Inventories title="Total Users" subtitle="700" />
            <Inventories title="Total videos" subtitle="700" />
            <Inventories title="Total products" subtitle="456" />
          </div>

          <div className="font-bold text-gray-800 text-xl">User Report</div>
          <UserChart />

          <div className="grid md:grid-cols-2 gap-6 mt-5">
            <div>
              <div className="font-bold text-gray-800 text-xl">PERFORMANCE</div>
              <Inventorychat />
            </div>

            <div className="inventory p-4">
              <h1 className="font-bold text-xl">
                Percentage increase in users
              </h1>
              <User />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
