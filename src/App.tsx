import { Loader } from "components";
import { Providers } from "layout";
import { lazy, Suspense } from "react";
import RouteComponent from "routes";

const MainLayout = lazy(() => import("layout/Mainlayout"));

const App = () => {
  return (
    <Providers>
      <Suspense fallback={<Loader />}>
        <MainLayout>
          <RouteComponent />
        </MainLayout>
      </Suspense>
    </Providers>
  );
};

export default App;
