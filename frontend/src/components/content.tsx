import { useContextStoreProvider } from "../context/store";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Search } from "lucide-react";
// import { Search } from "lucide-react";

// import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Content = () => {
  const { searchReslt } = useContextStoreProvider();

  // px-5 py-5 lg:px-16 lg:py-5

  return (
    <div className="grid p-5 lg:gap-5 lg:p-10 lg:grid-cols-3">
      <div className="lg:col-span-2 lg:p-5">
        <h3 className="pb-1 text-2xl font-semibold tracking-tight scroll-m-20">
          Top stories
        </h3>
        {searchReslt?.top_stories && (
          <div className="grid w-full gap-5 lg:grid-cols-2">
            {searchReslt?.top_stories &&
              searchReslt?.top_stories.map((result: any) => {
                return (
                  <Card className="flex flex-col justify-between p-2 lg:p-4">
                    <div className="flex items-center justify-center gap-3">
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={result?.source} alt="@shadcn" />
                            <AvatarFallback>{result?.source}</AvatarFallback>
                          </Avatar>
                          <CardHeader className="p-0">
                            {result?.source}
                          </CardHeader>
                        </div>
                        <CardTitle className="p-0 text-sm text-blue-400 hover:underline">
                          <a target="_blank" href={result?.link}>
                            {result?.title}
                          </a>
                        </CardTitle>
                      </div>

                      <CardContent className="text-lg text-blue-400 hover:underline">
                        <img src={result?.thumbnail} alt="" />
                      </CardContent>
                    </div>
                    <CardFooter className="p-0 ">{result?.date}</CardFooter>
                  </Card>
                );
              })}
          </div>
        )}

        {searchReslt?.organic_results &&
          searchReslt?.organic_results
            .filter((result: any) => result.position < 5)
            .map((filteredResult: any) => (
              <Card
                key={filteredResult?.position}
                className="py-5 border-none lg:p-5"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={filteredResult?.favicon} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardHeader className="p-0 ">
                      {filteredResult?.source}
                    </CardHeader>
                    <CardDescription>
                      {filteredResult?.displayed_link}
                    </CardDescription>
                  </div>
                </div>
                <div className="mt-2 ">
                  <CardTitle className="text-lg text-blue-400 hover:underline">
                    <a target="_blank" href={filteredResult?.link}>
                      {filteredResult?.title}
                    </a>
                  </CardTitle>
                  <CardDescription>{filteredResult?.date}</CardDescription>
                  <CardContent className="p-0 ">
                    {filteredResult?.snippet.slice(0, 47)}.....
                  </CardContent>
                </div>
              </Card>
            ))}

        <>
          <h3 className="py-2 text-2xl font-semibold tracking-tight scroll-m-20">
            People also ask
          </h3>
          {searchReslt?.related_questions && (
            <div className="grid gap-10 lg:grid-cols-2">
              {searchReslt?.related_questions.map(
                (result: any, index: number) => {
                  return (
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger>{result?.question}</AccordionTrigger>
                        <AccordionContent>{result?.snippet}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }
              )}
            </div>
          )}
        </>
        {searchReslt?.organic_results &&
          searchReslt?.organic_results
            .filter((result: any) => result.position > 5)
            .map((filteredResult: any) => (
              <Card
                key={filteredResult?.position}
                className="py-5 border-none lg:p-5 "
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={filteredResult?.favicon} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardHeader className="p-0 ">
                      {filteredResult?.source}
                    </CardHeader>
                    <CardDescription>
                      {filteredResult?.displayed_link}
                    </CardDescription>
                  </div>
                </div>
                <div className="mt-2 ">
                  <CardTitle className="text-lg text-blue-400 hover:underline">
                    <a target="_blank" href={filteredResult?.link}>
                      {filteredResult?.title}
                    </a>
                  </CardTitle>
                  <CardDescription>{filteredResult?.date}</CardDescription>
                  <CardContent className="p-0 ">
                    {filteredResult?.snippet.slice(0, 47)}.....
                  </CardContent>
                </div>
              </Card>
            ))}
      </div>
      <div className="w-full">
        <div>
          <h3 className="py-3 text-2xl font-semibold tracking-tight scroll-m-20">
            About
          </h3>
          {searchReslt?.knowledge_graph && (
            <Card className="w-full py-4 ">
              <CardContent>
                {searchReslt?.knowledge_graph?.description}
              </CardContent>
              <CardContent className="grid gap-2 ">
                <CardDescription>
                  <span className="font-bold text-foreground">Capital:</span>{" "}
                  {searchReslt?.knowledge_graph?.capital}
                </CardDescription>
                <CardDescription>
                  <span className="font-bold text-foreground"> Currency:</span>{" "}
                  {searchReslt?.knowledge_graph?.currency}
                </CardDescription>
                <CardDescription>
                  <span className="font-bold text-foreground">
                    Gross domestic product:{" "}
                  </span>
                  {searchReslt?.knowledge_graph?.gross_domestic_product}
                </CardDescription>
                <CardDescription>
                  <span className="font-bold text-foreground">President: </span>
                  {searchReslt?.knowledge_graph?.president}
                </CardDescription>
                <CardDescription>
                  <span className="font-bold text-foreground">
                    Population:{" "}
                  </span>
                  {searchReslt?.knowledge_graph?.population}
                </CardDescription>
                <CardDescription>
                  <span className="font-bold text-foreground">
                    Official language:{" "}
                  </span>
                  {searchReslt?.knowledge_graph?.official_language}
                </CardDescription>
                <CardDescription>
                  <span className="font-bold text-foreground">
                    Dialing Code:{" "}
                  </span>
                  {searchReslt?.knowledge_graph?.dialing_code}
                </CardDescription>
              </CardContent>
            </Card>
          )}
        </div>
        <>
          <h3 className="py-2 text-2xl font-semibold tracking-tight scroll-m-20">
            People also search for
          </h3>
          {searchReslt?.knowledge_graph?.people_also_search_for && (
            <div className="flex items-center justify-center gap-5 p-5">
              {searchReslt?.knowledge_graph?.people_also_search_for.map(
                (result: any) => {
                  return (
                    <div className="flex flex-col items-center gap-2">
                      <img src={result?.image} alt="" />
                      <h1 className="cursor-pointer hover:underline ">
                        <a href={result?.link}>{result?.name}</a>
                      </h1>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </>
        {searchReslt?.related_searches && (
          <>
            <h3 className="py-5 text-2xl font-semibold tracking-tight scroll-m-20">
              People also search for
            </h3>
            <div className="grid gap-3 lg:grid-cols-2 ">
              {searchReslt?.related_searches.map((result: any) => {
                return (
                  <Card className="flex items-center p-5 cursor-pointer bg-muted">
                    <CardContent className="flex items-center justify-between w-full p-0">
                      <a target="_blank" href={result?.link}>
                        {result?.query}
                      </a>
                      <span>
                        <Search />
                      </span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
