export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="relative h-16 w-16">
        <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin">
          <div className="h-8 w-8 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-red-500 border-l-transparent"></div>
        </div>
      </div>
    </div>
  )
}
