import Button from "../reused/buttons/Button";

export default ({ setSlot }) => {
  return (
    <Button
      onClick={() => {
        setSlot(null);
      }}
    >
      see other slots
    </Button>
  );
};
