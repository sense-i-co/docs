# Tutorial: Using Templates

To create a new stand-alone page on the website, you must complete the following tasks:

1. Create a `page.js` in `/src/pages/` (where "page" is replaced with a relevant file name, e.g. `about.js` for the About page).

2. In your new file, import React and the required template (from `/src/templates/`).

    - **Code Example**: 

        ```javascript
        import React from 'react';
        import Template from '../templates/Default';
        ```

    - **Note**: There was only one available template at the time of writing: `/src/templates/Default.js`.

    - **Note**: If you require the use of custom components (see `/src/components/README.md`) when defining the properties of your page, you must remember to also import them at the top of your page's file. For example, the example code in the next section uses the `YouTube` component to embed a video on the page, so it must be imported as follows:

        ```javascript
        import YouTube from '../components/YouTube';
        ```

3. Next, define the properties required for template you are using. These properties will contain the content and everything else needed to produce your page. For the `Default` template these properties are: `metadata`, `banner` and `sections`.

    - **Code Example**:

        ```javascript
        const metadata = {
            title: "Page Title",
            description: "Page Description"
        }
        const banner = {
            heading: "Eye-catching Statement to Display In The Banner"
        }
        const sections = [
            {
                heading: "First Section",
                content: (
                    <>
                        <p>
                            Some text content.
                        </p>
                        <YouTube id="w-PRhPMp-h8" title="Video Title"/>
                    </>
                )
            }
        ]
        ```

    - **Note**: Documentation on all available properties for a template can be found in the comments provided at the top of the relevant template file (e.g. `/src/templates/Default.js`) 
    
4. Define a function (named after your page) which passes the properties you just defined into the template.

    - **Code Example**:

        ```javascript
        function About() {
            return (
                <Template
                    metadata={metadata}
                    banner={banner}
                    sections={sections} 
                    />
            );
        }
        ```

5. Export your function so that it can accessed by Docusaurus for displaying the page.

    - **Code Example**:

        ```javascript
        export default About;
        ```

6. Finally, add a link to your page on the website's navigation bar so that user's can get to the page. Do this by adding the appropriate entry to the `navbar.items` property in the `docusaurus.config.js` file.

    - **Code Example**:

        ```javascript
        module.exports = {
            ...
            themeConfig: {
                navbar: {
                    ...
                    items: [
                        ...
                        {
                            to: 'about',
                            activeBasePath: 'about',
                            label: 'About Us',
                            position: 'left',
                        },
                        ...
                },
                ...
            }
            ...
        }
        ```