import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const richTexts = [
  {
    content: `**Hello, I am Shibam.**  
A passionate full stack developer from India.  
To know more, grab and slide \n
or use ⬅️ ➡️ keys`,
    path: '/about',
    btn: "Open About"
  },
  {
    id: 2,
    content: `
💼 **Worked at multiple startups**  
👨‍💻 As a **Full Stack Developer**, contributing to both frontend & backend  
⚡ Built fast, scalable, and responsive web applications  
  `,
    path: '/experience',
    btn: 'View Experiences'
  },
  {
    id: 3,
    content: `
🛠️ **Here are a few personal projects I've built:**

- 🌐 Web apps and developer tools  
- 🎨 Focused on performance, design, and accessibility

💡 **I love solving real-world problems with code**.  
Click on **Learn More** to explore!
  `,
    path: '/projects',
    btn: 'Open Projects'
  },
  {
    id: 4,
    content: `
🏆 **Here are some achievements and positions I've held:**

- 👨‍🏫 Campus Lead @ GDSC
- 🥇 Hackathon Finalist & Winner

Always open to sharing and growing together!
  `,
    path: '/achievements',
    btn: 'Show Achevements'
  }
];

function RichTextCard({ currentStage }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrent(currentStage - 1)
  }, [currentStage])

  const handleLearnMore = () => {
    navigate(richTexts[current].path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/30 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-md text-white shadow-xl"
    >
      <div className="space-y-4">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="text-lg font-medium leading-relaxed">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-blue-300">{children}</strong>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="text-base">{children}</li>
            ),
          }}
        >
          {richTexts[current].content}
        </ReactMarkdown>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLearnMore}
          className="mt-6 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 group"
        >
          {richTexts[current].btn}
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default RichTextCard;
