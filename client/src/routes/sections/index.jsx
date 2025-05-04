import { lazy, Suspense } from "react";

import MainLayout from "../../layouts";

// ----------------------------------------------------------------------

const HomePage = lazy(() => import("../../pages/home"));

export const routesSection = [
  {
    path: "/",

    element: (
      <Suspense fallback={<div> Loading... </div>}>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Suspense>
    ),
  },
];
