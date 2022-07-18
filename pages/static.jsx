const staticPage = ({ time }) => {
  return <div>{time}</div>;
};

//정적데이터 - build될때 고정 - 변하지 않음.
// export const getStaticProps = async () => {
//   return { props: { time: new Date().toISOString() } };
// };

//정적 데이터도 갱신하도록(revalidate : 초단위로 데이터 갱신)
export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString() }, revalidate: 3 };
};

export default staticPage;
