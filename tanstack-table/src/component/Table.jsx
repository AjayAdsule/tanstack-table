import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";

export default function Table({ data, columns }) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log({ table });
  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            {table.getHeaderGroups().map((headerGroup) => {
              console.log({ headerGroup });
              return (
                <React.Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>{header.column.columnDef.header}</th>
                  ))}
                </React.Fragment>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return <td key={cell.id}>{cell.renderValue()}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
