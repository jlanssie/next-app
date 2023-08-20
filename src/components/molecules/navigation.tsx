import Link from "next/link";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/example">Example</Link>
        </li>

      </ul>
    </nav>
  );
};
