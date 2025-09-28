import Header from "./components/header/Header";
import ProfileCard from "./components/profileCard/ProfileCard";
import SkillsSection from "./components/skillsSection/SkillsSection";
import Testimonial from "./components/testimonial/Testimonial";
import ProjectsSection from "./components/projectsSection/ProjectsSection";
import style from "./App.module.css";
import avatar from "./assets/avatar.png";
import project1 from "./assets/project_1.png";
import project2 from "./assets/project_2.png";

function App() {
  return (
    <div className={style.App_container}>
      <div className={style.App}>
        <Header title={"Meu Portfólio"} />
        <ProfileCard
          picture={avatar}
          pictureName={"foto de perfil"}
          name={"Alef Silva"}
          description={"Graduando em Análise e Desenvolvimento de Sistemas"}
        />
        <SkillsSection
          title={"MINHA AUTO AVALIAÇÃO"}
          skills={[
            { title: "Flex & Grid Layout", score: 6, maxScore: 10 },
            { title: "Media Query", score: 6, maxScore: 10 },
            { title: "Estilização React", score: 6, maxScore: 10 },
            { title: "Material UI", score: 3, maxScore: 10 },
          ]}
        />
        <SkillsSection
          title={"AVALIAÇÃO DO PROFESSOR"}
          skills={[
            { title: "Didática", score: 10, maxScore: 10 },
            { title: "Domínio", score: 10, maxScore: 10 },
          ]}
        />
        <Testimonial
          title={"MEU DEPOIMENTO"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic amet vel magni! Earum, et nulla rem inventore quas assumenda repudiandae minus quasi deleniti eveniet eius porro! Molestiae, dignissimos tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic amet vel magni! Earum, et nulla rem inventore quas assumenda repudiandae minus quasi deleniti eveniet eius porro! Molestiae, dignissimos tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic amet vel magni! Earum, et nulla rem inventore quas assumenda repudiandae minus quasi deleniti eveniet eius porro! Molestiae, dignissimos tempore?"
          }
        />
        <ProjectsSection
          title={"MEUS PROJETOS"}
          projects={[
            { projectName: "React Social Feed", projectImage: project1, projectLink: "https://react-social-feed-omega.vercel.app/" },
            { projectName: "Responsive Design", projectImage: project2, projectLink: "https://infnet-responsive-design.vercel.app/" }
          ]}
          />
      </div>
    </div>
  );
}

export default App;
