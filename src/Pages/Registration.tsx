import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.tsx';
import supabase from '@/lib/supabase.ts';
import {type RegistrationFormValues, registrationSchema} from "@/types/schema.ts";
import { toast } from "sonner"
import {useState} from "react";
import {Loader2Icon} from "lucide-react";

export const Registration = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: RegistrationFormValues) => {
    const { email, password } = values;

    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Registration error:', error);
    } else {
      toast.success('Registration successful! Check your email to confirm your account');
    }
    setLoading(false);

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
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
                <Input type="password" placeholder="Enter password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
          {loading ? (
            <>
              <Loader2Icon className="animate-spin" />
              Please wait...
            </>
          ) : (
            <>
              Sign Up
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
