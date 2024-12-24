import { DashboardLayout } from "@/layouts";
import { useProtectedRoute } from "@/hooks";
import { CreatePage, UserPages } from "./_sections";
import { useState } from "react";
import { PageType } from "@/services";

export const DashboardPage = () => {
  useProtectedRoute();
  const [pages, setPages] = useState<PageType[]>();
  return (
    <DashboardLayout color="#BD4DC0">
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <CreatePage setPages={setPages} />
        <UserPages setPages={setPages} pages={pages} />
      </main>
    </DashboardLayout>
  );
};
