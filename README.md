# Sense-i Documentation Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Search Index

This website uses a search engine powered by [Algolia](https://www.algolia.com). However, since this is not an open source project, it [does not qualify](https://docsearch.algolia.com/docs/who-can-apply/) for free crawling/indexing and there is a [monthly limit](https://www.algolia.com/pricing/) for search requests (10,000/mo) and index records (10,000/mo).

We can perform search indexing for free using a legacy version of the [Algolia DocSearch Scraper](https://github.com/algolia/docsearch-scraper) (although note the quickly-reached limit on index records above). To run this website crawler and update the live search index (which is stored on Algolia's servers), the easiest option is to execute the Docker image (although [other options](https://docsearch.algolia.com/docs/legacy/run-your-own/) also exist). 

This is done by running the following command from the root directory of this repository.

```
docker run -it --env-file=.env -e "CONFIG=$(cat algolia.config.json | jq -r tostring)" algolia/docsearch-scraper
```

**Note 1**: If not already installed, first ensure that Docker ([https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)) is set up and running on your system before running the above command.

**Note 2**: You must create/obtain an .env file in the root directory of this repository with the following sensitive values:

```
APPLICATION_ID=YOUR_APP_ID
API_KEY=YOUR_API_KEY
```