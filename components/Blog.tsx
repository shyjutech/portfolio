import React from 'react';
import Section from './common/Section';
import { BLOG_POSTS_DATA } from '../constants';
import { BlogPost } from '../types';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <a href={post.link} className="group block rounded-lg overflow-hidden glass-card shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 transform hover:-translate-y-2">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover opacity-75 group-hover:opacity-100 transition-opacity" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-cyan-300 transition-colors">{post.title}</h3>
            <p className="text-slate-400 text-sm">{post.excerpt}</p>
            <span className="inline-block mt-4 text-cyan-400 font-semibold group-hover:underline">
                Read More &rarr;
            </span>
        </div>
    </a>
);

const Blog: React.FC = () => {
  return (
    <Section id="blog">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          From My Blog
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Sharing insights on AI, tech, automation, and developer productivity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS_DATA.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default Blog;
