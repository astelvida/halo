import * as React from "react";

interface AppIconProps {
  classNames?: string;
  styles?: {}
  strokeWidth?: number;
  strokeLinecap?: "round" | "butt" | "square" | "inherit" | undefined;
  strokeLinejoin?: "round" | "inherit" | "miter" | "bevel" | undefined;
}

export const PlusIcon = ({
  strokeWidth = 2,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  classNames = "",
  styles = {},
}: AppIconProps) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={styles}
      className={classNames}
    >
      <path
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeWidth={strokeWidth}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
};

export function DownloadIcon({
  strokeWidth = 2,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  classNames = "",
  styles = {},
}: AppIconProps) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={styles}
      className={classNames}
    >
      <path
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeWidth={strokeWidth}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}

export function XIcon({
  strokeWidth = 2,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  classNames = "",
  styles = {},
}: AppIconProps) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={styles}
      className={classNames}
    >
      <path
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeWidth={strokeWidth}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
