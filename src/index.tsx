import "./index.css";
import ReactDOM from "react-dom";
import { PostSkeleton } from "./PulseSkeletons";

const App = () => (
  <div
    style={{
      display: "flex",
      padding: "2rem 0.2rem",
      justifyContent: "center",
      backgroundColor: "#efefef",
    }}
  >
    <div style={{ width: "650px" }}>
      {/*  <PostSkeleton/> will will the width of it's parent unless className/style privided other width value
      (it accept all 'div' props + postType prop)*/}
      <PostSkeleton postType="Both" />
      <PostSkeleton postType="Text" />
      <PostSkeleton postType="Image" />
      <PostSkeleton postType="Text" />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
