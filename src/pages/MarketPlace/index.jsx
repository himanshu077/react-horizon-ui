import Header from "@/ui/Header/Header";
import React from "react";
import NFTImage from "@/assets/NFTImage.png";
import PrimaryButton from "@/ui/Button/PrimaryButton";

const MarketPlace = () => {
  return (
    <div>
      <Header title="NFT Marketplace" />
      <div className="grid grid-cols-2 !px-4 !mt-8">
        <div className="col-span-2 ">
          <div
            className="bg-cover bg-no-repeat !py-7 !p-4 !rounded-[20px]"
            style={{
              backgroundImage: `url(${NFTImage})`,
              height: "350px",
              width: "1090px",
            }}
          >
            <h1 className="Poppins700 !text-[34px] !break-words !text-white">
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p className="!text-white Poppins500 !text-base">
              Enter in this creative world. Discover now the latest NFTs or
              start creating your own!
            </p>
            <div className="!flex !gap-12">
              <PrimaryButton title="Discover now" />
              <p className="!text-[--text-color] !text-center !py-2">
                Watch video
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default MarketPlace;
