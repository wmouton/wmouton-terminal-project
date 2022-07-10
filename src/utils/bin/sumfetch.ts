import config from '../../../config.json';

const sumfetch = async (): Promise<string> => {
  if (config.ascii === 'l33th') {
    return `                                           <<=============>>                                            
             @@@@@@@@@@@@@                  &nbsp;<span style="color: cyan"></span>  sumfetch: summary display
        @@@@               @@@@             <<=============>>
      @@                       @@           <span style="color: lightgreen"> ABOUT</span>
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
@@        @@@                        @@     爵 <u><a href="${config.portfolio}" target="_blank">Portfolio Website</a></u>
@@                                   @@     ~~~~~~~~~~~
@@             .@@@@@@@@@@.          @@     <span style="color: lightgreen"> CONTACT</span> 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         ~~~~~~~~~~~
        @@@                  @@@ @@         <span style="color: lightgreen"> DONATE</span> 
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@          <u><a href="${config.donate_urls.kofi}" target="_blank">${config.donate_urls.kofi}</a></u>

`;
  } else {
    return `                                            <<=============>>
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                &nbsp;&nbsp;&nbsp;<span style="color: cyan"> sumfetch</span>
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄  ▀▀▓▓▄             <<=============>>
      ▄▓▓▀  ▄▓▓▓▀▓▓▓▀▓▓▄    ▀▀▓▓▄               
    ▓▓▀   ▄▓▀    ▐▓▓  ▀▓▓       ▓▓▄         <span style="color: lightgreen"> ABOUT</span> 
  ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ${config.name}
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.landingPage}" target="_blank">Website</a></u>&nbsp;&bull;&nbsp;<u><a href="${config.portfolio}" target="_blank">Portfolio</a></u>
▐▓                                 ▐▓       ~~~~~~~~~~~
▐▓        > S Y S - T E R M        ▐▓       <span style="color: lightgreen"> CONTACT</span>  
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           ~~~~~~~~~~~
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            <span style="color: lightgreen"> DONATE</span>  
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.donate_urls.kofi}" target="_blank">${config.donate_urls.kofi}</a></u>
                                             <u><a href="${config.donate_urls.eth}" target="_blank">${config.donate_urls.eth}</a></u>

`;
  }
};

export default sumfetch;
