import { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams<{ courseId: string }>();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [expandedModules, setExpandedModules] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleModuleCollapse = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => setExpandedModules({})}
        >
          Collapse All
        </button>
        <button type="button" className="btn btn-light">
          View Progress
        </button>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i style={{ color: "green" }} className="fa-solid fa-check"></i>{" "}
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Publish All
              </a>
            </li>
          </ul>
        </div>

        <button type="button" className="btn btn-danger">
        <i className="fa-solid fa-plus"></i>{" "}
           Module
        </button>
        
        <button type="button" className="btn btn-light">
        <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <hr />
        <ul className="list-group wd-modules">
          {modulesList.map((module) => (
            <li
              className="list-group-item"
              key={module._id}
              onClick={() => toggleModuleCollapse(module._id)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {expandedModules[module._id] && (
                <ul className="list-group">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item" key={lesson._id}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ModuleList;
