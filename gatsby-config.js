module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "fw6zvPvLGqjQVoGeUidN15",
        token: "1eAxWUNIuOf8Po943L3ZGrsvTcEybR7Cz2g3luGwKlNjIdLz7snMCigdyAUdmwwTclpxhDXih70V4nNGBQNTg",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
