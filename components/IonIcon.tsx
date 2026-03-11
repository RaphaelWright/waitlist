"use client";

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": {
        name: string;
        class?: string;
        style?: React.CSSProperties;
        "aria-hidden"?: string;
      };
    }
  }
}

export default function IonIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return <ion-icon name={name} class={className} aria-hidden="true" />;
}
