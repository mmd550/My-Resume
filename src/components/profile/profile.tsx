import { Grid2, styled, SxProps, Typography } from "@mui/material";
import { ResumeCard } from "components/ui/resume-card";
import { WithBorderBottom } from "components/ui/with-border-bottom";

interface Props {
  sx?: SxProps;
  className?: string;
}
export function Profile({ sx, className }: Props) {
  return (
    <Grid2 sx={sx} className={className} container alignItems="center">
      <Grid2 size={{ xs: 12, sm: 6 }} container justifyContent="center">
        <ProfileImage radius={{ topRight: true, bottomLeft: true }} />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }} sx={{ px: 4 }} alignItems="flex-start">
        <Typography variant="h3" textAlign="left">
          Mohammad Farvardin
        </Typography>
        <Typography variant="subtitle1" textAlign="left" mb={3}>
          Software Developer
        </Typography>

        <WithBorderBottom sx={{ mb: 1.5 }}>
          <Typography variant="h4" textAlign="left">
            Profile
          </Typography>
        </WithBorderBottom>

        <Typography variant="body1" textAlign="left">
          Hello! I am Mohammad Farvardin, a front-end web developer and AI/AR
          researcher. I love creating new applications and tackling challenges.
          I also enjoy learning and staying up-to-date with new technologies and
          libraries relevant to my job.
        </Typography>
      </Grid2>
    </Grid2>
  );
}

const ProfileImage = styled(ResumeCard)`
  height: 230px;
  width: 100%;
  max-width: 140px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: 400px;
    width: 100%;
    max-width: 250px;
    margin-bottom: 0;
  }
  background-image: url("./images/profile-small.png");
  background-position: center;
  background-color: #fcede180;
  background-repeat: no-repeat;
  background-size: cover;
`;
