import Header from "./components/header/Header";
import SkillsSection from "./components/skillsSection/SkillsSection";
import SoftSkillSection from "./components/softSkill/softSkill_section/SoftSkillSection";
import Testimonial from "./components/testimonial/Testimonial";
import ProfileCard from "./components/profileCard/ProfileCard";
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
          title={"SKILLS"}
          skills={[
            { title: "Mobile-First", nivel: "Acadêmico" },
            { title: "React", nivel: "Acadêmico" },
            { title: "HTML", nivel: "Acadêmico" },
            { title: "JavaScript", nivel: "Acadêmico" },
          ]}
        />

        <SoftSkillSection
          title={"SOFT SKILLS"}
          softSkills={[
            {
              title: "Inglês",
              description: "B1 - Intermediário",
            },
          ]}
        />

        <Testimonial
          title={"SOBRE MIM"}
          text={
            "Estou em transição de carreira e busco um estágio na área de desenvolvimento de software, onde possa aplicar de forma prática os conhecimentos adquiridos no curso de Análise e Desenvolvimento de Sistemas. Tenho grande interesse em trabalhar em projetos reais, contribuindo desde a concepção até a implementação de soluções, aprimorando minhas habilidades técnicas e minha capacidade de resolver problemas. Sou motivado, comprometido e estou sempre disposto a aprender; além do desenvolvimento de software, estudo inglês de forma autodidata, buscando alcançar uma segunda língua que me proporcione oportunidades internacionais no futuro. Estou constantemente aprimorando meus conhecimentos e pronto para agregar valor à equipe e aos projetos nos quais estiver envolvido."
          }
        />
        <ProjectsSection
          title={"MEUS PROJETOS"}
          projects={[
            {
              projectName: "React Social Feed",
              projectImage: project1,
              projectLink: "https://react-social-feed-omega.vercel.app/",
            },
            {
              projectName: "Responsive Design",
              projectImage: project2,
              projectLink: "https://infnet-responsive-design.vercel.app/",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
