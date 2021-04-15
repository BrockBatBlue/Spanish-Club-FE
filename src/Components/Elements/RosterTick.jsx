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
            <th>Class</th>
            <th>Lesson 1</th>

            <th>Lesson 2</th>

            <th>Lesson 3</th>

          </tr>
          <tr>
            <td>Julien Jakobson</td>
            <td>0334</td>
            <td>English B1-Teacups</td>
            <td>
            <input type="checkbox" name="present" value="Lesson1"></input>
            </td>
            <td>
            <input type="checkbox" name="present" value="Lesson2"></input>
            </td>
            <td>
            <input type="checkbox" name="present" value="Lesson3"></input>
            </td>
            
          </tr>
          <tr>
            <td>Adriana Jackson</td>
            <td>0447</td>
            <td>English B2-Tigers</td>
            <td>
            <input type="checkbox" name="present" value="Lesson1"></input>
            </td>
            <td>
            <input type="checkbox" name="present" value="Lesson2"></input>
            </td>
            <td>
            <input type="checkbox" name="present" value="Lesson3"></input>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
          <input type="submit" value="Submit"/>
          </td>
          <td>
          <input type="submit" value="Submit"/>
          </td>
          <td>
          <input type="submit" value="Submit"/>
          </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Roster;
