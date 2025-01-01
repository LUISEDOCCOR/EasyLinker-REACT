import { DashboardLayout } from "@/layouts";
import { useProtectedRoute, usePages } from "@/hooks";
import { CreatePage, UserPages } from "./_sections";

export const DashboardPage = () => {
  useProtectedRoute();
  const { isLoading, pages, removePage, createPage } = usePages({});
  return (
    <DashboardLayout color="#BD4DC0">
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <CreatePage createPage={createPage} />
        <UserPages
          isLoading={isLoading}
          pages={pages}
          removePage={removePage}
        />
      </main>
    </DashboardLayout>
  );
};
