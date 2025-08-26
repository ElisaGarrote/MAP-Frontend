import { useEffect, useState } from "react";
import NavBar from "../../components/PageNavBar.jsx";
import TableDemo from "../../components/Table.jsx";
import { SkeletonLoadingTable, SkeletonLoadingHeader, SkeletonPagination } from "../../components/Loading/LoadingSkeleton.jsx";
import LoadingButton from "../../components/Loading/LoadingButton.jsx";

export default function SkeletonPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate initial load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{ marginTop: 80, padding: "0 16px" }}>
        {loading ? (
          <div className="tableSection">
            <SkeletonLoadingHeader />
            <div className="tableWrapper">
              <SkeletonLoadingTable rows={3} showHeader={true} />
            </div>
            <SkeletonPagination pages={3} />
          </div>
        ) : (
          <TableDemo />
        )}
      </div>
    </div>
  );
}
