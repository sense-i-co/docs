# Tutorial: Using Components

To implement advanced functionality in your web pages, you can make use of custom components. 
These have been designed to abstract away as much complexity as possible, allowing you to 
focus on only the page content.

The following components are available to use:

- **[Highlight](##Highlight)**: Set the font colour of the contained text.
- **[ImageMap](##ImageMap)**: Display an image with overlayed clickable links.
- **[Link](##Link)**: Create a clickable link for the contained text.
- **[YouTube](##YouTube)**: Embed an interactive YouTube video.

**Note**: All relative paths in the below documentation assume that your page resides in 
`/src/pages/`. Please adjust the paths for your page accordingly if this is not the case.

---

## Highlight

### Description

The `Highlight` component is used to style the contained text in a custom colour. This 
defaults to a yellow colour (defined in styles.highlight.css), but can be customised 
by passing the desired color code as a property when calling the component.

### Import Code

```javascript
import Highlight from '../components/Highlight';
```

### Properties

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `color` | String | No | #f7b902 | The name or code of the font colour to use for the contained text. |

<br/>

### Usage Example

```javascript
// Example 1
const heading = <h1>Providing <Highlight>Systems For Success</Highlight></h1>;

// Example 2
const heading = <h1>Providing <Highlight color="red">Systems For Success</Highlight></h1>;
```

---

## ImageMap

### Description

The `ImageMap` component is used to display an image with multiple overlayed hyperlinks. These 
links are defined as regions (or "areas") of the image with a particular bounding box that is 
directed to a specified URL. Three types of bounding box are supported for these areas: rect 
(rectangle), circle and poly (polygon). The provided area coordinates are based on the original 
size of the image, where the origin [0,0] is the top left corner of the image. The component 
automatically handles the scaling of these coordinates when the image is resized (for example, 
when the user changes the size of the browser window).

### Import Code

```javascript
import ImageMap from '../components/ImageMap';
```

### Properties

#### ImageMap

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `src` | String | Yes | None | The path to the image to be used as the background for this image map. |
| `areas` | [Area] | Yes | None | Array of area definitions, each representing an clickable region of the image. |

<br/>

#### Area

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ------------ |
| `link` | String | Yes | None | The URL (either relative or absolute) for the clickable link associated with this area. |
| `boundary` | Boundary | Yes | None | The set of coordinates specifying the bounding box of the clickable region, which can either be a rectangle (provide `topLeft` and `bottomRight`), circle (provide `centre` and `radius`) or polygon (provide `points`).

<br/>

#### Boundary

The properties for a boundary are conditionally required:

- If you are defining a **rectangle**, you must provide `topLeft` and `bottomRight`
- If you are defining a **circle**, you must provide `centre` and `radius`
- If you are defining a **polygon**, you must provide `points`

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `topLeft` | [Float] | Yes (rect) | None | The [X, Y] coordinates for the top left of the bounding box. |
| `bottomRight` | [Float] | Yes (rect) | None | The [X, Y] coordinates for the bottom right of the bounding box. |
| `centre` | [Float] | Yes (circle) | None | The [X, Y] coordinates for the centre of the bounding circle. |
| `radius` | Float | Yes (circle) | None | The length of the radius for the bounding circle. |
| `points` | [[Float]] | Yes (poly) | None | The array of [X, Y] coordinates for the vertices of the bounding polygon. |

<br/>

### Usage Example

```javascript
const content = 
    <ImageMap 
        src="img/pages/about-systems.png"
        areas={[
            {
                link: "/",
                boundary: {
                    topLeft: [100, 110],
                    bottomRight: [605, 510]
                }
            },
            {
                link: "/docs/",
                boundary: {
                    topLeft: [645, 110],
                    bottomRight: [1150, 510]
                }
            },
            {
                link: "/about",
                boundary: {
                    centre: [1450, 320],
                    radius: 200
                }
            },
            {
                link: "http://www.example.com",
                boundary: {
                    points: [
                        [90, 570],
                        [2270, 750],
                        [90, 750]
                    ]
                }
            }
        ]}
    />;
```

---

## Link

### Description

The `Link` component is used to create a clickable link for the contained text.

### Import Code

```javascript
import Link from '@docusaurus/Link';
```

### Properties

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `to` | String | Yes | None | The URL (either relative or absolute) for the clickable link. |

<br/>

### Usage Example

```javascript
const content = <p>Chat to a Sense-i Advisor, email us at <Link to="mailto:info@sense-i.co.za">info@sense-i.co.za</Link> or view our systems.</p>;
```

---

## YouTube

### Description

The `YouTube` component is used to embed a YouTube video in a web page. You are required to 
provide the video ID (i.e. the part at the end of the YouTube URL) as well as the title to 
display at the top of the embedded video.

### Import Code

```javascript
import YouTube from '../components/YouTube';
```

### Properties

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `id` | String | Yes | None | The YouTube video ID (from the video's URL). |
| `title` | String | No | None | The title to display for the embedded video. |

<br/>

### Usage Example

```javascript
// Example 1
const content = <YouTube id="w-PRhPMp-h8"/>;

// Example 2
const content = <YouTube id="w-PRhPMp-h8" title="SEMS - Ocean Inspection & Maintenance"/>;
```
