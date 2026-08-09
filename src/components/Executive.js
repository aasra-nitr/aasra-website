import React from "react";
import "../css/Executive.scss";

const facultyAdvisors = [
  { name: "Dr. A. Thirugnanam", role: "Faculty Advisor", image: "../images/facad1.jpg" },
  { name: "Dr. Santosh Kumar Das", role: "Faculty Advisor", image: "../images/facad2.jpg" },
  { name: "Dr. P. Balasubramanian", role: "Faculty Advisor", image: "../images/facad3.jpg" },
];

const studentBody = [
  { name: "Sisman Nayak", role: "Treasurer", image: "../images/Sisman_Treasurer.jpg?v=1.0.3" },
  { name: "Subhalaxmi", role: "Internal General Secretary", image: "../images/Subhalaxmi_int_gen_sec.jpg?v=1.0.3" },
  { name: "Subhendu Sahoo", role: "External General Secretary", image: "" },
  { name: "Anshul Kumar", role: "President", image: "../images/anshul2025.jpg" },
  { name: "Shivang Goyal ", role: "Vice-President", image: "../images/Shivang_vicepresident.jpg?v=1.0.3" },
  { name: "Sri Krishna", role: "Creative Head", image: "" },
  { name: "Chinmayee", role: "Content Head", image: "../images/chinmayee_content_head.jpg?v=1.0.3" }
];

function ExecutiveCard({ name, role, image }) {
  return (
    <div className="exec_card">
      <div className="exec_avatar">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <h3 className="exec_name">{name}</h3>
      <p className="exec_role">{role}</p>
    </div>
  );
}

function Executive() {
  return (
    <section className="executives">
      <div className="executives_inner">
        <div className="executives_intro reveal">
          <span className="executives_eyebrow">The Team</span>
          <h2>Current Executives</h2>
        </div>

        {/* Faculty Advisors */}
        <div className="exec_slide reveal delay-1">
          <div className="exec_group_label">Faculty Advisors</div>
          <div className="exec_grid">
            {facultyAdvisors.map((person) => (
              <ExecutiveCard key={person.name} {...person} />
            ))}
          </div>
        </div>

        <div className="exec_divider" />

        {/* Student Executive Body */}
        <div className="exec_slide reveal delay-2">
          <div className="exec_group_label">Student Executive Body</div>
          <div className="exec_grid">
            {studentBody.map((person) => (
              <ExecutiveCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Executive;
