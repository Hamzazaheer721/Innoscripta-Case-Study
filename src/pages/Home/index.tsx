import { Loader } from "components";
import { FC, lazy, memo, Suspense } from "react";

const LazyView = lazy(() => import("./view"));

export const Home: FC = memo((props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
));
