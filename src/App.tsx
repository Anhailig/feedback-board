import './App.css'
import {FeedbackForm} from "@/components/FeedbackForm.tsx";
import {FeedbackList} from "@/components/FeedbackList.tsx";
import {FeedbackFilter} from "@/components/FeedbackFilter.tsx";
import {LoginForm} from "@/Login.tsx";
import {RegistrationForm} from "@/Registration.tsx";


function App() {
  return (
    <div className="max-w-lg h-full mx-auto px-4 py-8 space-y-8 overflow-y-scroll scroll-thin shadow-[4px_0_10px_rgba(0,0,0,0.05),_-4px_0_10px_rgba(0,0,0,0.05)]">
      {/*<h1 className="text-4xl font-bold text-center">Feedback Board</h1>*/}
      {/*<FeedbackForm/>*/}
      {/*<FeedbackFilter />*/}
      {/*<FeedbackList/>*/}
      <RegistrationForm />
    </div>
  )
}

export default App
