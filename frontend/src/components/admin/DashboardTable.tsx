import { ColumnDef } from "@tanstack/react-table";
import TableHOC from "./TableHOC";

interface DataType {
  _id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

// ✅ Add `id` to each column
const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "_id",
    header: "Id",
    id: "id", // 👈 Add a unique id
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    id: "quantity", // 👈 Add a unique id
  },
  {
    accessorKey: "discount",
    header: "Discount",
    id: "discount", // 👈 Add a unique id
  },
  {
    accessorKey: "amount",
    header: "Amount",
    id: "amount", // 👈 Add a unique id
  },
  {
    accessorKey: "status",
    header: "Status",
    id: "status", // 👈 Add a unique id
  },
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  const TableComponent = TableHOC<DataType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  );

  return <TableComponent />;
};

export default DashboardTable;
