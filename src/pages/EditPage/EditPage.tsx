import { DashboardLayout } from "@/layouts";
import { useEffect } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import { usePages } from "@/hooks";
import { EditPageForm, LinksPageForm } from "./_sections";
import { LinkType } from "@/services";
import { useState } from "react";
import { CreatePageSchemaType } from "@/zodSchemas";

export const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, getPageById, page } = usePages({ autoFetch: false });
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    const pageId = parseInt(id || "");
    if (isNaN(pageId)) {
      navigate("/dashboard");
      return;
    }
    getPageById(pageId);
  }, [id]);

  useEffect(() => {
    if (page) {
      setLinks(page.links || []);
    }
  }, [page]);

  const handleSubmitUpdatePage = (data: CreatePageSchemaType) => {
    const updateData = {
      ...data,
      links: links,
    };
    console.log(updateData);
  };

  return (
    <DashboardLayout color="#BD4DC0">
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {page && !isLoading && (
          <>
            <EditPageForm onSubmit={handleSubmitUpdatePage} page={page} />
            <LinksPageForm links={links} setLinks={setLinks} />
          </>
        )}
      </main>
    </DashboardLayout>
  );
};
