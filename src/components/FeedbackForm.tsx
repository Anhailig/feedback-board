import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { feedbackSchema, type FeedbackFormValues } from '@/types/schema.ts';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {postFeedback} from "@/lib/supabaseApi.ts";
import {Loader2Icon} from "lucide-react";

type FeedbackFormProps = {
  onSuccess?: () => void;
  loading?: boolean;
};

export const FeedbackForm = ({ onSuccess, loading }: FeedbackFormProps) => {

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      title: '',
      description: '',
      category: undefined,
    },
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      await postFeedback(data);
      form.reset({ title: '', description: '', category: undefined });
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex flex-wrap justify-between">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className='gap-1 min-w-3xs'>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a title..." {...field} />
                </FormControl>
                <div className="min-h-[1.25rem]">
                  <FormMessage/>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className='gap-1'>
                <FormLabel>Category</FormLabel>
                <Select key={field.value ?? 'empty'} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className='cursor-pointer min-w-38'>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {['Bug', 'Feature', 'Other'].map((it, index) => (
                      <SelectItem key={index} className='cursor-pointer' value={it}>{it}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="min-h-[1.25rem]">
                  <FormMessage/>
                </div>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your idea or issue..." {...field} />
              </FormControl>
              <div className="min-h-[1.25rem]">
                <FormMessage/>
              </div>
            </FormItem>
          )}
        />
        <div className='w-full flex justify-center'>
          <Button className='cursor-pointer min-w-40 py-6 text-base' type="submit" variant='default' disabled={loading}>
            {loading ? (
              <>
                <Loader2Icon className="animate-spin" />
                Please wait...
              </>
            ) : (
              <>
                Add feedback
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
