import {whiteListIframe} from 'pretty-text/sanitizer';

player.vimeo.com
whiteListIframe(/^(https?:)?\/\/player\.vimeo\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/discordapp\.com\/.+/i);
