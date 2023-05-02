//  This component contains the list of projects to be displayed on the Portfolio page.
//  The Portfolio page and Project component JSX and CSS are handled in Project.js and Project.css.

//  Project data should be formatted as such:
//{
//   image: require("./../assets/images/<image.png>"),
//   imageAlt: "Alt text for image",
//   title: "Project Title",
//   subtitle: "Project Subtitle",
//   linkOne: "https://<heroku-app>.herokuapp.com/",
//   linkOneText: "Deployed App",
//   linkTwo: "https://github.com/<github-username>/<project-repository>",
//   linkTwoText: "Repo",
//   id: "1",
// },

const projects = [
  {
    image: require("./../assets/images/JATE.png"),
    imageAlt: "Text editor app with install button in header.",
    title: "Just Another Text Editor",
    subtitle: "Progressive Web Application",
    linkOne: "https://texty-rexy.herokuapp.com/",
    linkOneText: "Deployed App",
    linkTwo: "https://github.com/Jacob-Aston/texty-rexy",
    linkTwoText: "Repo",
    id: "1",
  },
  {
    image: require("./../assets/images/WeatherForecast.png"),
    imageAlt: "Five day weather forecast with search bar and current weather.",
    title: "Weather Forecast",
    subtitle: "Weather API",
    linkOne: "https://github.com/Jacob-Aston/weather-forecast",
    linkOneText: "Repo",
    id: "2",
  },
  {
    image: require("./../assets/images/Stats-Tasktics.png"),
    imageAlt: "Graphs with some statistics on statistics page.",
    title: "Stats-Tasktics",
    subtitle: "MERN Stack",
    linkOne: "https://stat-tasktics.herokuapp.com/",
    linkOneText: "Deployed App",
    linkTwo: "https://github.com/Jacob-Aston/stats-tasktics",
    linkTwoText: "Repo",
    id: "4",
  },
];

export default projects;
