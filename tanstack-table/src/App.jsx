import Table from "./component/Table";

export const tableColumns = [
  {
    header: "First Name",
    accessorKey: "firstName",
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
  },
  {
    header: "Age",
    accessorFn: (info) => info.age,
  },
  {
    header: "Visits",
    accessorKey: "visits",
  },
  {
    header: "Progress",
    accessorFn: (info) => info.progress,
  },
];

export const rawData = [
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Ajay",
    lastName: "Adsule",
    age: 24,
    visits: 130,
    progress: 90,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Rahul",
    lastName: "Kondu",
    age: 25,
    visits: 200,
    progress: 100,
    status: "Single",
  },
];

const App = () => {
  return (
    <div className="container">
      <h2>Table</h2>
      <Table columns={tableColumns} data={rawData} />
    </div>
  );
};

export default App;
