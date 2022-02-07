import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) => (

  <div>{props.students.map((student,id) => {
     //{console.log('Props = ', student)};
    return <ListElement student={student} key={student.id} />
  })}
    {/* <span>
      <div>Josh</div>
      <img src='https://ca.slack-edge.com/T02DNK3PH-U01ATPUTRH8-0c6b5a486403-512'></img>
    </span> */}
  </div>
);

export default List;