import styles from "./skeletonStyles.module.css";
import { PulseShape } from "./PulsePlaceholders";

interface PostSkeletonProps extends React.ComponentPropsWithoutRef<"div"> {
  postType: "Image" | "Text" | "Both";
}

export const PostSkeleton = ({
  postType,
  className,
  ...rest
}: PostSkeletonProps) => {
  return (
    <div className={`${styles.post} ${className || ""}`} {...rest}>
      <div className={styles.postHeader}>
        <PulseShape type="Circle" className={styles.avatar} />
        <div className={styles.userInfoContainer}>
          <PulseShape
            type="Rectangle"
            className={styles.userInfo}
            style={{ width: "8rem" }}
          />
          <PulseShape
            type="Rectangle"
            className={styles.userInfo}
            style={{ width: "6rem" }}
          />
        </div>
      </div>
      {postType === "Image" ? (
        <PulseShape type="Rectangle" className={styles.postContent} />
      ) : postType === "Text" ? (
        <PulseText lines={4} />
      ) : (
        <></>
      )}
      <div className={styles.postFooter}>
        <PulseShape type="Rectangle" className={styles.FooterElement} />
        <PulseShape type="Rectangle" className={styles.FooterElement} />
      </div>
    </div>
  );
};

const PulseText = ({ lines }: { lines: number }) => (
  <div style={{ padding: "1rem" }}>
    {Array.from(Array(lines - 1).keys()).map((line) => (
      <PulseShape type="Rectangle" className={styles.textLine} />
    ))}
    <PulseShape
      type="Rectangle"
      className={styles.textLine}
      style={{ width: "80%" }}
    />
  </div>
);
