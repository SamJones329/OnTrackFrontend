import * as React from 'react';
import ClassListItem from '../../components/ClassListItem/ClassListItem';

export default function CourseList(props: {children?: React.ReactNode}) {
    return (
      <div>
        <div>  
          <ClassListItem></ClassListItem>
        </div>
        {props.children}
      </div>
    )
}