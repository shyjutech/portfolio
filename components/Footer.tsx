import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-slate-300/10">
      <div className="container mx-auto max-w-6xl py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <div className="flex justify-center gap-6 mb-4">
          {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shyju M. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
            Website: <a href="https://www.shyjutalks.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-400">www.shyjutalks.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
