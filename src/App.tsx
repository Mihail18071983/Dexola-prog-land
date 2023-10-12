import { Main } from "./Pages/Main";
import ScrollToTop from "react-scroll-to-top";
import { LiaAngleDoubleUpSolid } from "react-icons/lia";

function App() {
  return (
    <>
      <Main />
      <ScrollToTop
        width="20"
        height="20"
        className="up-btn"
        smooth
        color="var(--accent-blue)"
        component={<LiaAngleDoubleUpSolid />}
      />
    </>
  );
}

export default App;
