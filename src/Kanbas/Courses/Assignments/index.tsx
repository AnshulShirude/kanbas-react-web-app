import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        {/* {<!-- Add buttons and other fields here -->} */}
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "17px",
                    }}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                    <label
                      style={{
                        display: "block",
                        color: "red",
                        fontSize: "16px",
                        margin: "0",
                        marginBottom: "0",
                        paddingBottom: "0",
                      }}
                    >
                      Multiple Modules
                    </label>
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Assignments;
