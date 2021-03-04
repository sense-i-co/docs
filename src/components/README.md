# Tutorial: Using Components

To implement advanced functionality in your web pages, you can make use of custom components. 
These have been designed to abstract away as much complexity as possible, allowing you to 
focus on only the page content.

The following components are available to use:

- **[DownloadButton](#DownloadButton)**: Display a download button for the associated file.
- **[Highlight](#Highlight)**: Set the font colour of the contained text.
- **[Image](#Image)**: Display a basic image with an optional caption.
- **[ImageDeck](#ImageDeck)**: Display an interactive slideshow with multiple images.
- **[ImageMap](#ImageMap)**: Display an image with overlayed clickable links.
- **[Link](#Link)**: Create a clickable link for the contained text.
- **[YouTube](#YouTube)**: Embed an interactive YouTube video.

**Note**: All relative paths in the below documentation assume that your page resides in 
`/src/pages/`. Please adjust the paths for your page accordingly if this is not the case.

---

## DownloadButton

### Description

The `DownloadButton` component is used to embed a simple button into the page which,
when pressed, initiates the download of a linked file. The button's title defaults 
to "Download" but can be customised by providing a title property. The background 
colour of the button matches the primary colour of website.

### Import Code

```javascript
import DownloadButton from '../components/DownloadButton';
```

### Properties

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `title` | String | No | "Download" | The text to display on the embedded button. |
| `link` | String | Yes | None | The relative or absolute path to the file which will be downloaded. |

### Usage Example

```javascript
// Example 1
const content = <DownloadButton link="/img/logo.png"/>;

// Example 2
const content = <DownloadButton title="Sense-i Installer" link="https://elfworks.co.za/subdomains/sense-i/Install/SenseiInstall.exe"/>;
```

---

## Highlight

### Description

The `Highlight` component is used to style the contained text in a custom colour. The 
highlighting can be achieved in one of two modes: (1) changing the font colour ("text" 
mode), and (2) changing the background colour of the line ("background" mode).
The highlight colour defaults to a yellow colour (defined in styles.css), but can be 
customised by passing the desired color code as a property when calling the component.

### Import Code

```javascript
import Highlight from '../components/Highlight';
```

### Properties

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `mode` | String | No | "text" | The highlighting mode, either "text" or "background". |
| `color` | String | No | "#f7b902" | The name or code of the colour to use for highlighting. |

### Usage Example

```javascript
// Example 1
const heading = <h1>Providing <Highlight>Systems For Success</Highlight></h1>;

// Example 2
const heading = <h1>Providing <Highlight color="red">Systems For Success</Highlight></h1>;

// Example 3
const heading = <h1>Providing <Highlight mode="background" color="orange">Systems For Success</Highlight></h1>;
```

---

## Image

### Description

The `Image` component is used to display a basic image on the page with an 
optional text caption below it.

### Import Code

```javascript
import Image from '../components/Image';
```

### Properties

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `src` | String | Yes | None | The path to the image file. |
| `caption` | String | No | None | The text caption to display below the image. |
| `maxWidth` | String | No | None | The maximum display width (in px) for this image. |

### Usage Example

```javascript
// Example 1
const content = <Image src="/img/pages/systems/operations-management/report.png"/>;

// Example 2
const content = <Image src="/img/pages/systems/operations-management/report.png" caption="Example Report"/>;
```

---

## ImageDeck

### Description

The `ImageDeck` component is used to display a rotating slideshow of images.
Each image in the slideshow can optionally have an associated link which
directs the user to a specific URL when the slide is clicked. The aspect 
ratio of the slideshow container conforms to the size of the first image in 
the src list (and remains the same as you rotate between images). Multiple 
UI options are available, including navigation buttons and position indicator 
dots. Furthermore, an automatic advance timer can be used to move on to the 
next image after a specific timeout interval (without user interaction).

### Import Code

```javascript
import ImageDeck from '../components/ImageDeck';
```

### Properties

#### ImageDeck

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `images` | [Image] | Yes | None | Array of images used in this slideshow. |
| `options` | Options | No | See Below | Various customisable options for the slideshow interface. |

#### Image

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ------------ |
| `src` | String | Yes | None | The path to the image for this slide in the ImageDeck. |
| `link` | String | No | "" | The URL for the clickable link associated with this slide. |

#### Options

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ------------ |
| `buttons` | Boolean | No | true | Whether or not to display the next and previous buttons. |
| `dots` | Boolean | No | true | Whether or not to display the position indicator dots. |
| `timer` | Boolean | No | true | Whether or not to use a timer to automatically advance to the next image. |
| `interval` | Float | No | 5 | The timeout interval (in seconds) to wait before advancing to the next image. |
| `maxWidth` | String | No | None | The maximum display width (in px) for all slides. |

### Usage Example

```javascript
// Example 1
const content = 
    <ImageDeck 
        images={[
            {src: "/img/pages/about-systems.png"},
            {src: "/img/undraw_researching_22gp.svg"},
            {src: "/img/undraw_dev_focus_b9xo.svg"}
        ]}
    />;
    
// Example 2
const content = 
    <ImageDeck 
        images={[
            {
                src: "/img/pages/about-systems.png",
                link: "/about"
            },
            {
                src: "/img/undraw_researching_22gp.svg"
            },
            {
                src: "/img/undraw_dev_focus_b9xo.svg",
                link: "/docs/"
            }
        ]}
        options={{
            buttons: false,
            timer: false
        }}
    />;
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
| `caption` | String | No | None | The text caption to display below the image map. |
| `maxWidth` | String | No | None | The maximum display width (in px) for this image map. |
| `areas` | [Area] | Yes | None | Array of area definitions, each representing an clickable region of the image. |

#### Area

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ------------ |
| `link` | String | Yes | None | The URL (either relative or absolute) for the clickable link associated with this area. |
| `boundary` | Boundary | Yes | None | The set of coordinates specifying the bounding box of the clickable region, which can either be a rectangle (provide `topLeft` and `bottomRight`), circle (provide `centre` and `radius`) or polygon (provide `points`). |

#### Boundary

The properties for a boundary are conditionally required:

- If you are defining a **rectangle**, you must provide `topLeft` and `bottomRight`.
- If you are defining a **circle**, you must provide `centre` and `radius`.
- If you are defining a **polygon**, you must provide `points`.

|  Name   | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| `topLeft` | [Float] | Yes (rect) | None | The [X, Y] coordinates for the top left of the bounding box. |
| `bottomRight` | [Float] | Yes (rect) | None | The [X, Y] coordinates for the bottom right of the bounding box. |
| `centre` | [Float] | Yes (circle) | None | The [X, Y] coordinates for the centre of the bounding circle. |
| `radius` | Float | Yes (circle) | None | The length of the radius for the bounding circle. |
| `points` | [[Float]] | Yes (poly) | None | The array of [X, Y] coordinates for the vertices of the bounding polygon. |

### Usage Example

```javascript
const content = 
    <ImageMap 
        src="/img/pages/about-systems.png"
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
| `title` | String | No | "" | The title to display for the embedded video. |

### Usage Example

```javascript
// Example 1
const content = <YouTube id="w-PRhPMp-h8"/>;

// Example 2
const content = <YouTube id="w-PRhPMp-h8" title="SEMS - Ocean Inspection & Maintenance"/>;
```
