import React, { useEffect, useState } from 'react';
import { getAllCourseList } from '../../../_utils/GlobalApi';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,  } from '../../../../components/ui/select';
import CourseItem from './CourseItem';
import Link from 'next/link';

function CourseList() {
    const [courseList, setCourseList] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courses = await getAllCourseList();
                console.log(courses);
                setCourseList(courses?.courseLists);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className='p-5 bg-white rounded-lg mt-5 '>
            <div className='flex items-center justify-between'>
                <h2 className='text-[20px] font-bold text-primary'>
                    All Courses
                </h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">All</SelectItem>
                        <SelectItem value="dark">Paid</SelectItem>
                        <SelectItem value="system">Free</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                {courseList?.length>0? courseList.map((item,index)=>(
                    <Link href={'/course-preview/'+item.slug} >
                    <div key={index}>
                        <CourseItem course={item}/>
                    </div>
                    </Link>
                ))
                :
                [1,2,3,4].map((item,index)=>(
                    <div key={index} className='w-full h-[240px] rounded-xl bg-slate-200 animate-pulse'>

                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default CourseList;
