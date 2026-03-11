"use client";

export default function IonIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = "ion-icon" as any;
  return <Tag name={name} class={className} aria-hidden="true" />;
}
