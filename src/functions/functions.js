export const fetchQuestions = async (setState)=>{
    const res = await fetch("https://api-yunagosh.vercel.app/");
    const data = await res.json();
    setState(data);
  }