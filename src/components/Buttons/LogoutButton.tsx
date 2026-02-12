import { Button } from "../shadcnui/button";

const LogoutButton = () => {
  return (
    <Button
      type="button"
      className="cursor-pointer"
      variant={"destructive"}>
      Logout
    </Button>
  );
};

export default LogoutButton;
