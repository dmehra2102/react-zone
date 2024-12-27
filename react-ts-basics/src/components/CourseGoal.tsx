import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: Props) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
