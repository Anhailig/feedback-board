import { useFeedbackStore } from '@/store/useFeedbackStore';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type {FeedbackItem} from "@/types/feedback.ts";

type FeedbackListProps = {
  feedbacks: FeedbackItem[];
  loading: boolean;
};

export const FeedbackList = ({ feedbacks, loading }: FeedbackListProps) => {
  const selectedCategory = useFeedbackStore((s) => s.selectedCategory);

  const filtered = selectedCategory === 'All'
    ? feedbacks
    : feedbacks.filter((f) => f.category === selectedCategory);

  if (loading) return <h2 className="text-base text-center text-muted-foreground mt-8">Loading...</h2>;

  if (!filtered.length) {
    return <h2 className="text-base text-center text-muted-foreground mt-8">No feedback yet.</h2>;
  }

  return (
    <div className="space-y-4">
      {[...filtered]
        .sort((a, b) => b.created_at - a.created_at)
        .map((item) => (
        <Card key={item.id} className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">{item.title}</h3>
              <p className='text-muted-foreground text-xs'>{new Date(item.created_at).toLocaleDateString()}</p>
            </div>
            <Badge variant={item.category === "Bug" ? 'destructive' : 'outline'}>{item.category}</Badge>
          </div>
          <p className="text-sm text-muted-foreground break-words whitespace-pre-line">{item.description}</p>
        </Card>
      ))}
    </div>
  );
};
