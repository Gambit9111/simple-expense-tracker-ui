function Header({ totalExpenses }) {
  return (
    <div className="flex flex-row py-5 bg-green-700">
      <div className="basis-2/6 pl-10 pt-2 xl:basis-1/6">
        <h1 className="text-slate-200">Total Spent: </h1>
      </div>
      <div className="basis-1/6 xl:basis-4/6">
        <h1 className="text-4xl  text-slate-200">{totalExpenses}$</h1>
        <div className="w-15 h-[1px] bg-white">
        </div>
      </div>
      <div className="w-8 h-8 bg-blue-200 rounded-xl ml-8 mr-4 basis-1/6"></div>
    </div>
  );
}

export default Header;