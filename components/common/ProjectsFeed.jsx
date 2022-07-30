import { useEffect, useState } from 'react';
import Project from './Project';
import * as S from './ProjectsFeed.styles';

const ProjectsFeed = ({ projects, annotationPrefix = '' }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [projectsByTag, setProjectsByTag] = useState({});
  const [tags, setTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const _projectsByTag = groupProjectsByTag(projects);
    setProjectsByTag(_projectsByTag);
    setTags(Object.keys(_projectsByTag));
  }, [projects]);

  useEffect(() => {
    if (selectedTag) {
      setFilteredProjects(projectsByTag[selectedTag]);
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedTag, projectsByTag, projects]);

  return (
    <div data-sb-field-path={annotationPrefix}>
      {renderTagFilters(tags, selectedTag, setSelectedTag)}
      {renderProjectsList(filteredProjects)}
    </div>
  );
};

const renderTagFilters = (tags, selectedTag, onSelect) => {
  if (!tags) {
    return null;
  }
  return (
    <S.TagFilters>
      <S.Tag data-sc-selected={!selectedTag} onClick={() => onSelect(null)}>
        All
      </S.Tag>
      {tags.map((tag) => (
        <S.Tag
          key={tag}
          data-sc-selected={tag === selectedTag}
          onClick={() => onSelect(tag)}
        >
          {tag}
        </S.Tag>
      ))}
    </S.TagFilters>
  );
};

const renderProjectsList = (projects) => {
  return (
    <S.ProjectsList>
      {projects.map((project, index) => (
        <Project key={index} annotationPrefix={`.[${index}]`} {...project} />
      ))}
    </S.ProjectsList>
  );
};

const groupProjectsByTag = (projects) => {
  const tags = {};
  for (const project of projects) {
    if (project.tags) {
      for (let tag of project.tags) {
        tag = tag.toLowerCase();
        if (!tags.hasOwnProperty(tag)) {
          tags[tag] = [];
        }
        tags[tag].push(project);
      }
    }
  }
  return tags;
};

export default ProjectsFeed;
