import Header from "@/ui/Header/Header";
import React from "react";
import NFTImage from "@/assets/NFTImage.png";
import PrimaryButton from "@/ui/Button/PrimaryButton";
import MarketPlaceCard from "@/ui/MarketPlaceCard/MarketPlaceCard";
import { RecentlyAddedData, topCreatorsData, trendingNFTData } from "./data";
import TableData from "@/ui/TableData/TableData";
import SecondaryButton from "@/ui/Button/SecondaryButton";
import { Progress } from "@/components/ui/progress";
import MarketPlaceHistory from "@/ui/MarketPlaceHistory/MarketPlaceHistory";

const MarketPlace = () => {
  const Columns = [
    {
      header: "Name",
      accessorKey: "name",
      cell: (props) => {
        const src = props.cell.row.original.src;
        const alt = props.cell.row.original.alt;
        return (
          <div className="flex flex-row gap-2">
            <img src={src} alt={alt} />
            <p>{props.cell.row.original.name}</p>
          </div>
        );
      },
    },
    {
      header: "Artworks",
      accessorKey: "Artworks",
      cell: (props) => {
        return (
          <div>
            <p>{props.cell.row.original.artwork}</p>
          </div>
        );
      },
    },
    {
      header: "Rating",
      accessorKey: "Rating",
      cell: (props) => {
        const value = props.cell.row.original.progress;
        return <Progress value={value} className="h-2" />;
      },
    },
  ];
  return (
    <div>
      <Header title="NFT Marketplace" />
      <div className="!grid !grid-cols-3 !gap-5 !px-4 !mt-8">
        <div className="!col-span-2 relative">
          <div
            className="bg-cover bg-no-repeat !w-[55vw] !h-[350px] !py-7 !p-4 !rounded-[20px] relative"
            style={{
              backgroundImage: `url(${NFTImage})`,
            }}
          >
            <div className="!absolute !inset-y-0 !left-0 items-start p-10">
              <h1 className="Poppins700 !text-[34px] !break-words !text-white">
                Discover, collect, and
              </h1>
              <h1 className="Poppins700 !text-[34px] !break-words !text-white">
                sell extraordinary NFTs
              </h1>
              <p className="!text-white Poppins500 !text-base !pt-4">
                Enter this creative world. Discover now the
              </p>
              <p className="!text-white Poppins500 !text-base">
                latest NFTs or start
                creating your own!
              </p>
              <div className="!flex !gap-12 !py-10">
                <PrimaryButton title="Discover now" />
                <p className="!text-[--text-color] !text-center !py-2">
                  Watch video
                </p>
              </div>
            </div>
          </div>
          <div className="!py-7 !flex !justify-between">
            <h4 className="!text-2xl Poppins700 !text-[--logo-color]">
              Trending NFTs
            </h4>
            <div className="!flex !gap-8">
              <p className="!bg-white Poppins500 !text-sm !rounded-full !text-center !py-2 !px-6 !text-[--divider-color]">
                Art
              </p>
              <p className=" Poppins500 !text-sm !text-center !py-2 !px-6 !text-[--divider-color]">
                Music
              </p>
              <p className=" Poppins500 !text-sm !text-center !py-2 !px-6 !text-[--divider-color]">
                Collectibles
              </p>
              <p className=" Poppins500 !text-sm !text-center !py-2 !px-6 !text-[--divider-color]">
                Sports
              </p>
            </div>
          </div>
          <div className="!grid lg:!grid-cols-3 md:!grid-cols-2 !grid-cols-1 !gap-5">
            {trendingNFTData.map((data) => (
              <MarketPlaceCard
                key={data.id}
                title={data.title}
                name={data.name}
                id={data.id}
                src={data.src}
                alt={data.alt}
              />
            ))}
          </div>
          <div>
            <h4 className="!text-2xl Poppins700 !text-[--logo-color] !py-7">
              Recently Added
            </h4>
            <div className="!grid lg:!grid-cols-3 md:!grid-cols-2 !grid-cols-1  !gap-5">
              {RecentlyAddedData.map((data) => (
                <MarketPlaceCard
                  key={data.id}
                  title={data.title}
                  name={data.name}
                  id={data.id}
                  src={data.src}
                  alt={data.alt}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="!col-span-1 !pl-3 ">
          <div className="!rounded-t-[16px] !bg-white !p-4 !flex !justify-between">
            <h3 className="Poppins700 !text-xl !text-[--card-title]">
              Top Creators
            </h3>
            <SecondaryButton
              title="See All"
              size="sm"
              className=" !text-[--divider-color] !bg-[--bg-search] !rounded-full !py-4 !px-4"
            />
          </div>
          <TableData columns={Columns} data={topCreatorsData} loading={false} />
          <MarketPlaceHistory />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
