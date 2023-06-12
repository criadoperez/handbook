"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9354],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},279:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"devops-guide-quickstart",title:"Self-Hosting Guide - Debian/Ubuntu server",sidebar_label:"Debian/Ubuntu server"},l=void 0,p={unversionedId:"devops-guide/devops-guide-quickstart",id:"devops-guide/devops-guide-quickstart",title:"Self-Hosting Guide - Debian/Ubuntu server",description:"Follow these steps for a quick Jitsi-Meet installation on a Debian-based GNU/Linux system.",source:"@site/docs/devops-guide/quickstart.md",sourceDirName:"devops-guide",slug:"/devops-guide/devops-guide-quickstart",permalink:"/handbook/docs/devops-guide/devops-guide-quickstart",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/quickstart.md",tags:[],version:"current",lastUpdatedAt:1686557745,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"devops-guide-quickstart",title:"Self-Hosting Guide - Debian/Ubuntu server",sidebar_label:"Debian/Ubuntu server"},sidebar:"docs",previous:{title:"Requirements",permalink:"/handbook/docs/devops-guide/devops-guide-requirements"},next:{title:"openSUSE",permalink:"/handbook/docs/devops-guide/devops-guide-opensuse"}},u={},d=[{value:"Required packages and repository updates",id:"required-packages-and-repository-updates",level:2},{value:"Install Jitsi Meet",id:"install-jitsi-meet",level:2},{value:"Domain of your server and set up DNS",id:"domain-of-your-server-and-set-up-dns",level:3},{value:"Set up the Fully Qualified Domain Name (FQDN) (optional)",id:"set-up-the-fully-qualified-domain-name-fqdn-optional",level:3},{value:"Add the Prosody package repository",id:"add-the-prosody-package-repository",level:3},{value:"Add the Jitsi package repository",id:"add-the-jitsi-package-repository",level:3},{value:"Setup and configure your firewall",id:"setup-and-configure-your-firewall",level:3},{value:"Using SSH",id:"using-ssh",level:4},{value:"Forward ports via your router",id:"forward-ports-via-your-router",level:4},{value:"TLS Certificate",id:"tls-certificate",level:3},{value:"Install Jitsi Meet",id:"install-jitsi-meet-1",level:3},{value:"Access Control",id:"access-control",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:4},{value:"Systemd details",id:"systemd-details",level:5},{value:"Confirm that your installation is working",id:"confirm-that-your-installation-is-working",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"Debugging problems",id:"debugging-problems",level:2},{value:"Additional Functions",id:"additional-functions",level:2},{value:"Adding sip-gateway to Jitsi Meet",id:"adding-sip-gateway-to-jitsi-meet",level:3},{value:"Install Jigasi",id:"install-jigasi",level:4},{value:"Reload Jitsi Meet",id:"reload-jitsi-meet",level:4}],c={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Follow these steps for a quick Jitsi-Meet installation on a Debian-based GNU/Linux system.\nThe following distributions are supported out-of-the-box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debian 10 (Buster) or newer"),(0,r.kt)("li",{parentName:"ul"},"Ubuntu 20.04 (Focal Fossa) or newer (Ubuntu 18.04 can be used, but Prosody version must be updated to 0.11+ before installation)")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Many of the installation steps require ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," access. So it's recommended to have ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"root")," access to your system.")),(0,r.kt)("h2",{id:"required-packages-and-repository-updates"},"Required packages and repository updates"),(0,r.kt)("p",null,"You will need the following packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gnupg2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nginx-full")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo")," => ",(0,r.kt)("strong",{parentName:"li"},"Only needed if you use ",(0,r.kt)("inlineCode",{parentName:"strong"},"sudo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"curl")," => ",(0,r.kt)("strong",{parentName:"li"},"Or")," ",(0,r.kt)("inlineCode",{parentName:"li"},"wget")," ",(0,r.kt)("strong",{parentName:"li"},"to ",(0,r.kt)("a",{parentName:"strong",href:"#add-the-jitsi-package-repository"},"Add the Jitsi package repository")))),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"OpenJDK 11 must be used.")),(0,r.kt)("p",null,"Make sure your system is up-to-date and required packages are installed:"),(0,r.kt)("p",null,"Run as ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," or with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Retrieve the latest package versions across all repositories\nsudo apt update\n\n# Ensure support for apt repositories served via HTTPS\nsudo apt install apt-transport-https\n")),(0,r.kt)("p",null,"On Ubuntu systems, Jitsi requires dependencies from Ubuntu's ",(0,r.kt)("inlineCode",{parentName:"p"},"universe")," package repository.  To ensure this is enabled, run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-add-repository universe\n")),(0,r.kt)("p",null,"Retrieve the latest package versions across all repositories:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,r.kt)("h2",{id:"install-jitsi-meet"},"Install Jitsi Meet"),(0,r.kt)("h3",{id:"domain-of-your-server-and-set-up-dns"},"Domain of your server and set up DNS"),(0,r.kt)("p",null,"Decide what domain your server will use. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"meet.example.org"),"."),(0,r.kt)("p",null,"Set a DNS A record for that domain, using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"your server's public IP address, if it has its own public IP; or"),(0,r.kt)("li",{parentName:"ul"},"the public IP address of your router, if your server has a private (RFC1918) IP address (e.g. 192.168.1.2) and connects through your router via Network Address Translation (NAT).")),(0,r.kt)("p",null,"If your computer/server or router has a dynamic IP address (the IP address changes constantly), you can use a dynamic dns-service instead. Example ",(0,r.kt)("a",{parentName:"p",href:"https://www.duckdns.org/"},"DuckDNS"),"."),(0,r.kt)("p",null,"DNS Record Example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Record Type")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Hostname")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Public IP")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"TTL (Seconds)")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"meet.example.org")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Your Meeting Server Public IP (",(0,r.kt)("inlineCode",{parentName:"td"},"x.x.x.x"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1800"))))),(0,r.kt)("h3",{id:"set-up-the-fully-qualified-domain-name-fqdn-optional"},"Set up the Fully Qualified Domain Name (FQDN) (optional)"),(0,r.kt)("p",null,"If the machine used to host the Jitsi Meet instance has a FQDN (for example ",(0,r.kt)("inlineCode",{parentName:"p"},"meet.example.org"),") already set up in DNS, you can set it with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo hostnamectl set-hostname meet.example.org\n")),(0,r.kt)("p",null,"Then add the same FQDN in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1 localhost\nx.x.x.x meet.example.org\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"x.x.x.x")," is your server's public IP address.")),(0,r.kt)("p",null,"Finally on the same machine test that you can ping the FQDN with:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'ping "$(hostname)"')),(0,r.kt)("p",null,"If all worked as expected, you should see:\n",(0,r.kt)("inlineCode",{parentName:"p"},"meet.example.org")),(0,r.kt)("h3",{id:"add-the-prosody-package-repository"},"Add the Prosody package repository"),(0,r.kt)("p",null,"This will add the Prosody repository so that an up to date Prosody is installed, which is necessary for features including the lobby feature."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ubuntu 18.04 and 20.04")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo deb http://packages.prosody.im/debian $(lsb_release -sc) main | sudo tee -a /etc/apt/sources.list\nwget https://prosody.im/files/prosody-debian-packages.key -O- | sudo apt-key add -\napt install lua5.2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ubuntu 22.04")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sL https://prosody.im/files/prosody-debian-packages.key | sudo tee /etc/apt/keyrings/prosody-debian-packages.key\necho "deb [signed-by=/etc/apt/keyrings/prosody-debian-packages.key] http://packages.prosody.im/debian $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/prosody-debian-packages.list\napt install lua5.2\n')),(0,r.kt)("h3",{id:"add-the-jitsi-package-repository"},"Add the Jitsi package repository"),(0,r.kt)("p",null,"This will add the jitsi repository to your package sources to make the Jitsi Meet packages available."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ubuntu 18.04 and 20.04")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://download.jitsi.org/jitsi-key.gpg.key | sudo sh -c 'gpg --dearmor > /usr/share/keyrings/jitsi-keyring.gpg'\necho 'deb [signed-by=/usr/share/keyrings/jitsi-keyring.gpg] https://download.jitsi.org stable/' | sudo tee /etc/apt/sources.list.d/jitsi-stable.list > /dev/null\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ubuntu 22.04")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sL https://download.jitsi.org/jitsi-key.gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/jitsi-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/jitsi-keyring.gpg] https://download.jitsi.org stable/" | sudo tee /etc/apt/sources.list.d/jitsi-stable.list\n')),(0,r.kt)("p",null,"Update all package sources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,r.kt)("h3",{id:"setup-and-configure-your-firewall"},"Setup and configure your firewall"),(0,r.kt)("p",null,"The following ports need to be open in your firewall, to allow traffic to the Jitsi Meet server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"80 TCP")," => For SSL certificate verification / renewal with Let's Encrypt. ",(0,r.kt)("strong",{parentName:"li"},"Required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"443 TCP")," => For general access to Jitsi Meet. ",(0,r.kt)("strong",{parentName:"li"},"Required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"10000 UDP")," => For General Network Audio/Video Meetings. ",(0,r.kt)("strong",{parentName:"li"},"Required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"22 TCP")," => For Accessing your Server using SSH (change the port accordingly if it's not 22). ",(0,r.kt)("strong",{parentName:"li"},"Required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3478 UDP")," => For querying the stun server (coturn, optional, needs ",(0,r.kt)("inlineCode",{parentName:"li"},"config.js")," change to enable it)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"5349 TCP")," => For fallback network video/audio communications over TCP (when UDP is blocked for example), served by coturn. ",(0,r.kt)("strong",{parentName:"li"},"Required"))),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"ufw"),", you can use the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw allow 10000/udp\nsudo ufw allow 22/tcp\nsudo ufw allow 3478/udp\nsudo ufw allow 5349/tcp\nsudo ufw enable\n")),(0,r.kt)("p",null,"Check the firewall status with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ufw status verbose\n")),(0,r.kt)("h4",{id:"using-ssh"},"Using SSH"),(0,r.kt)("p",null,"For more details on using and hardening SSH access, see the corresponding ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.debian.org/SSH"},"Debian")," or ",(0,r.kt)("a",{parentName:"p",href:"https://help.ubuntu.com/community/SSH/OpenSSH/Configuring"},"Ubuntu")," documentation."),(0,r.kt)("h4",{id:"forward-ports-via-your-router"},"Forward ports via your router"),(0,r.kt)("p",null,"If you are running Jitsi Meet on a server ",(0,r.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/faq#how-to-tell-if-my-server-instance-is-behind-nat"},"behind NAT"),", forward the ports on your router to your server's IP address."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": if participants cannot see or hear each other, double check your firewall / NAT rules."),(0,r.kt)("h3",{id:"tls-certificate"},"TLS Certificate"),(0,r.kt)("p",null,"In order to have encrypted communications, you need a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},"TLS certificate"),". "),(0,r.kt)("p",null,"During installation of Jitsi Meet you can choose between different options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The recommended option is to choose Let's Encrypt Certificate option")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"But if you want to use a different certificate you should get that certificate first and then install jitsi-meet and choose ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"I want to use my own certificate")),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You could also use the self-signed certificate(",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Generate a new self-signed certificate")),") but this is not recommended for the following reasons:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using a self-signed certificate will result in warnings being shown in your users browsers, because they cannot verify your server's identity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jitsi Meet mobile apps ",(0,r.kt)("em",{parentName:"p"},"require")," a valid certificate signed by a trusted ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Certificate_authority"},"Certificate Authority")," and will not be able to connect to your server if you choose a self-signed certificate."))))),(0,r.kt)("h3",{id:"install-jitsi-meet-1"},"Install Jitsi Meet"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": The installer will check if ",(0,r.kt)("a",{parentName:"p",href:"https://nginx.org/"},"Nginx")," or ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/"},"Apache")," are present (in that order) and configure a virtual host within the web server it finds to serve Jitsi Meet."),(0,r.kt)("p",null,"If you are already running Nginx on port 443 on the same machine, turnserver configuration will be skipped as it will conflict with your current port 443."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# jitsi-meet installation\nsudo apt install jitsi-meet\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SSL/TLS certificate generation:"),"\nYou will be asked about SSL/TLS certificate generation.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#tls-certificate"},"above")," for details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hostname:"),"\nYou will also be asked to enter the hostname of the Jitsi Meet instance. If you have a domain, use the specific domain name, for example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"meet.example.org"),".\nAlternatively you can enter the IP address of the machine (if it is static or doesn't change)."),(0,r.kt)("p",null,"This hostname will be used for virtualhost configuration inside Jitsi Meet and also, you and your correspondents will be using it to access the web conferences."),(0,r.kt)("h3",{id:"access-control"},"Access Control"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Jitsi Meet server:"),"\n",(0,r.kt)("em",{parentName:"p"},"Note"),": By default, anyone who has access to your Jitsi Meet server will be able to start a conference: if your server is open to the world, anyone can have a chat with anyone else.\nIf you want to limit the ability to start a conference to registered users, follow the instructions to set up a ",(0,r.kt)("a",{parentName:"p",href:"secure-domain"},"secure domain"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conferences/Rooms:"),"\nThe access control for conferences/rooms is managed in the rooms, you can set a password on the webpage of the specific room after creation.\nSee the User Guide for details: ",(0,r.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/user-guide/user-guide-start-a-jitsi-meeting"},"https://jitsi.github.io/handbook/docs/user-guide/user-guide-start-a-jitsi-meeting")),(0,r.kt)("h4",{id:"advanced-configuration"},"Advanced configuration"),(0,r.kt)("p",null,"If the installation is on a machine ",(0,r.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/faq#how-to-tell-if-my-server-instance-is-behind-nat"},"behind NAT")," jitsi-videobridge should configure itself automatically on boot. If three way calls do not work, further configuration of jitsi-videobridge is needed in order for it to be accessible from outside."),(0,r.kt)("p",null,"Provided that all required ports are routed (forwarded) to the machine that it runs on. By default these ports are TCP/443 and UDP/10000."),(0,r.kt)("p",null,"The following extra lines need to be added to the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/jitsi/videobridge/sip-communicator.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"org.ice4j.ice.harvest.NAT_HARVESTER_LOCAL_ADDRESS=<Local.IP.Address>\norg.ice4j.ice.harvest.NAT_HARVESTER_PUBLIC_ADDRESS=<Public.IP.Address>\n")),(0,r.kt)("p",null,"And comment the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"org.ice4j.ice.harvest.STUN_MAPPING_HARVESTER_ADDRESSES"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/ice4j/blob/master/doc/configuration.md"},"the documentation of ice4j"),"\nfor details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Systemd/Limits:"),"\nDefault deployments on systems using systemd will have low default values for maximum processes and open files. If the used bridge will expect higher number of participants the default values need to be adjusted (the default values are good for less than 100 participants)."),(0,r.kt)("p",null,"To update the values edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system.conf")," and make sure you have the following values if values are smaller, if not do not update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DefaultLimitNOFILE=65000\nDefaultLimitNPROC=65000\nDefaultTasksMax=65000\n")),(0,r.kt)("p",null,"To check values just run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl show --property DefaultLimitNPROC\nsystemctl show --property DefaultLimitNOFILE\nsystemctl show --property DefaultTasksMax\n")),(0,r.kt)("p",null,"To load the values and check them see ",(0,r.kt)("a",{parentName:"p",href:"#systemd-details"},"below")," for details."),(0,r.kt)("h5",{id:"systemd-details"},"Systemd details"),(0,r.kt)("p",null,"To reload the systemd changes on a running system execute ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl daemon-reload")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart jitsi-videobridge2"),".\nTo check the tasks part execute ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl status jitsi-videobridge2")," and you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasks: XX (limit: 65000)"),".\nTo check the files and process part execute ",(0,r.kt)("inlineCode",{parentName:"p"},"cat /proc/`cat /var/run/jitsi-videobridge/jitsi-videobridge.pid`/limits")," and you should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Max processes             65000                65000                processes\nMax open files            65000                65000                files\n")),(0,r.kt)("h3",{id:"confirm-that-your-installation-is-working"},"Confirm that your installation is working"),(0,r.kt)("p",null,"Launch a web browser (such as Firefox, Chrome or Safari) and enter the hostname or IP address from the previous step into the address bar."),(0,r.kt)("p",null,"If you used a self-signed certificate (as opposed to using Let's Encrypt), your web browser will ask you to confirm that you trust the certificate. If you are testing from the iOS or Android app, it will probably fail at this point, if you are using a self-signed certificate."),(0,r.kt)("p",null,"You should see a web page prompting you to create a new meeting.",(0,r.kt)("br",{parentName:"p"}),"\n","Make sure that you can successfully create a meeting and that other participants are able to join the session."),(0,r.kt)("p",null,"If this all worked, then congratulations!  You have an operational Jitsi conference service."),(0,r.kt)("h2",{id:"uninstall"},"Uninstall"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt purge jigasi jitsi-meet jitsi-meet-web-config jitsi-meet-prosody jitsi-meet-turnserver jitsi-meet-web jicofo jitsi-videobridge2\n")),(0,r.kt)("p",null,"Sometimes the following packages will fail to uninstall properly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jigasi"),(0,r.kt)("li",{parentName:"ul"},"jitsi-videobridge")),(0,r.kt)("p",null,"When this happens, just run the uninstall command a second time and it should be ok."),(0,r.kt)("p",null,"The reason for the failure is that sometimes the uninstall script is faster than the process that stops the daemons. The second run of the uninstall command fixes this, as by then the jigasi or jitsi-videobridge daemons are already stopped."),(0,r.kt)("h2",{id:"debugging-problems"},"Debugging problems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Web Browser:\nYou can try to use a different web browser. Some versions of some browsers are known to have issues with Jitsi Meet. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WebRTC, Webcam and Microphone:\nYou can also visit ",(0,r.kt)("a",{parentName:"p",href:"https://webrtc.github.io/samples/src/content/getusermedia/gum"},"https://webrtc.github.io/samples/src/content/getusermedia/gum")," to test your browser's ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebRTC"},"WebRTC")," support.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Firewall:\nIf participants cannot see or hear each other, double check your firewall / NAT rules.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nginx/Apache:\nAs we prefer the usage of Nginx as webserver, the installer checks first for the presence of Nginx and then for Apache. In case you desperately need to enforce the usage of apache, try pre-setting the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"jitsi-meet/enforce_apache")," for package ",(0,r.kt)("inlineCode",{parentName:"p"},"jitsi-meet-web-config")," on debconf.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Log files:\nTake a look at the various log files:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/var/log/jitsi/jvb.log\n/var/log/jitsi/jicofo.log\n/var/log/prosody/prosody.log\n")),(0,r.kt)("h2",{id:"additional-functions"},"Additional Functions"),(0,r.kt)("h3",{id:"adding-sip-gateway-to-jitsi-meet"},"Adding sip-gateway to Jitsi Meet"),(0,r.kt)("h4",{id:"install-jigasi"},"Install Jigasi"),(0,r.kt)("p",null,"Jigasi is a server-side application acting as a gateway to Jitsi Meet conferences. It allows regular ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Session_Initiation_Protocol"},"SIP")," clients to join meetings and provides transcription capabilities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install jigasi\n")),(0,r.kt)("p",null,"During the installation, you will be asked to enter your SIP account and password. This account will be used to invite the other SIP participants."),(0,r.kt)("h4",{id:"reload-jitsi-meet"},"Reload Jitsi Meet"),(0,r.kt)("p",null,"Launch again a browser with the Jitsi Meet URL and you'll see a telephone icon on the right end of the toolbar. Use it to invite SIP accounts to join the current conference."),(0,r.kt)("p",null,"Enjoy!"))}m.isMDXComponent=!0}}]);