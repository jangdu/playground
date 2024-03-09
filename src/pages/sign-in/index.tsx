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
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Warning from '../../../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/Warning.d';
import { Mail } from 'lucide-react';

const formSchema = z.object({
  email: z
    .string()
    .min(6, '이메일은 6글자 이상만 입력이 가능합니다.')
    .max(20, '이메일은 20글자 이하만 입력이 가능합니다.')
    .email('이메일 형식으로 입력해주세요.'),
  password: z
    .string()
    .min(6, '비밀번호는 6글자 이상만 입력이 가능합니다.')
    .max(20, '비밀번호는 20글자 이하만 입력이 가능합니다.'),
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
                        <FormLabel className="my-0 text-black dark:text-white">
                          {fieldName}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={fieldName} {...field} />
                        </FormControl>
                        <FormMessage className="dark:text-red-500" />
                      </FormItem>
                    )}
                  />
                ),
              )}
              <Button className="w-full" type="submit">
                Submit
              </Button>
              <div className="flex flex-col justify-center gap-2 border-b-2 py-2">
                <div className="flex flex-row justify-center gap-2  ">
                  <p>아직 회원이 아니신가요? </p>
                  <Link
                    className="text-blue-500 hover:underline"
                    href="/sign-up"
                  >
                    회원가입
                  </Link>
                </div>
                <div className="flex flex-row justify-center gap-2  ">
                  <p>아직 회원이 아니신가요? </p>
                  <Link
                    className="text-blue-500 hover:underline"
                    href="/sign-up"
                  >
                    회원가입
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex w-full flex-col gap-2 px-10">
          <Button className="w-full">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>

          <Button className="w-full">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>

          <Button className="w-full">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
