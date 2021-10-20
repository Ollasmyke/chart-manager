import Header from "../../../components/Header";

const Home = () => {

  const username = localStorage.getItem("username");

  return (
    <>
      <Header/>
      <h1>Hello, {username}</h1>
    </>

  );
}

export default Home;
