import '../App.css'
import {FeedbackForm} from "@/components/FeedbackForm.tsx";
import {FeedbackList} from "@/components/FeedbackList.tsx";
import {FeedbackFilter} from "@/components/FeedbackFilter.tsx";
import {useFeedbacks} from "@/hooks/useFeedbacks.tsx";

function Home() {
  const { feedbacks, loading, refetch } = useFeedbacks();
  return (
    <>
      <FeedbackForm onSuccess={refetch} loading={loading} />
      <FeedbackFilter />
      <FeedbackList feedbacks={feedbacks} loading={loading} />
    </>
  )
}

export default Home
