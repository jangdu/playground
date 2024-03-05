import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  email: z.string().min(2).max(20).email(),
  password: z.string().min(2).max(20),
});

export default function SignInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Card className="mx-auto my-auto max-w-md">
        <CardHeader className="items-center justify-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {Object.entries(formSchema.shape).map(
                ([fieldName, fieldSchema]) => (
                  <FormField
                    key={fieldName}
                    control={form.control}
                    name={fieldName as keyof typeof formSchema.shape}
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="my-0 text-black">
                          {fieldName}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={fieldName} {...field} />
                        </FormControl>
                        {/* <FormDescription>
                          This is your public display email.
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ),
              )}
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </>
  );
}
