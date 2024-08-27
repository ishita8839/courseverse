const MASTER_URL = process.env.NEXT_PUBLIC_MASTER_URL;
import { gql, request } from "graphql-request";

const token = process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN;

export const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists (first: 20, orderBy: createdAt_DESC) {
        name
        id
        free
        description
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalChapters
        slug
      }
    }
  `;


  const result = await request(MASTER_URL, query, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export const getSideBanner = async () => {
  const query = gql`
  query GetSideBanner {
  sideBannners {
    id
    name
    banner {
      id
      url
    }
    url
  }
}
  `
  const result = await request(MASTER_URL, query, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
}

export const getCourseById = async (courseId) => {
  const query = gql`
  query MyQuery {
      courseList(where: {slug: "${courseId}"}) {
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        description
        free
        id
        name
        sourceCode
        tag
        totalChapters
      }
    }
  `

  const result = await request(MASTER_URL, query, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
}

export const enrollToCourse = async (courseId, email) => {
  const query = gql`
    mutation MyMutation {
  createUserEnrollCourse(
    data: {courseId: "${courseId}", userEmail: "${email}", courseList: {connect: {slug: "${courseId}"}}}
  ) {
    id
  }
  publishManyUserEnrollCoursesConnection {
    edges {
      node {
        id
      }
    }
  }
}
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("GraphQL request error:", error);
    throw error;
  }
};

