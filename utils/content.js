import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import glob from 'glob';
import frontmatter from 'front-matter';

export const sbConfig = yaml.load(fs.readFileSync('./stackbit.yaml', 'utf8'));
if (!sbConfig.pagesDir || !sbConfig.dataDir)
  throw new Error('Invalid Stackbit config file');

export const siteConfigFile = sbConfig.dataDir + '/config.json';
export const themeStyleFile = sbConfig.dataDir + '/style.json';

const supportedFileTypes = ['md', 'json'];

const resolvers = {
  AboutLayout(object) {
    object.sections = object.sections.map((section) => {
      const resolver = resolvers[section.type];
      return resolver ? resolver(section) : section;
    });
    return object;
  },
  PortfolioLayout(object) {
    object.projects = object.projects.map(readContent);
    return object;
  },
  AboutStorySection(object) {
    object.workExperiences = object.workExperiences.map(readContent);
    return object;
  },
  EducationSection(object) {
    object.educations = object.educations.map(readContent);
    return object;
  },
};

function contentFilesInPath(dir) {
  const globPattern = `${dir}/**/*.{${supportedFileTypes.join(',')}}`;
  return glob.sync(globPattern);
}

function readContent(file) {
  const rawContent = fs.readFileSync(file, 'utf8');
  let content = null;
  switch (path.extname(file).substring(1)) {
    case 'md':
      const parsedMd = frontmatter(rawContent);
      content = {
        ...parsedMd.attributes,
        body: parsedMd.body,
      };
      break;
    case 'json':
      content = JSON.parse(rawContent);
      break;
    default:
      throw Error(`Unhandled file type: ${file}`);
  }

  content.__id = file;
  content.__url = fileToUrl(file);
  return content;
}

function fileToUrl(file) {
  if (!file.startsWith(sbConfig.pagesDir)) return null;

  let url = file.slice(sbConfig.pagesDir.length);
  url = url.split('.')[0];
  if (url.endsWith('/index')) {
    url = url.slice(0, -6) || '/';
  }
  return url;
}

function urlToFilePairs() {
  const pageFiles = contentFilesInPath(sbConfig.pagesDir);
  return pageFiles.map((file) => [fileToUrl(file), file]);
}

export function resolveStaticProps(object) {
  const resolver = resolvers[object.layout];
  return resolver ? resolver(object) : object;
}

export function urlToContent(url) {
  const urlToFile = Object.fromEntries(urlToFilePairs());
  const file = urlToFile[url];
  return resolveStaticProps(readContent(file));
}

export function pagesByType(contentType) {
  let result = {};
  for (const [url, file] of urlToFilePairs()) {
    const content = readContent(file);
    if (content.type === contentType) result[url] = content;
  }
  return result;
}

export function pagesWithLayout() {
  let result = {};
  for (const [url, file] of urlToFilePairs()) {
    const content = readContent(file);
    if (content.layout) result[url] = content;
  }
  return result;
}

export function siteConfig() {
  return readContent(siteConfigFile);
}

export function themeStyle() {
  return readContent(themeStyleFile);
}
