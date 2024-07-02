const Sidebar = ({ list, lists, remaining, totalCost }) => {
  console.log(lists);
  return (
    <div className="lg:w-5/12">
      <div className="p-5 bg-white rounded-lg">
        <h1 className="py-4 font-bold text-blue-500">
          Credit Hour Remaining {remaining} hr
        </h1>
        <hr />
        <h1 className="font-bold text-xl py-4">Course Name</h1>
        <hr />
        <ol className="list-decimal pt-4 pl-4">
          {lists.map(test => (
            <li>{test.title}</li>
          ))}
        </ol>
        <h1 className="mt-4">Total Credit Hour : {totalCost}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
