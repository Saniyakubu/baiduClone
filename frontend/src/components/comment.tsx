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
