export const home_information = {
    title: 'The website about security',
    subtitle: 'Pope wants to help you keep your things safe',
    card_1: "Learn how to have a strong password with Pope's",
    card_1_bold: 'password generator',
    card_1_p2: 'Dont worry he is going to help you all the way so you get a solid one',
    card_2: 'Also you have an',
    card_2_bold: 'account security',
    card_2_p2: 'section where you are gonna learn how to have a secure account and avoid common mistakes',
    card_3: 'Are you a',
    card_3_bold: 'Frontend developer?',
    card_3_p2: 'Pope gotcha! Our last section is about Front End security'
}

export const password_tips = [
    {
        tip: 'Make your passwords strong'
    },
    {
        tip: 'Try to have your passwords 15-20 characters long.'
    },
    {
        tip: 'Use words, numbers, symbols(.,?¿!-_) and at least one upper case character. '
    },
    {
        tip: 'Try to avoid passwords with public data about you. Basically try not to use easy data like birthday, dog name or your favorite football team '
    },
    {
        tip: 'Create a unique password for each account. I know its annoying to have 133 unique passwords, but at least do it for the important accounts. If one account is hacked, the others are not compromised.'
    }
]

export const account_tips = [
    {
        tip: 'Do not share your account details with anyone else',
    },
    {
        tip: 'Two-Factor authentication is your best friend (2FA)',
        tip_description: 'If the app or website gives you the option to enable 2FA take it, you may find it annoying to confirm each login or transaction but is worth the extra security. Extra tip: Authenicator App > SMS',
    },
    {
        tip: 'Turn on security alerts',
        tip_description: 'Time is important, so turn on important notifications (ex: transactions) to be on the lookout for any suspicious actions.',
    },
    {
        tip: 'Remove apps & browser extensions you dont need',
        tip_description: 'Easy to understand: The more apps and extensions you have installed where you handle sensitive data, higher are the possibilities of risk or information leakage.',
    },
    {
        tip: 'Do not install random apps',
        tip_description: 'Kinda following the third tip worst than having unnecessary apps is to have unknown or untrustworthy apps.',
    },
    {
        tip: 'Update your software',
        tip_description: 'Keeping your browser, operating system, and apps updated is also a way to minimize security risks.',
    },
    {
        tip: 'Avoid suspicious messages, emails and websites (Phishing)',
        tip_description: 'Basically do not reply or click any link from a suspicious account, same with suspicious websites. Extra tip: Sometimes even friendly accounts could be hacked so be careful what you click at any time.'
    }
];

export const frontend_tips = [
    {
        tip: 'Input Validation',
        tip_description: 'One of the fundamental steps in front-end security is proper input validation and sanitization. Sanitize user inputs to protect against Cross-Site Scripting (XSS) attacks.',
        tip_about: 'https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html',
        tip_modal: ''
    },
    {
        tip: 'Content Security Policy (CSP)',
        tip_description: 'Utilize Content Security Policy headers to specify which resources are allowed to load on your website. This can help prevent unauthorized script execution.',
        tip_about: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
        tip_modal: ''
    },
    {
        tip: 'Secure HTTP requests',
        tip_description: 'When making HTTP requests, ensure they are secure by using HTTPS. HTTPS uses TLS to encrypt HTTP traffic, improving safety and security.',
        tip_about: '',
        tip_modal: ''
    },
    {
        tip: 'Rely on specialized frameworks',
        tip_description: 'Modern JavaScript framework significantly reduces risks and has become an essential part of web development (React, Angular, Vue).',
        tip_about: '',
        tip_modal: 'Specialized frameworks with embedded security from trusted sources help against major security-related design flaws. They add necessary pieces to secure web applications against vulnerabilities. For instance, Angular protects against various XSS attack vectors and automatically sanitizes output when using innerHTML.'
    },
    {
        tip: 'Be selective about third-party scripts',
        tip_description: 'It’s necessary to be highly selective as to which widgets or third parties have access to the application, as any malicious vulnerability in their script could make your front end vulnerable.',
        tip_about: '',
        tip_modal: ''
    },
    {
        tip: 'Generate randomized tokens',
        tip_description: 'For every user session, enable the server to generate and send a hidden, randomized SHA-256/512 token to the client.',
        tip_about: '',
        tip_modal: 'The client can save the token so JavaScript can read it. This enables the server to compare and validate the token that gets added in the web application HTTP requests with the token from the user session. If the HTTP request does not contain a token or it doesn’t match with the user session, the server identifies it as a Cross-Site Request Forgery (CSRF) attack attempt and drops the request.'
    },
    {
        tip: 'Authentication and Authorization',
        tip_description: 'Implement strong user authentication and authorization mechanisms.',
        tip_about: 'https://blog.devgenius.io/security-and-authentication-as-a-frontend-engineer-7ebd69813e8d',
        tip_modal: ''
    },
    {
        tip: 'Avoid Hardcoding Secrets',
        tip_description: 'Never hardcode sensitive information like API keys or passwords in your frontend code.',
        tip_about: '',
        tip_modal: 'Utilize environment variables or secure backend services for handling such secrets.'
    }
]