import styles from "./pulseStyles.module.css";

interface PulseShapeProps extends React.ComponentPropsWithoutRef<"div"> {
  type: "Circle" | "Rectangle";
}

export const PulseShape = ({
  type,
  className,
  style,
  ...rest
}: PulseShapeProps) => (
  <div
    className={`${styles.pulseAnimation} ${
      !(className && styles) && styles.fillAvailable
    } ${type === "Circle" ? styles.circle : styles.rect} ${className || ""}`}
    style={style}
    {...rest}
  ></div>
);
