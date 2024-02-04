import { useFetchProject } from '../fetchProject';

const Project = () => {
  const { loading, projects } = useFetchProject();
  console.log(loading, projects);
  return <div>Project</div>;
};
export default Project;
