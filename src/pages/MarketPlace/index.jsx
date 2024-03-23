import React from "react";
import NFTImage from "@/assets/svg/NFTImage.png";
import MarketPlaceCard from "@/ui/MarketPlaceCard/MarketPlaceCard";
import { RecentlyAddedData, topCreatorsData, trendingNFTData } from "./data";
import { Progress } from "@/components/ui/progress";
import MarketPlaceHistory from "@/ui/MarketPlaceHistory/MarketPlaceHistory";
import TableData from "@/common/TableData/TableData";
import SecondaryButton from "@/common/Button/SecondaryButton";
import PrimaryButton from "@/common/Button/PrimaryButton";
import More from "@/assets/svg/More.svg"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import MarketPlaceHeader from "@/common/MarketPlaceHeader/MarketPlaceHeader";

const MarketPlace = () => {

  const MenuData = ["Arts", "Music", "Collectibles", "Sports"]

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
            <p className="Poppins700 !text-sm !text-[--logo-color]">{props.cell.row.original.name}</p>
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
            <p className="Poppins500 !text-sm !text-[--tab-color]">{props.cell.row.original.artwork}</p>
          </div>
        );
      },
    },
    {
      header: "Rating",
      accessorKey: "Rating",
      cell: (props) => {
        const value = props.cell.row.original.progress;
        return <Progress value={value} className="h-2 !w-full" />;
      },
    },
  ];
  return (
    <div>
      <MarketPlaceHeader title="NFT Marketplace"/>
      <div className="!grid xl:!grid-cols-3 !gap-5 !px-4">
        <div className="xl:!col-span-2 !col-span-full  relative">
          <div
            className="bg-cover bg-no-repeat xl:!max-w-[55vw] !w-full !h-[350px] !py-7 !p-4 !rounded-[20px] relative"
            style={{
              backgroundImage: `url(${NFTImage})`,
            }}
          >
            <div className="!absolute !inset-y-0 !left-0 items-start p-10">
              <h1 className="Poppins700  xl:!text-[34px] md:!text-2xl !leading-[42px] !break-words !text-white">
                Discover, collect, and
              </h1>
              <h1 className="Poppins700 xl:!text-[34px] md:!text-2xl !leading-[42px] !mt-2 !text-lg !break-words !text-white">
                sell extraordinary NFTs
              </h1>
              <p className="!text-white Poppins500 !text-base !pt-4">
                Enter this creative world. Discover now the
              </p>
              <p className="!text-white Poppins500 !text-base">
                latest NFTs or start
                creating your own!
              </p>
              <div className="!flex lg:!gap-12 !gap-5 !py-10">
                <PrimaryButton title="Discover now" />
                <p className="!text-[--text-color] !text-center !py-2 !cursor-pointer">
                  Watch video
                </p>
              </div>
            </div>
          </div>
          <div className="py-7 flex justify-between">
            <h4 className="lg:text-2xl text-lg Poppins700 text-[--logo-color]">
              Trending NFTs
            </h4>
            <div className="xl:flex hidden lg:gap-8 gap-3">
              <p className="bg-[--signin-bg] Poppins500 text-sm rounded-full text-center py-2 px-6 text-[--divider-color]">
                Art
              </p>
              <p className="Poppins500 text-sm text-center py-2 px-6 text-[--divider-color]">
                Music
              </p>
              <p className="Poppins500 text-sm text-center py-2 px-6 text-[--divider-color]">
                Collectibles
              </p>
              <p className="Poppins500 text-sm text-center py-2 px-6 text-[--divider-color]">
                Sports
              </p>
            </div>
            <DropdownMenu >
              <DropdownMenuTrigger className="xl:hidden inline" asChild><img src={More} alt="more" className="p-3 bg-[--signin-bg] rounded-lg" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  {MenuData.map((data) => (
                    <DropdownMenuItem key={data} className="text-[--logo-color] text-sm Poppins500">
                      {data}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="!grid xl:!grid-cols-3 md:!grid-cols-2 !grid-cols-1 !gap-5">
            {trendingNFTData.map((data) => (
              <MarketPlaceCard
                key={data.id}
                title={data.title}
                name={data.name}
                eid={data.eid}
                src={data.src}
                alt={data.alt}
              />
            ))}
          </div>
          <div>
            <h4 className="!text-2xl Poppins700 !text-[--logo-color] !py-7">
              Recently Added
            </h4>
            <div className="!grid xl:!grid-cols-3 md:!grid-cols-2 !grid-cols-1  !gap-5">
              {RecentlyAddedData.map((data) => (
                <MarketPlaceCard
                  key={data.id}
                  title={data.title}
                  name={data.name}
                  eid={data.eid}
                  src={data.src}
                  alt={data.alt}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="xl:!col-span-1 !col-span-full  !pl-3 ">
          <div className="!rounded-t-[16px] !bg-[--signin-bg] !p-4 !flex !justify-between">
            <h3 className="Poppins700 !text-xl !text-[--card-title]">
              Top Creators
            </h3>
            <SecondaryButton
              title="See all"
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
