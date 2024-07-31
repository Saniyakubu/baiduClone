import { useContextStoreProvider } from "../context/store";

import { Search } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Content = () => {
  const { searchReslt } = useContextStoreProvider();

  const vids =
    searchReslt &&
    searchReslt?.organic_results?.filter((v: any) => v && v.related_videos);
  return (
    <div className="grid gap-10 px-16 py-8 border lg:grid-cols-2 place-content-between">
      <article className="grid gap-5 ">
        {searchReslt &&
          searchReslt?.organic_results?.map((rslt: any, index: number) => {
            return (
              <div key={index} className="grid gap-2">
                <div className="flex items-center gap-3">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={
                      rslt?.thumbnail
                        ? rslt?.thumbnail
                        : "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${url}&size=128"
                    }
                    alt="image"
                  />
                  <div className="flex flex-col flex-wrap justify-center text-wrap">
                    <p className="break-words ">{rslt?.displayed_link}</p>
                    {/* <span className="max-w-xs text-sm break-words">
                      {rslt?.link}
                    </span> */}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    className="text-xl text-blue-400 hover:underline"
                    target="_blank"
                    href={rslt?.link}
                  >
                    {rslt?.title}
                  </a>

                  <p className="">
                    <span className="">{rslt?.date}-</span> {rslt?.snippet}
                  </p>
                </div>
              </div>
            );
          })}
      </article>
      <div className="">
        {searchReslt?.related_searches && searchReslt?.related_searches && (
          <div className="">
            <h1 className="">Related Search</h1>
            {searchReslt?.related_searches?.map(
              (results: any, index: number) => {
                return (
                  <ul key={index}>
                    <li className="">
                      <a target="_blank" href={results?.link}>
                        {results?.query}
                      </a>
                      <Search />
                    </li>
                  </ul>
                );
              }
            )}
          </div>
        )}
        {vids && vids[0]?.related_videos && (
          <div className="">
            <h1 className="text-xl font-bold text-center">Related Videos</h1>
            <Carousel
              opts={{
                align: "end",
              }}
              className="w-full mx-auto"
            >
              <CarouselContent className="">
                {vids[0]?.related_videos?.map((results: any, index: number) => {
                  return (
                    <CarouselItem
                      key={index}
                      className="p-0 px-5 basis-1/2 lg:basis-1/2"
                    >
                      <div className="p-1">
                        <div>
                          <div className="flex items-center justify-center p-6 cursor-pointer aspect-square">
                            <a target="_blank" href={results?.link}>
                              <img
                                className="w-32"
                                src={results?.image}
                                alt=""
                              />
                            </a>
                          </div>
                          <p>Title: {results?.title}</p>
                          <p>duration: {results?.duration}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
