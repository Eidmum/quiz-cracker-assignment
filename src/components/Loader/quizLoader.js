const quizLoader = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/quiz/${id}`
  );
  const data = await res.json();
  return data.data;
};
export default quizLoader;
