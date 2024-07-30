import { Skeleton } from "./ui/skeleton";

function Loading() {
  return (
    <div className="flex flex-col h-screen gap-4 pb-5 mt-12 lg:px-20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-[150px]" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[300px] lg:w-[400px]" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-[150px]" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[300px] lg:w-[400px]" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-[150px]" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[300px] lg:w-[400px]" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-[150px]" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[300px] lg:w-[400px]" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-[150px]" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[300px] lg:w-[400px]" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-[150px]" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[300px] lg:w-[400px]" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
