import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function InputWithButton() {
  const [discountCode, setDiscountCode] = React.useState("");
  const onChange = ({ target }) => setDiscountCode(target.value);

  const HandelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <form className="w-full" onSubmit={HandelSubmit}>
        <Input
          type="text"
          color="deep-purple"
          label="code"
          value={discountCode}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={discountCode ? "gray" : "blue-gray"}
          disabled={!discountCode}
          className="!absolute right-1 top-1 rounded text-[12px]"
        >
          Apply the code
        </Button>
      </form>
    </div>
  );
}
