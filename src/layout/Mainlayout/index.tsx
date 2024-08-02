import { Loader } from "components";
import { FC, lazy, memo, ReactNode, Suspense } from "react";

const Header = lazy(() => import("../../components/Header"));

interface IMainLayoutProps {
  children: ReactNode;
}

const Mainlayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
        {children}
      </Suspense>
    </div>
  );
};

export default memo(Mainlayout);
