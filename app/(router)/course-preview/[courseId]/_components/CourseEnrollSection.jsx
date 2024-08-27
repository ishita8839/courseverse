import { enrollToCourse } from '../../../../_utils/GlobalApi';
import { Button } from '../../../../../components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function CourseEnrollSection({ courseInfo }) {
  const membership = false; // You might want to handle membership logic
  const { user } = useUser();
  const router = useRouter();

  const onEnrollCourse = async () => {
    const courseId = courseInfo?.slug || courseInfo?.id;
    const userEmail = user?.primaryEmailAddress?.emailAddress;

    console.log("Course ID:", courseId);
    console.log("User Email:", userEmail);

    if (!courseId || !userEmail) {
      console.error("Missing courseId or email.");
      return;
    }

    try {
      const res = await enrollToCourse(courseId, userEmail);
      if (res && res.createUserEnrollCourse) {
        router.push('/watch-course/' + res.createUserEnrollCourse.id);
      }
    } catch (error) {
      console.error("Enrollment error:", error);
    }
  };

  return (
    <div className='p-3 text-center rounded-sm bg-black'>
      <h2 className='font-medium text-white text-[20px]'>Enroll to the Course</h2>
      {user ? (
        membership || courseInfo.free ? (
          <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-gray-300 text-[15px]'>Enroll Now to Start Learning and Building your skills...</h2>
            <Button
              className='bg-white text-primary hover:bg-gray-200 hover:text-primary'
              onClick={onEnrollCourse}
            >
              Enroll Now
            </Button>
          </div>
        ) : (
          <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-gray-300 text-[15px]'>Buy Monthly Membership and Get Access to All Courses</h2>
            <Button className='bg-white text-primary hover:bg-gray-200 hover:text-primary'>
              Buy Membership at Just Rs.5
            </Button>
          </div>
        )
      ) : (
        <div className='flex flex-col gap-3 mt-3'>
          <h2 className='text-gray-300 text-[15px]'>Enroll Now to Start Learning and Building your skills...</h2>
          <Link href='/sign-in'>
            <Button className='bg-white text-primary hover:bg-gray-200 hover:text-primary'>
              Enroll Now
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollSection;
