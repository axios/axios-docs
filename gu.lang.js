/**
 * Configuration for the english (original) translation
 */

module.exports = {
    // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
    display: "Gujrati",
    prefix: "/gu",
    dir: "ltr",
    lang: "gu",
    // `p` stands for `paragraph`. This will contain translations of full text blocks
    p: {
        headline: "બ્રાઉઝર અને node.js માટે પ્રોમિસ આધારિત HTTP ક્લાયંટ",
        subhead: `Axios એ બ્રાઉઝર અને node.js માટે એક સરળ વચન આધારિત HTTP ક્લાયંટ છે.
                Axios ખૂબ જ એક્સ્ટેન્સિબલ ઇન્ટરફેસ સાથે નાના પેકેજમાં ઉપયોગમાં સરળ લાઇબ્રેરી પ્રદાન કરે છે.`,
        sponsors: `<p>અમારા પ્રોજેક્ટને ટેકો આપવા બદલ વિચારણા કરવા બદલ આભાર..</p>
               <p>જો તમે પસંદ કરેલ સ્તર આ લાભ પ્રદાન કરશે, તો તમને 24 કલાકની અંદર આપમેળે આ સૂચિમાં ઉમેરવામાં આવશે..</p>
               <div class="social"><a class="link" href="/docs/sponsor">Read more...</a></div>
              `
    },
    // `t` stands fot `translation`. This will contain translations of single words or phrases
    t: {
        "Get Started": "શરૂ કરો",
        "View on GitHub": "GitHub પર જુઓ",
        "Languages": "ભાષાઓ",
        "Open Source": "ઓપન સોર્સ",
        "Contribute": "ફાળો આપો",
        "Source on GitHub": "GitHub પર સ્ત્રોત",
        "Issues": "સમસ્યાઓ",
        "Pull Requests": "પુલ વિનંતીઓ",
        "Code of Conduct": "કોડ ઓફ કોંડઉક્ત",
        "Fork on GitHub": "ફોર્ક ઓન Github",
        "Fork the Website": "ફોર્ક ધ વેબસાઇટ",
        "Create an Issue": "સમસ્યા બનાવો",
        "Next": "પછી",
        "Previous": "પેલા નું",
        "Website Copy Right Footer": "વેબસાઇટ નું ફૂટેર કોપી કરો",
        "View On Github": "Github પર જુઓ",
        "Axios Project Copy Right Footer": "એક્સિઓસ પ્રોજેક્ટ કોપી રાઇટ ફૂટર",
        "License Label Footer": "લાઇસન્સ લેબલ ફૂટર",
        "Sponsors": "સ્પોન્સર્સ",
        "Become a sponsor": "સ્પોન્સર્સ બનો",
        "Gold Sponsors": "ગોલ્ડ સ્પોન્સર્સ"
    },
    sidebar: [
        {
            type: "heading",
            text: "શરૂઆત કરવી",
        },
        {
            type: "link",
            href: "/docs/intro",
            text: "પરિચય",
        },
        {
            type: "link",
            href: "/docs/example",
            text: "ઉદાહરણ",
        },
        {
            type: "link",
            href: "/docs/post_example",
            text: "પોસ્ટ વિનંતીઓ",
        },
        {
            type: "heading",
            text: "Axios એપીઈ",
        },
        {
            type: "link",
            href: "/docs/api_intro",
            text: "Axios એપીઈ",
        },
        {
            type: "link",
            href: "/docs/instance",
            text: "એક્સિઓસ ઉદાહરણ",
        },
        {
            type: "link",
            href: "/docs/req_config",
            text: "વિનંતી રૂપરેખાંકન",
        },
        {
            type: "link",
            href: "/docs/res_schema",
            text: "પ્રતિભાવ યોજના",
        },
        {
            type: "link",
            href: "/docs/config_defaults",
            text: "કોનફિનગ ડિફોલ્ટ્સ",
        },
        {
            type: "link",
            href: "/docs/interceptors",
            text: "ઇન્ટરસેપ્ટર્સ",
        },
        {
            type: "link",
            href: "/docs/handling_errors",
            text: "ભૂલોનું નિરાકરણ",
        },
        {
            type: "link",
            href: "/docs/cancellation",
            text: "રદ",
        },
        {
            type: "link",
            href: "/docs/urlencoded",
            text: "🆕 URL-Encoding Bodies",
        },
        {
            type: "link",
            href: "/docs/multipart",
            text: "🆕 બહુપક્ષીય સંસ્થાઓ",
        },
        {
            type: "heading",
            text: "બીજું",
        },
        {
            type: "link",
            href: "/docs/notes",
            text: "નોંધ",
        },
        {
            type: "heading",
            text: "સમર્થકો",
        },
        {
            type: "link",
            href: "/docs/sponsor",
            text: "axios સમર્થક",
        },
        {
            type: "link",
            href: "https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md",
            text: "કોડ ઓફ કોંડઉક્ત",
        },
        {
            type: "link",
            href: "https://github.com/axios/axios/blob/v1.x/COLLABORATOR_GUIDE.md",
            text: "સહયોગી માર્ગદર્શિકા",
        },
        {
            type: "link",
            href: "https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md",
            text: "axios માં ફાળો આપો"
        },
        {
            type: "link",
            href: "/docs/translating",
            text: "આ docs નું ભાષાંતર"
        }
    ],
};
