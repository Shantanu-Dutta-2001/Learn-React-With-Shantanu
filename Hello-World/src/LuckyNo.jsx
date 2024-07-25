function LuckyNo() {
  let myNumber = Math.random() * 10;
  return <div>My lucky number is : {Math.round(myNumber)}</div>;
}
export default LuckyNo;
