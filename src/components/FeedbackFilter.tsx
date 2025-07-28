import { useFeedbackStore } from '@/store/useFeedbackStore';
import { Button } from '@/components/ui/button';
import type {FeedbackCategory} from "@/types/feedback.ts";
import {Separator} from "@/components/ui/separator.tsx";

const categories: (FeedbackCategory | 'All')[] = ['All', 'Bug', 'Feature', 'Other'];

export const FeedbackFilter = () => {
  const selected = useFeedbackStore((s) => s.selectedCategory);
  const setCategory = useFeedbackStore((s) => s.setCategory);

  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {categories.map((category) => (
        <Button
          key={category}
          className='cursor-pointer'
          variant={selected === category ? 'default' : 'outline'}
          onClick={() => setCategory(category)}
        >
          {category}
        </Button>
      ))}
      <Separator />
    </div>
  );
};
