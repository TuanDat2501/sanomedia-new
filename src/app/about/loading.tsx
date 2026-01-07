export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Skeleton cho Header */}
        <div className="animate-pulse mb-12 text-center">
          <div className="h-4 bg-gray-200 rounded w-32 mx-auto mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>

        {/* Skeleton cho Grid bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border rounded-lg overflow-hidden h-[350px] animate-pulse">
              <div className="bg-gray-200 h-48 w-full"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}