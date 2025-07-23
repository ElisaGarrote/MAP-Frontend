import { useState } from "react";
import Pagination from "./PaginationDemo";
import "./tableDemo.css";

// mock data
const tickets = [
  {
    id: "#10001",
    subject: "Cannot access dashboardhuabaoabs...",
    category: "Technical Support",
    priority: "High",
    status: "Open",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "#10002",
    subject: "Feature request: Dark Mode",
    category: "UI/UX",
    priority: "Medium",
    status: "In Progress",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: "#10003",
    subject: "Error 500 on login",
    category: "Backend",
    priority: "Critical",
    status: "Resolved",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: "#10004",
    subject: "Feedback on onboarding flow",
    category: "Customer Success",
    priority: "Low",
    status: "Closed",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// TableHeader component to render the table header
function TableHeader() {
  return (
    <tr>
      <th></th>
      <th>Ticket No.</th>
      <th>Subject</th>
      <th>Category</th>
      <th>Priority</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  );
}

// TableItem component to render each ticket row
function TableItem({ ticket }) {
  return (
    <tr>
      <td>
        <div className="img">
          <img src={ticket.avatar} alt="Avatar" />
        </div>
      </td>
      <td>{ticket.id}</td>
      <td>
        <div className="subjectCell" title={ticket.subject}>
          {ticket.subject}
        </div>
      </td>
      <td>{ticket.category}</td>
      <td>
        <div className={`priority-${ticket.priority.toLowerCase()}`}>
          {ticket.priority}
        </div>
      </td>
      <td>
        <div
          className={`status-${ticket.status.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {ticket.status}
        </div>
      </td>
      <td>
        <div className="actionButtonCont">
          <button title="View" className="actionButton">
            <i className="fas fa-eye"></i>
          </button>
          <button title="Edit" className="actionButton">
            <i className="fas fa-edit"></i>
          </button>
          <button title="Delete" className="actionButton">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

// TableDemo component to render the table with pagination
export default function TableDemo() {
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3); // default page size or number of items per page

  // paginate the data
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTickets = tickets.slice(startIndex, endIndex);

  return (
    <div className="tableSection">

      {/* This is the header of the table, you can customize it as you like merong export/import button or else */}
      <div className="tableHeader">
        <h2>Table Demo</h2>
        <div className="tableActions">
          <input
            className="searchBar"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
      
      {/* Here naman yung mismong table structure that calls table parts */}
      <div className="tableWrapper">
        <table className="table">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {paginatedTickets.map((ticket, index) => (
              <TableItem key={index} ticket={ticket} />
            ))}
          </tbody>
        </table>
      </div>

      {/* This is how I used pagination, feel free to tweak yours */}
      <div className="tablePagination">
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={tickets.length}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      </div>

    </div>
  );
}
