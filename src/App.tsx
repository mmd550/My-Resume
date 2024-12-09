import { ThemeProvider } from "setup/theme/theme-provider";
import { Profile } from "components/profile/profile";
import "./App.css";
import { Chip, Grid2, Grid2Props, styled } from "@mui/material";
import { Typography } from "components/ui/typography";
import {
  ResumeCard,
  ResumeCardColor,
  ResumeCardItem,
} from "components/ui/resume-card";

const SPACING = 4;
function App() {
  return (
    <>
      <ThemeProvider>
        <Root>
          <Profile sx={{ mb: SPACING }} />
          <Grid2 container spacing={SPACING}>
            <Column>
              <ResumeCard
                color={ResumeCardColor.CREAM}
                radius={{ topLeft: true }}
                title="Education"
              >
                <ResumeCardItem>
                  <Typography>2017 - 2021</Typography>
                  <Typography fontWeight="bold">
                    Bachelor's Degree Mechanical Engineering
                  </Typography>
                  <Typography>Tehran University</Typography>
                </ResumeCardItem>
              </ResumeCard>
              <ResumeCard
                color={ResumeCardColor.LILAC}
                radius={{ topRight: true }}
                title="Contact"
              >
                <ResumeCardItem>
                  <Typography fontWeight="bold">Phone</Typography>
                  <Typography>+98 9196267890</Typography>
                </ResumeCardItem>
                <ResumeCardItem>
                  <Typography fontWeight="bold">Email</Typography>
                  <Typography>mmd77frvrdn@gmail.com</Typography>
                </ResumeCardItem>
                <ResumeCardItem>
                  <Typography fontWeight="bold">Address</Typography>
                  <Typography>Tehranpars, Tehran, Iran</Typography>
                </ResumeCardItem>
              </ResumeCard>
              <ResumeCard
                radius={{ bottomLeft: true }}
                title="Language"
                color={ResumeCardColor.LILAC}
              >
                <ResumeCardItem>
                  <Typography>English</Typography>
                  <Typography>Persian</Typography>
                </ResumeCardItem>
              </ResumeCard>
            </Column>

            <Column>
              <ResumeCard
                radius={{ topRight: true }}
                title="Experience"
                color={ResumeCardColor.LILAC}
              >
                <ResumeCardItem>
                  <ExperienceItem>
                    <Typography component="pre">
                      {"Jan, 2021 - Sep, 2021 \n LIFE Team"}
                    </Typography>
                    <ExperienceItemDesc>Front end developer</ExperienceItemDesc>
                  </ExperienceItem>
                </ResumeCardItem>
                <ResumeCardItem>
                  <ExperienceItem>
                    <Typography component="pre">
                      {"Sep, 2021 - July, 2023 \n Arghavan"}
                    </Typography>
                    <ExperienceItemDesc>Front end developer</ExperienceItemDesc>
                  </ExperienceItem>
                </ResumeCardItem>
                <ResumeCardItem>
                  <ExperienceItem>
                    <Typography component="pre">
                      {"Sep, 2021 - July, 2023 \n Arghavan"}
                    </Typography>
                    <ExperienceItemDesc>AI researcher</ExperienceItemDesc>
                  </ExperienceItem>
                </ResumeCardItem>
                <ResumeCardItem>
                  <ExperienceItem>
                    <Typography component="pre">
                      {"Sep, 2021 - July, 2023 \n Arghavan "}
                    </Typography>
                    <ExperienceItemDesc>
                      AR researcher and developer
                    </ExperienceItemDesc>
                  </ExperienceItem>
                </ResumeCardItem>
                <ResumeCardItem>
                  <ExperienceItem>
                    <Typography component="pre">
                      {"July, 2023 - present \n Weblite"}
                    </Typography>
                    <ExperienceItemDesc>Front end developer</ExperienceItemDesc>
                  </ExperienceItem>
                </ResumeCardItem>
              </ResumeCard>
              <ResumeCard
                radius={{ bottomRight: true, topLeft: true }}
                sx={{ backgroundColor: "#fcede1" }}
                title="Skills"
                color={ResumeCardColor.CREAM}
              >
                <ResumeCardItem
                  sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <SkillsChips
                    skills={[
                      "Typescript",
                      "WebSocket",
                      "ReactJS",
                      "ThreeJs",
                      "Mui-Material",
                      "NextJS",
                      "Python",
                      "Deep Learning",
                      "Computer Vision",
                      "Photoshop",
                      "CSS/SCSS",
                    ]}
                  />
                </ResumeCardItem>
              </ResumeCard>
            </Column>

            <Grid2 size={{ xs: 12 }}>
              <ResumeCard
                radius={{
                  topLeft: true,
                  bottomRight: true,
                }}
                color={ResumeCardColor.LILAC}
                title="Projects"
              >
                {projects.map((project) => (
                  <ProjectsResumeCardContent
                    {...project}
                    key={
                      typeof project.name === "string"
                        ? project.name
                        : project.name.value
                    }
                  />
                ))}
              </ResumeCard>
            </Grid2>
          </Grid2>
        </Root>
      </ThemeProvider>
    </>
  );
}

export default App;

const Root = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Column = (props: Grid2Props) => {
  return (
    <Grid2
      size={{ xs: 12, sm: 6 }}
      container
      alignItems="center"
      direction="column"
      rowGap={SPACING}
      {...props}
    />
  );
};

const ExperienceItem = (props: Grid2Props) => {
  return (
    <Grid2
      flexWrap="wrap"
      container
      columnGap={2}
      alignItems="flex-start"
      {...props}
    />
  );
};

const ExperienceItemDesc = styled(Typography)`
  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    max-width: 110px;
  }
  font-weight: bold;
`;

const SkillsChips = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill) => (
        <Chip key={skill} label={skill} variant="outlined" />
      ))}
    </>
  );
};

interface Project {
  name: string | { href: string; value: string };
  company: string | { href: string; value: string };
  desc?: string;
}
const projects: Project[] = [
  {
    name: { value: "Weblite - ReactJs", href: "https://weblite.me" },
    company: "Tosee Ertebatate Asre Rosha",
    desc: "A specialized platform for conducting educational courses on a messaging platform.",
  },
  {
    name: "RoomInt - DeepLearning, AR with ThreeJs",
    company: "Arghavan",
    desc: "Indoor decoration using Al and AR.",
  },
  {
    name: "Labeling Software - OpenCV",
    company: "Arghavan",
    desc: "A software for labeling images for computer vision based on opencv.",
  },
  {
    name: "Mohandes web app - VueJs",
    company: "LIFE team",
    desc: "Accounting and human resource management",
  },
  {
    name: "Ceremony web app - ReactJs",
    company: "LIFE team",
    desc: "Managing ceremony and selling ceremony tickets.",
  },
  {
    name: "Darsup web app - ReactJs",
    company: "Arghavan",
    desc: "Online education system based on open EDX",
  },
];
const ProjectsResumeCardContent = ({ name, company, desc }: Project) => {
  return (
    <ResumeCardItem>
      <Typography
        fontWeight="bold"
        href={typeof name === "string" ? undefined : name.href}
      >
        {typeof name === "string" ? name : name.value}
      </Typography>
      <Typography
        mb={desc ? 0.5 : 0}
        variant="body2"
        href={typeof company === "string" ? undefined : company.href}
      >
        {typeof company === "string" ? company : company.value}
      </Typography>
      {desc && <Typography>{desc}</Typography>}
    </ResumeCardItem>
  );
};
