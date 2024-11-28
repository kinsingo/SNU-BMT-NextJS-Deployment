import Table from "./Table";
import {TableProps} from "./Table";
import React from "react";

export default function ResultTable({ columns, rows }: TableProps) {
  return <Table columns={columns} rows={rows} />;
}
