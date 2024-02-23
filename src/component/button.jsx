import { Button } from "@material-tailwind/react";

export function ButtonDefault({ name, onClick }) {
  return (
    <Button
      onClick={onClick}
      size="sm"
      color="deep-purple"
      className="py-2 px-2 text-[12px] w-full h-7 flex items-center justify-center"
    >
      {name}
    </Button>
  );
}
