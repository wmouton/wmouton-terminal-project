// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
// import lthImage from '../../img/l33th-original.jpg';
// import linux from '../../img/linux.svg';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 6 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c +=
        Object.keys(bin).sort()[i - 1] + ' <span style="color: #fff">ꞏ</span> ';
    }
  }
  return `\n<span style='color: #02F058'>Welcome! Here are all the available commands:</span>
\n<span style='color: cyan'>${c}</span>\n
[<span style='color: cyan'>tab</span>]: trigger completion.
[<span style='color: cyan'>ctrl+l</span>]/<span style='color: cyan'>clear</span>: clear terminal.\n
Type '<span style='color: cyan'>sumfetch</span>' to display a short summary.<br/>
Type '<span style='color: cyan'>documentation</span>' for the full commands documentation.<br/><br/>
`;
};

// Redirection
export const website = async (args: string[]): Promise<string> => {
  window.open(`${config.landingPage}`);
  return 'Opening Landing Page Website...';
};

export const portfolio = async (args: string[]): Promise<string> => {
  window.open(`${config.portfolio}`);
  return 'Opening Portfolio Website...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `<br/><span style='color: cyan'>Hello, I am ${config.name}. Welcome to my terminal!</span>
<br/> <span style='color: cyan'>>></span> More about me:

<span style='color: lightgreen'>I am a full-stack software engineer with a passion \nfor technology. I build sleek, modern and stylish, fast and \nscalable web applications using advanced technologies like \nReactJS, TypeScript, NextJS, SASS, TailwindCSS, Chakra-UI and Go. \nI am familiar with Machine Learning and Blockchain Development \nand I have been a Linux user for over 7 years. I use Linux as \nmy primary operating system and as a daily driver. <br />\nI love Artificial Intelligence and its limitless potential, \nI believe it to be the future of IoT and Web3. I don't see \nmyself as a "programmer", I see myself as a problem solver, \nand I use programming as a tool to solve problems. I have a \npassion for technology and my main goal is to build great \nsoftware solutions with the potential to change the world.</span>

<br/>
'<span style='color: cyan'>sumfetch</span>' - short summary.
'<span style='color: cyan'>github</span>' - view my github profile.
'<span style='color: cyan'>readme</span>' - my github readme file.<br/><br/>`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `\n<span style='color: lightgreen'>Thank you for your interest. Any support is always appreciated.</span>\n
You can support my work here: <br/>
- <u><a class='text-light-blue dark:text-dark-blue underline' href='${config.donate_urls.kofi}' target='_blank'><span style='color: cyan'>https://ko-fi.com/wmouton</span></a></u><br/>
- <u><a class='text-light-blue dark:text-dark-blue underline' href='${config.donate_urls.eth}' target='_blank'><span style='color: cyan'>https://wmouton-eth.netlify.app</span></a></u><br/>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const projects = async (args: string[]): Promise<string> => {
  window.open(`${config.projects}/`);
  return 'Opening projects...';
};

export const readme = async (args: string[]): Promise<string> => {
  window.open(`${config.readmeUrl}/`);
  return 'Opening README file...';
};

export const documentation = async (args: string[]): Promise<string> => {
  return `
<span style='color: cyan'>status</span>
    - Displays current status.

<span style='color: cyan'>about</span>
    - Displays some information about me.

<span style='color: cyan'>api</span>
    - Opens the official L33TH API.

<span style='color: cyan'>banner</span>
    - Displays the WM banner.

<span style='color: cyan'>bing</span>
    - Opens a bing search (example: bing harry potter)

<span style='color: cyan'>brand</span>
    - Displays the official L33TH brand.

<span style='color: cyan'>cd</span>
    - Enter into a directory (example: cd Documents).

<span style='color: cyan'>crypto</span>
    - Displays cryptocurrencies I use.

<span style='color: cyan'>curl_api</span>
    - Displays the API JSON data in the terminal.

<span style='color: cyan'>date</span>
    - Displays the current date and time.

<span style='color: cyan'>documentation</span>
    - Shows the full commands documentation.

<span style='color: cyan'>donate</span>
    - The donate command opens the donation options.

<span style='color: cyan'>duckduckgo</span>
    - Opens a duckduckgo search (example: duckduckgo harry potter)

<span style='color: cyan'>echo</span>
    - Echos any command back to you (example: echo hello world)

<span style='color: cyan'>emacs</span>
    - Opens the emacs text editor.

<span style='color: cyan'>email</span>
    - Opens default email application.

<span style='color: cyan'>experience</span>
    - Shows my previous occupations.

<span style='color: cyan'>hackerrank</span>
    - Opens my hackerrank page.

<span style='color: cyan'>github</span>
    - Opens my github page.

<span style='color: cyan'>google</span>
    - Opens a google search (example: google harry potter)

<span style='color: cyan'>help</span>
    - The help command displays all available commands.

<span style='color: cyan'>hobbies</span>
    - Displays my hobbies.

<span style='color: cyan'>linkedin</span>
    - Opens my linkedin profile.

<span style='color: cyan'>ls</span>
    - Lists all available directories.

<span style='color: cyan'>name</span>
    - Displays this terminal administrator's name.

<span style='color: cyan'>nvim</span>
    - Opens the nvim text editor (If available).

<span style='color: cyan'>website</span>
    - Opens my official developer landing page website.

<span style='color: cyan'>portfolio</span>
    - Opens my official developer portfolio website.

<span style='color: cyan'>projects</span>
    - Opens a page with all my deployed projects.

<span style='color: cyan'>readme</span>
    - Opens my github readme file.

<span style='color: cyan'>reddit</span>
    - Opens a reddit search (example: reddit harry potter)

<span style='color: cyan'>skills</span>
    - Displays my professional skillset.

<span style='color: cyan'>sublime</span>
    - Opens the sublime-text text editor (If available).

<span style='color: cyan'>sudo</span>
    - This sudo command attempts to activate root privileges.

<span style='color: cyan'>sumfetch</span>
    - This will display a short summary about me.

<span style='color: cyan'>vi</span>
    - Opens the vi-text text editor (If available).

<span style='color: cyan'>vim</span>
    - Opens the vim-text text editor (If available).

<span style='color: cyan'>vscode</span>
    - Opens the vscode ide download page.

<span style='color: cyan'>wallets</span>
    - Displays my cryptocurrency wallets.

<span style='color: cyan'>whoami</span>
    - Displays the name of the current terminal user.\n\n
`;
};

export const experience = async (args: string[]): Promise<string> => {
  return '\nOccupations: <span style="color:cyan">Software Engineer, Web Developer, Web Designer\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linux Security Expert, Blockchain Specialist\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technology Consultant, Business Consultant\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CTO, CEO.</span>\n\n';
};

export const curl_api = async (args: string[]): Promise<string> => {
  return `\n[
    {
      "id": 1,
      "brand": "l33th",
      "name": "WMouton",
      "description": "Software Engineer, Blockchain Developer, Artificial Intelligence Researcher.",
      "mainStack": "ReactJS, TypeScript, SASS, Tailwind, Bootstrap, Material-UI, Go, Bash, MongoDB.",
      "profession": "Software Engineering",
      "beverages": "Coffee, Water, Tea",
      "website": "https://wmouton.netlify.app",
      "primaryFocus": {
        "focusWeb": "Web Development",
        "focusWeb3": "Blockchain Development, Cryptocurrency, Decentralization.",
        "focusAI": "Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks.",
        "image": "https://wmouton.netlify.app/static/media/l33th-code-lite.f1405f71.png"
      },
      "personal": {
        "jobStatus": "Available for hire",
        "phoneNumber": "+27 61 446 7497",
        "location": "Northern Cape, SA",
        "currency": "ZAR",
        "cryptocurrency": "ETH, BTC",
        "email": "wmouton.dev@gmail.com"
      },
      "favoriteTools": {
        "Shell": "ZSH",
        "Terminal": "Terminator",
        "operatingSystems": "Debian, Arch, RedHat, Windows",
        "codeENV": "VSCode, Sublime-Text, Replit, GoLand, WebStorm, PyCharm, Atom.",
        "hosting": "Heroku, Netlify, GitHub Pages, Firebase, AWS, Docker",
        "browsers": "Brave, Firefox, Chrome",
        "aiTools": "Anaconda-Navigator, Jupyter Notebook, Google Colab, TensorFlow, Keras, Numpy, Pandas, Scikit-Learn, PyTorch."
      },
      "favDevStack": {
        "frontEnd": "HTML, CSS, JavaScript, ReactJS, TypeScript, NextJS, SASS, Tailwind, Bootstrap, MUI",
        "backend": "Linux, Go, Python, Solidity, MongoDB, PostgreSQL, SQLite3, Postman.",
        "familiar": "C, Bash, NodeJS, React Native, JQuery, Bulma, GatsbyJS, Graphql, Docker."
      },
      "os": {
        "primaryOS": "Ubuntu",
        "favOperatingSystems": "Ubuntu, Mint, Manjaro, Fedora, Parrot, Qubes, Tails, Kali, Zorin, Garuda, MacOS.",
        "desktopENVs": "Mate, XFCE, KDE Plasma, GNOME, Deepin.",
        "favCustomKernels": "XanMod, Liquorix.",
        "dailyDrivers": "Ubuntu, Windows 11"
      },
      "socials": {
        "linkedIn": "https://linkedin.com/in/wmouton",
        "github": "https://github.com/l33th",
        "hackerrank": "https://hackerrank.com/wmouton_dev",
        "twitter": "https://twitter.com/l33th_dev",
        "skype": "https://join.skype.com/invite/zciaB7cZUOha",
        "whatsapp": "https://wa.me/message/YEQKXSGRNOZ7P1",
        "kofi": "https://ko-fi.com/wmouton"
      }
    }
  ]\n\n`;
};

export const status = async (args: string[]): Promise<string> => {
  return '\nStatus: <span style="color:cyan">Available For Hire</span>\n\n';
};

export const name = async (args: string[]): Promise<string> => {
  return '\nName: <span style="color:cyan">W Mouton</span>\n\n';
};

export const wallets = async (args: string[]): Promise<string> => {
  return '\nBitcoin:&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:cyan">1PwHY22Y7m9g2EELn9xm1RBeFxR5SZq8g7</span>\nEthereum:&nbsp;&nbsp;&nbsp;<span style="color:cyan">0x09ebA546853e1B08E3A73A99437873086D7F09Cc</span>\nDAI:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:cyan">1PwHY22Y7m9g2EELn9xm1RBeFxR5SZq8g7</span>\nDOGE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:cyan">DHHQV5bGBDRKTXGb75uYRc1MDkJX2X7hfU</span>\n\n';
};

export const crypto = async (args: string[]): Promise<string> => {
  return '\nCrypto I Use: <span style="color:cyan">Bitcoin, Ethereum, USDC</span>\n\n';
};

export const brand = async (args: string[]): Promise<string> => {
  return '\nBrand: <span style="color:cyan">l33th</span>\n\n';
};

export const hobbies = async (args: string[]): Promise<string> => {
  return '\n<<<=======>>>\n&nbsp;&nbsp;&nbsp;<span style="color: cyan">HOBBIES</span>\n<<<=======>>>\n\nHobbies: <span style="color: cyan">Reading, Coding, Internet Browsing\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Gaming, Exercise.</span>\n\n';
};

export const hackerrank = async (args: string[]): Promise<string> => {
  window.open(`https://hackerrank.com/${config.social.hackerrank}/`);
  return 'Opening hackerrank...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const api = async (args: string[]): Promise<string> => {
  window.open('https://l33th.vercel.app/info');
  return `Opening The Official L33TH API...`;
};

export const skills = async (args: string[]): Promise<string> => {
  return `\n<<<========>>>\n\t<span style="color: cyan">SKILLS</span>\n<<<========>>>\n\nFront-End: <span style="color: cyan">JavaScript, ReactJS, TypeScript, SASS,\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TailwindCSS, Framer-Motion, Chakra-UI.</span>\n
Back-End: <span style="color: cyan">&nbsp;Linux, Go, Python, Solidity, Bash, MongoDB\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NodeJS, PostgreSQL, SQLite3, Postman, Mockoon.</span>\n
Familiar: <span style="color: cyan">&nbsp;C, React Native, Chakra-UI, Bulma, Solidity\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GatsbyJS, Graphql, Docker.</span>\n
  `;
};

export const ls = async (args: string[]): Promise<string> => {
  return ` Files
 Documents
 Downloads
 Music
 Pictures
 Videos`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `\nUnfortunately, I can't afford more directories.
If you would like to help, you can type '<span style='color: cyan'>donate</span>'.
You can also type '<span style='color: cyan'>wallets</span> to donate cryptocurrency.
<br/>`;
};

export const date = async (args: string[]): Promise<string> => {
  return '\n' + new Date().toString() + '\n\n';
};

export const vi = async (args: string[]): Promise<string> => {
  return `Woah, you still use 'vi'? Just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. How about 'sublime-text'?`;
};

export const sublime = async (args: string[]): Promise<string> => {
  return `'Sublime-Text' is great, but give VSCode a go.`;
};

export const vscode = async (args: string[]): Promise<string> => {
  window.open('https://code.visualstudio.com/');
  return `Opening WMouton VSCode...`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. Why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `You know what? Just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `<span style='color: yellow'>Permission denied:</span> with little power comes... no responsibility?`;
};

// Banner
// export const banner = (args?: string[]): string => {
//   return `
//   <div style="display: inline-flex; align-items: center">
//   <img style="margin-right: 2em;" width: "150px;" padding-top: "10px;" src=${linux.src} />
//   <span style="font-size: 20px;">
//   ██╗     ██████╗ ██████╗ ████████╗██╗  ██╗
//   ██║     ╚════██╗╚════██╗╚══██╔══╝██║  ██║
//   ██║      █████╔╝ █████╔╝   ██║   ███████║
//   ██║      ╚═══██╗ ╚═══██╗   ██║   ██╔══██║
//   ███████╗██████╔╝██████╔╝   ██║   ██║  ██║
//   ╚══════╝╚═════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝
//   </span>
//    </div>
//   <p style="padding-top: 0px;">
//     <span style="color: cyan">This is a desktop terminal application, please view in desktop.</span>\n
//     Type '<span style="color: #02F058;">help</span>' to see the list of available commands.
//     Type '<span style="color: #02F058;">sumfetch</span>' to display summary.
//     Type '<span style="color: #02F058;">portfolio</span>' or click <u><a style="color: cyan; underline" href="${config.portfolio}">here</a></u> to go back to the Portfolio Website.
//   </p>
// `;
// };

export const banner = (args?: string[]): string => {
  return `
  <div style='display: inline-flex; align-items: center'>
  <span style='font-size: 30px; color: #D3D7CF;'>
 ██╗    ██╗███╗   ███╗
 ██║    ██║████╗ ████║
 ██║ █╗ ██║██╔████╔██║
 ██║███╗██║██║╚██╔╝██║
 ╚███╔███╔╝██║ ╚═╝ ██║
  ╚══╝╚══╝ ╚═╝     ╚═╝
              <span style='font-size: 10px; text-align: right !important; margin-top: 0px'>Copyright © 2022, WMouton</span></span>\n
  </span>
  </div>
  <p style='padding-top: 0px; padding-bottom: 0px;'>
    <span style='color: yellow'>PLEASE VIEW ON DESKTOP FOR A BETTER EXPERIENCE</span>\n
    Type '<span style='color: #02F058;'>help</span>' to see the list of available commands.
    Type '<span style='color: #02F058;'>sumfetch</span>' for a short summary of me.
    Type '<span style='color: #02F058;'>website</span>' or click <u><a style='color: cyan; underline' href='${config.landingPage}'>here</a></u> for the landing page.
    Type '<span style='color: #02F058'>documentation</span>' for the full documentation.
  </p>
`;
};
