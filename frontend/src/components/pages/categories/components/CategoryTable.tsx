import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

interface CategoryRow {
  id: string | number;
  name: string;
}

interface CategoryTableProps {
  headers?: string[];
  statusRows?: CategoryRow[];
}

export default function CategoryTable({
  headers,
  statusRows = [],
}: CategoryTableProps) {
  return (
    <Container
      variant="div"
      className={
        "w-full primary-border shadow-lg rounded-xl min-h-0 max-h-120 md:min-h-30 md:max-h-none md:flex-1"
      }
    >
      <div className={"overflow-x-auto"}>
        <table className={"w-full text-left text-sm"}>
          <thead>
            <tr className={"border-b border-gray-300"}>
              {headers?.map((header, index) => (
                <th
                  key={index}
                  className={
                    "px-2 py-3 font-semibold border-r border-gray-300 last:border-0 first:w-10 text-center text-base"
                  }
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {statusRows.map((item) => (
              <tr key={item.id} className={"text-center"}>
                <td className={"px-2 py-3 border-r border-gray-300"}>
                  {item.id}
                </td>
                <td
                  className={
                    "px-2 py-3 border-r border-gray-300 whitespace-nowrap"
                  }
                >
                  {item.name}
                </td>
                <td className={"px-2 py-3 lg:w-100"}>
                  <div className={"flex items-center justify-center gap-2"}>
                    <Button
                      ariaLabel={`Edit ${item.name}`}
                      onClick={() => {}}
                      disabled={true}
                      className={
                        "flex items-center gap-1.5 px-5 button-secondary-styling"
                      }
                    >
                      <LiaEdit className={"w-4 h-4"} />
                      Edit
                    </Button>
                    <Button
                      ariaLabel={`Delete ${item.name}`}
                      onClick={() => {}}
                      disabled={true}
                      className={
                        "flex items-center gap-1.5 button-secondary-styling"
                      }
                    >
                      <MdDelete className={"w-4 h-4"} />
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
