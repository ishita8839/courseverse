"use client";

import React, { useEffect , useState} from 'react';
import CourseVideoDescription from './_components/CourseVideoDescription';
import { getCourseById } from '../../../_utils/GlobalApi';
import CourseEnrollSection from './_components/CourseEnrollSection';
import CourseContentSection from './_components/CourseContentSection';

function CoursePreview({params}) {

  const [courseInfo, setCourseInfo] = useState({});
   
    useEffect(() => {
        params && getCourseInfoById();
    }, [params]);

    const getCourseInfoById = () => {
        getCourseById(params.courseId)
            .then(res => {
                console.log(res);
                setCourseInfo(res?.courseList);
            })
            .catch(error => {
                console.error(error); 
            });
    };

    return courseInfo && (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
            <div className='col-span-2 bg-white p-3'>
                <CourseVideoDescription courseInfo={courseInfo}/>
            </div>
            <div>
               <CourseEnrollSection courseInfo={courseInfo}/>
               <CourseContentSection courseInfo={courseInfo}/>
            </div>
        </div>
    );
}

export default CoursePreview;
