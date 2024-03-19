import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const TableData = ({ columns, data, loading }) => {
  return (
    <>
      <Table className="table-auto !bg-white !rounded-b-[20px]">
        <TableHead className="bg-[--table-head-bg]">
          <TableRow>
            {columns?.map((column, index) => (
              <TableCell
                key={index}
                sx={{boxShadow: "0px 40px 58px -20px #7090B01F"}}
                className={`!text-[--table-head] Poppins600 md:!text-xs !text-xs whitespace-nowrap  ${
                  column.header === "ACTION"
                    ? "action-heading"
                    : "!text-[--table-head] Poppins600 text-sm whitespace-nowrap"
                }`}
              >
                {column.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                <BiLoaderCircle size={24} color="inherit" />
              </TableCell>
            </TableRow>
          ) : (
            <>
              {data?.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    align="center"
                    className="Poppins500 !text-base"
                  >
                    No data found
                  </TableCell>
                </TableRow>
              ) : (
                data?.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="!border-none"
                  >
                    {columns?.map((column, colIndex) => (
                      <TableCell
                        key={colIndex}
                        className={
                          "Poppins400 md:!text-[14px] !p-3 !text-sm !whitespace-nowrap"
                        }
                      >
                        {column.accessorKey &&
                          column.cell &&
                          column.cell({ cell: { row: { original: row } } })}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default TableData;
