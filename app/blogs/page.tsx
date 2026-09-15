import React from 'react';
import Post from '../components/Post';

const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    shortDescription:
      "Learn the basics of React and understand how components help you build modern user interfaces.",
  },
  {
    id: 2,
    title: "Understanding JavaScript ES6",
    shortDescription:
      "Explore important ES6 features such as arrow functions, destructuring, spread operators, and template literals.",
  },
  {
    id: 3,
    title: "Why TypeScript Matters",
    shortDescription:
      "Discover how TypeScript adds static typing to JavaScript and helps developers write safer code.",
  },
  {
    id: 4,
    title: "Introduction to Next.js",
    shortDescription:
      "Learn what Next.js is and how it simplifies building fast, scalable React applications.",
  },
  {
    id: 5,
    title: "Understanding Server Components",
    shortDescription:
      "Learn how server components work and why they are useful for building modern Next.js applications.",
  },
  {
    id: 6,
    title: "Building Responsive Websites",
    shortDescription:
      "Learn practical techniques for creating websites that work smoothly across mobile, tablet, and desktop devices.",
  },
  {
    id: 7,
    title: "Introduction to REST APIs",
    shortDescription:
      "Understand how REST APIs work and how frontend applications communicate with backend services.",
  },
  {
    id: 8,
    title: "Git and GitHub for Beginners",
    shortDescription:
      "Learn the fundamentals of Git and GitHub for tracking code changes and collaborating with other developers.",
  },
  {
    id: 9,
    title: "How to Improve Website Performance",
    shortDescription:
      "Explore simple techniques for making websites faster, more efficient, and more user-friendly.",
  },
  {
    id: 10,
    title: "Common Mistakes Beginner Developers Make",
    shortDescription:
      "Discover common development mistakes and practical ways to improve your coding skills and workflow.",
  },
];

const page = () => {
    return (
        <div>
            <h2>Our Blogs</h2>
            {
                blogsData.map((post) => <Post key={post.id} post = {post} />)
            }
        </div>
    );
};

export default page;