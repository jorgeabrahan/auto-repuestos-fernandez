import { forwardRef } from "react";
import { Link } from "react-router-dom";

export const RouterLink = forwardRef<
  HTMLAnchorElement,
  { href: string } & React.ComponentPropsWithoutRef<"a">
>((props, ref) => {
  const { href, ...rest } = props;
  return <Link ref={ref} to={href} {...rest} />;
});
