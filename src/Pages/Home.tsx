import '../App.css'
import {FeedbackForm} from "@/components/FeedbackForm.tsx";
import {FeedbackList} from "@/components/FeedbackList.tsx";
import {FeedbackFilter} from "@/components/FeedbackFilter.tsx";

function Home() {
  return (
    <>
      <FeedbackForm/>
      <FeedbackFilter />
      <FeedbackList/>
    </>
  )
}

export default Home
