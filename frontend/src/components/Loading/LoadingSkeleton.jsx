import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonLoadingTh() {
  return (
    <th>
      <Skeleton />
    </th>
  );
}

function SkeletonLoadingTd() {
  return (
    <td>
      <Skeleton />
    </td>
  );
}

function SkeletonLoadingTable() {
  return (
    <table>
      <thead>
        <tr>
          <SkeletonLoadingTh />
          <SkeletonLoadingTh />
          <SkeletonLoadingTh />
          <SkeletonLoadingTh />
          <SkeletonLoadingTh />
          <SkeletonLoadingTh />
          <SkeletonLoadingTh />
          <SkeletonLoadingTh />
          <SkeletonLoadingTh />
        </tr>
      </thead>
      <tbody>
        <tr>
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
        </tr>
        <tr>
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
          <SkeletonLoadingTd />
        </tr>
      </tbody>
    </table>
  );
}

export { SkeletonLoadingTh, SkeletonLoadingTd, SkeletonLoadingTable, SkeletonLoadingHeader, SkeletonPagination };

// Header placeholder (title + search)
function SkeletonLoadingHeader() {
  return (
    <div className="tableHeader">
      <h2>
        <Skeleton width={140} height={20} />
      </h2>
      <div className="tableActions">
        <Skeleton width={220} height={34} />
      </div>
    </div>
  );
}

// Pagination placeholder (Prev, pages, Next + page-size)
function SkeletonPagination({ pages = 3 }) {
  return (
    <div className="tablePagination">
      <div className="paginationContainer">
        <div className="pageSizeSelector">
          <Skeleton width={40} height={14} />
          <Skeleton width={80} height={28} />
          <Skeleton width={90} height={14} />
        </div>
        <div className="pageNavigation">
          <Skeleton width={50} height={28} />
          {Array.from({ length: pages }).map((_, i) => (
            <Skeleton key={i} width={30} height={30} />
          ))}
          <Skeleton width={50} height={28} />
        </div>
      </div>
    </div>
  );
}

