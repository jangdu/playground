import {
  Form,
  FormControl,
  FormDescription,
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
import styled from 'styled-components';

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
      <FormContainer>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {Object.entries(formSchema.shape).map(
              ([fieldName, fieldSchema]) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as keyof typeof formSchema.shape}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fieldName}</FormLabel>
                      <FormControl>
                        <Input placeholder={fieldName} {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display email.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ),
            )}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.5rem var(--shadow-color);
  background-color: var(--background-color);
  color: var(--text-color);
  transition:
    color 0.2s,
    background-color 0.2s;
`;
