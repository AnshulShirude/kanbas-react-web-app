import ModuleList from "../Modules/List";
import Status from "../Modules/Status";

function Home() {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <ModuleList />
      <Status />
    </div>
  );
}
export default Home;
