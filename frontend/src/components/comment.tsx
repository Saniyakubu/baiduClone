{
  /* {!isLoading && (
        <>
          {searchReslt && !searchReslt?.organic_results[0]?.title ? (
            <div className="relative h-56 max-w-xl mb-5 lg:ml-20 bg-muted-foreground">
              <div className="flex items-center">
                <img src={Ai} alt="Ai" className="object-contain w-[40px]" />
                <p className="flex items-center mx-5 mt-5 mb-8 text-xl font-bold text-primary-foreground">
                  智能回答
                </p>
              </div>
              <a
                className="mx-5 text-xl text-primary-foreground"
                target="_blank"
                href={searchReslt?.organic_results[0]?.link}
              >
                {searchReslt &&
                  !searchReslt?.organic_results[0]?.title &&
                  "抱歉，出了有点问题，请稍后重试"}
              </a>

              <p className="w-32 m-5 mx-auto text-center bg-gray-500 cursor-pointer text-primary-foreground rounded-3xl">
                重新回答
              </p>

              <div className="absolute bottom-0 flex items-center justify-between w-full">
                <div className="flex p-2 m-2 bg-gray-600 rounded-3xl gap-x-5">
                  <SlLike className="text-xl text-white cursor-pointer " />
                  <SlDislike className="text-xl text-white cursor-pointer " />
                </div>
                <div className="flex p-2 m-2 bg-gray-600 rounded-3xl gap-x-5">
                  <FaShare className="text-xl text-white " />
                </div>
              </div>
            </div>
          ) : null}
        </>
      )} */
}
{
  /* {searchReslt?.answer_box && searchReslt?.answer_box[0] && (
        <article className="lg:w-[60%] bg-slate-300 text-black shadow-md rounded-md p-5">
          <h1 className="mb-5 text-2xl font-bold hover:underline">
            <a target="_blank" href={searchReslt?.answer_box[0]?.link}>
              {searchReslt?.answer_box[0]?.title}
            </a>
          </h1>
          {isReadmore ? (
            <div>
              <p>{searchReslt?.answer_box[0]?.snippet}</p>
              <p
                onClick={() => setIsReadmore(!isReadmore)}
                className="mt-10 font-bold text-center cursor-pointer"
              >
                Read Less
              </p>
            </div>
          ) : (
            <div>
              <p>{searchReslt?.answer_box[0]?.snippet.substring(0, 200)}....</p>
              <p
                onClick={() => setIsReadmore(!isReadmore)}
                className="mt-10 font-bold text-center cursor-pointer"
              >
                Read More
              </p>
            </div>
          )}
        </article>
      )} */
}

//   <div className="grid gap-10 px-16 py-8 border lg:grid-cols-2 place-content-between">
//     <div>
//       <a target="_blank" href={searchReslt?.local_map?.link}>
//         <img src={searchReslt?.local_map?.image} alt="" />
//       </a>
//     </div>
//     <article className="grid gap-5 ">
//       {searchReslt &&
//         searchReslt?.organic_results?.map((rslt: any, index: number) => {
//           return (
//             <div key={index} className="grid gap-2">
//               <div className="flex items-center gap-3">
//                 <img
//                   className="object-cover w-10 h-10 rounded-full"
//                   src={
//                     rslt?.thumbnail
//                       ? rslt?.thumbnail
//                       : "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${url}&size=128"
//                   }
//                   alt="image"
//                 />
//                 <div className="flex flex-col flex-wrap justify-center text-wrap">
//                   <p className="break-words ">{rslt?.displayed_link}</p>
//                   <p className="break-words ">{rslt?.displayed_link}</p>
//                   <span className="max-w-xs text-sm break-words">
//                     {rslt?.link}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-3">
//                 <a
//                   className="text-xl text-blue-400 hover:underline"
//                   target="_blank"
//                   href={rslt?.link}
//                 >
//                   {rslt?.title}
//                 </a>

//                 <p className="">
//                   <span className="">{rslt?.date}-</span> {rslt?.snippet}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//     </article>
//     <div className="">
//       {searchReslt?.related_searches && searchReslt?.related_searches && (
//         <div className="">
//           <h1 className="">Related Search</h1>
//           {searchReslt?.related_searches?.map((results: any, index: number) => {
//             return (
//               <ul key={index}>
//                 <li className="">
//                   <a target="_blank" href={results?.link}>
//                     {results?.query}
//                   </a>
//                   <Search />
//                 </li>
//               </ul>
//             );
//           })}
//         </div>
//       )}
//       {vids && vids[0]?.related_videos && (
//         <div className="">
//           <h1 className="text-xl font-bold text-center">Related Videos</h1>
//           <Carousel
//             opts={{
//               align: "end",
//             }}
//             className="w-full mx-auto"
//           >
//             <CarouselContent className="">
//               {vids[0]?.related_videos?.map((results: any, index: number) => {
//                 return (
//                   <CarouselItem
//                     key={index}
//                     className="p-0 px-5 basis-1/2 lg:basis-1/2"
//                   >
//                     <div className="p-1">
//                       <div>
//                         <div className="flex items-center justify-center p-6 cursor-pointer aspect-square">
//                           <a target="_blank" href={results?.link}>
//                             <img className="w-32" src={results?.image} alt="" />
//                           </a>
//                         </div>
//                         <p>Title: {results?.title}</p>
//                         <p>duration: {results?.duration}</p>
//                       </div>
//                     </div>
//                   </CarouselItem>
//                 );
//               })}
//             </CarouselContent>
//           </Carousel>
//         </div>
//       )}
//     </div>
//   </div>;

//  const vids =
//    searchReslt &&
//    searchReslt?.organic_results?.filter((v: any) => v && v.related_videos);
//  console.log(searchReslt.local_map);
