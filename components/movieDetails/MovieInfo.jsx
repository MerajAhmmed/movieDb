export default function MovieInfo() {
  return (
    <>
      {" "}
      <h1 className="text-4xl font-bold mb-4">Smile 2</h1>
      <div className="flex items-center mb-4 space-x-4">
        <span className="text-green-500"> 24 November 2024 </span>
        <span>| </span>
        <span>127 min</span>
      </div>
      <p className="text-lg mb-6">
        About to embark on a new world tour, global pop sensation Skye Riley
        begins experiencing increasingly terrifying and inexplicable events.
        Overwhelmed by the escalating horrors and the pressures of fame, Skye is
        forced to face her dark past to regain control of her life before it
        spirals out of control.
      </p>
      <div className="mb-6">
        <h3 className="text-gray-400 mb-2">Genres</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
            Horror{" "}
          </span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
            Mystery
          </span>
        </div>
      </div>
    </>
  );
}
