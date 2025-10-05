import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from "react";

export type Point = {
  row: number;
  col: number;
};

export const PointerContext = createContext<{
  content: string;
  point: Point;
  setPoint: Dispatch<SetStateAction<Point>>;
}>({
  content: "",
  point: {
    row: 0,
    col: 0,
  },
  setPoint: () => undefined,
});

type PointerProviderProps = {
  content: string;
  children: ReactNode;
};
export const PointerProvider = ({
  children,
  content,
}: PointerProviderProps) => {
  const initialCol = content.split("\n")[0].search(/\w/);
  const [point, setPoint] = useState<Point>({
    row: 0,
    col: initialCol,
  });
  return (
    <PointerContext
      value={{
        point,
        content,
        setPoint,
      }}
    >
      {children}
    </PointerContext>
  );
};
