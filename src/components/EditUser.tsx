"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters!" })
    .max(50, { message: "Username must be at most 50 characters!" }),

  email: z.email({ message: "Invalid email address" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits!" })
    .max(15, { message: "Phone number must be at most 50 characters!" }),

  location: z.string().min(2),
  role: z.enum(["admin", "user"]),
});

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Thyster",
      email: "eyupkaratasbusiness@gmail.com",
      phone: "+90 5418544126",
      location: "Manisa, Turkey",
      role: "admin",
    },
  });
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default EditUser;
