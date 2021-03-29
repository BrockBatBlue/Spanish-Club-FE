import React from "react";
import "../../Styles/Elements/Roster.css";

function Roster() {
  return (
    <>
      <div>
        <table>
          <tr>
            <th>Student</th>
            <th>StudentID</th>
            <th>class</th>
            <th>date one</th>
            <th>Present</th>
            <th>Absent</th>
            <th>date two</th>
            <th>Present</th>
            <th>Absent</th>
            <th>date three</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
          <tr>
            <td>Julien Jakobson</td>
            <td>0334</td>
            <td>English B1-Teacups</td>
            <td>Present</td>
            <td>Absent</td>
          </tr>
          <tr>
            <td>Adriana</td>
            <td>Jackson</td>
            <td>0447</td>
            <td>English B2-Tigers</td>
            <td>Present</td>
            <td>Absent</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Roster;
