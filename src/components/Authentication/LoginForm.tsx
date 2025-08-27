import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/Redux/Features/authApi/authApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [login] = useLoginMutation()
  const navigate = useNavigate();
  const form = useForm();


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    try {
      const res = await login(data).unwrap();
      console.log("this Response:", res);

      if (res.data && res.success) {
        toast.success("you are login has been successfully");
        navigate("/");
      }


      if (res.data && res.status === 401) {
        toast.error(res.data.message || "user does not exist");
        navigate("/");
      }



      // if error
      if (res.error && typeof res.error === "object" && "data" in res.error) {
        // Type assertion to access error properties
        const error = res.error as { data?: any; status?: number };
        toast.error(error.data?.message);

        if (
          error.status === 400 &&
          error.data?.errorSources &&
          error.data?.message === "ZodError"
        ) {
          const errs = error.data.errorSources;

          if (errs) {
            errs.forEach((err: { path: string; message: string }) => {
              form.setError(err.path as any, {
                type: "server",
                message: err.message,
              });
            });
          }
        }
      }
    } catch (error:any) {
      console.log("catch error:", error)
      if(error.status===401 || error.data){
        toast.error(error.data.message || "invalid login Cridentials")
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}