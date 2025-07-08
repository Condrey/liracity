import { TabsContent } from "@/components/ui/tabs";
import LoginForm from "./login-form";
import { validateRequest } from "@/auth";

export default   function StaffLogin() {
  // const {user} = await validateRequest()
  return (
    <>
    {/* <pre>
      {JSON.stringify(user, null, 2)}
    </pre> */}
      <LoginForm />
    </>
  );
}
