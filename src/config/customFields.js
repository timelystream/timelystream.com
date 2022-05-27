const consts = require("./consts")

module.exports = {
  artifactHubUrl: "https://artifacthub.io/packages/helm/timelystream/blazar",
  copyright: `Copyright © ${new Date().getFullYear()} TimelyStream`,
  crunchbaseUrl: "https://www.crunchbase.com/organization/blazar",
  demoUrl: `https://demo.${consts.domain}`,
  description:
    "Blazar is an open source database designed to fastest and accurate real-time streaming database. It uses SQL that is compatible with Postgres.",
  dockerUrl: "https://hub.docker.com/r/timelystream/blazar",
  domain: consts.domain,
  githubOrgUrl: consts.githubOrgUrl,
  githubUrl: `${consts.githubOrgUrl}/blazar`,
  helmVersion: "0.8.0",
  linkedInUrl: "https://www.linkedin.com/company/timelystream/",
  oneLiner: "Blazar: the fastest and accurate real-time streaming database",
  slackUrl: `https://slack.${consts.domain}`,
  stackoverflowUrl: "https://stackoverflow.com/questions/tagged/blazar",
  twitterUrl: "https://twitter.com/timelystream",
  videosUrl: "https://www.youtube.com/c/blazar",
  redditUrl: "https://www.reddit.com/r/blazar",
  linenUrl: "https://community-chat.blazar",
}
