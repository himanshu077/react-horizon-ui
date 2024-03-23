import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const TableData = ({ columns, data, className, loading }) => {
  return (
    <div className={`!w-full !bg-[--signin-bg] !rounded-b-[20px] overflow-auto !border-none !shadow-none ${className}`}>
      <Table aria-label="dynamic table">
        <TableHeader >
          <TableRow>
            {columns?.map((column, index) => (
              <TableHead
                key={index}
                className={`!text-[--tab-color] Poppins500 md:!text-sm !text-base !border-none !font-semibold ${column.header === "ACTION" ? "action-heading" : ""
                  }`}
              >
                <div className="!flex !flex-row !gap-2 !py-[5px] !items-center">
                  {column.header}
                  {column.icon && <span className="!mt-1">{column.icon}</span>}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody  className="!bg-[--table-body]">
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
    </div>
  );
};

export default TableData;

