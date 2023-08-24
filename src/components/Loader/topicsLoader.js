const topicsLoader = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/quiz");
  const data = await res.json();
  return data.data;
};
export default topicsLoader;
