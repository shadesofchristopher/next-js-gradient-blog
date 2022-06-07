export const getGlobalData = () => {
    const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Sample Gradient Blog';
    const blogTitle = process.env.BLOG_TITLE
    ?decodeURI(process.env.BLOG_TITLE)
    : 'Made with Next Js and Tailwind';
    const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved @Christopher';

    return {
    name, 
    blogTitle,
    footerText,
    };
};