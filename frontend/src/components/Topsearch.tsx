import { useContextStoreProvider } from "../context/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Topsearch = () => {
  const { searchReslt } = useContextStoreProvider();

  return (
    <>
      {searchReslt?.top_searches && (
        <div className="w-full pb-10 lg:px-20">
          <h1 className="text-2xl font-bold mx-9">People also search for</h1>
          {searchReslt?.top_searches && (
            <div className="grid grid-cols-1 gap-3 p-5 lg:grid-cols-2">
              {searchReslt.top_searches
                .slice(0, 8)
                .map((results: any, index: number) => (
                  <Accordion
                    key={index}
                    type="single"
                    collapsible
                    className="w-[90%] mx-auto"
                  >
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="font-bold ">
                        {results?.text}
                      </AccordionTrigger>
                      <AccordionContent className="text-blue-300 hover:underline">
                        <a href={results?.link}> {results?.text}</a>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Topsearch;
