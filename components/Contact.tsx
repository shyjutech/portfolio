import React from 'react';
import Section from './common/Section';
import { MailIcon, PhoneIcon, TelegramIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-lg text-slate-400">
          Have a question, an opportunity, or just want to say hi? Feel free to reach out.
        </p>
        
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
            <a href="mailto:shyjuzz@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-cyan-300 transition-colors">
                <MailIcon className="w-6 h-6 text-cyan-400" />
                <span>shyjuzz@gmail.com</span>
            </a>
            <a href="tel:+917907167068" className="flex items-center gap-3 text-slate-400 hover:text-cyan-300 transition-colors">
                <PhoneIcon className="w-6 h-6 text-cyan-400" />
                <span>+91 7907167068</span>
            </a>
        </div>
        
        <div className="mt-12 bg-slate-800/50 border-2 border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-200">Join the Community</h3>
            <p className="mt-2 text-slate-400">
                Get free app ideas, resources, and monetization tips. Join the dev2earn Telegram channel.
            </p>
            <a href="https://t.me/dev2earn" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-sky-500 text-white font-bold py-3 px-6 rounded-full hover:bg-sky-600 transition-all shadow-lg transform hover:scale-105">
                <TelegramIcon className="w-5 h-5"/>
                Join dev2earn
            </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;