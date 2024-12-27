import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image, children }: Props) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
