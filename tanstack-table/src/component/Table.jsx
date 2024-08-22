import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import { useState } from "react";

export default function Table({ data, columns }) {
  const [columnOrder, setColumnOrder] = useState();
  const table = useReactTable({
    columns,
    data,
    state: { columnOrder },
    getCoreRowModel: getCoreRowModel(),
    onColumnOrderChange: setColumnOrder,
  });

  const handleColumnChange = (oldPosition, newPosition) => {
    let columnOrders = table.getAllColumns().map((c) => c.id);
    console.log(columnOrders);
    let movePosition = 2;
    let newColumnPosition = 0;
    let temp = columnOrders[movePosition];
    for (let i = newColumnPosition; i <= movePosition - 1; i++) {
      columnOrders[i + 1] = columnOrders[i];
    }
    columnOrders[newColumnPosition] = temp;
    console.log(columnOrders);
  };

  return (
    <>
      <button className="shrink_btn" onClick={() => handleColumnChange(3, 2)}>
        Shrink
      </button>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              {table.getHeaderGroups().map((headerGroup) => {
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
    </>
  );
}
