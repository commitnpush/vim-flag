import { useContext, useMemo } from "react";
import { PointerContext } from "@/domains/flag/ui-editor/store/PointerContext";

export const usePointerContext = () => {
  const { content, point, setPoint } = useContext(PointerContext);
  const rows = useMemo(() => content.split("\n"), [content]);
  const maxCol = rows[point.row].length - 1;
  return {
    content,
    maxCol,
    maxRow: rows.length - 1,
    point,
    setPoint,
  };
};
